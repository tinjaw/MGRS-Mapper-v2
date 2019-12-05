const MAX_WAITING_TIME = 5000;// in ms
const DATABASE_NAME = 'GridDB';

const processStatus = (response) => {
  if (response.status === 200 || response.status === 0) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
};


const parseJson = response => response.json();

/* @returns {wrapped Promise} with .resolve/.reject/.catch methods */
// It goes against Promise concept to not have external access to .resolve/.reject methods, but provides more flexibility
const getWrappedPromise = () => {
  const wrappedPromise = {};
  const promise = new Promise(((resolve, reject) => {
    wrappedPromise.resolve = resolve;
    wrappedPromise.reject = reject;
  }));
  wrappedPromise.then = promise.then.bind(promise);
  wrappedPromise.catch = promise.catch.bind(promise);
  // e.g. if you want to provide somewhere only promise, without .resolve/.reject/.catch methods
  wrappedPromise.promise = promise;
  return wrappedPromise;
};

/* @returns {wrapped Promise} with .resolve/.reject/.catch methods */
const getWrappedFetch = function () {
  const wrappedPromise = getWrappedPromise();
  const args = Array.prototype.slice.call(arguments);// arguments to Array
  // calling original fetch() method
  fetch(...args)
    .then((response) => {
      wrappedPromise.resolve(response);
    }, (error) => {
      wrappedPromise.reject(error);
    })
    .catch((error) => {
      wrappedPromise.catch(error);
    });
  return wrappedPromise;
};

/**
 * Fetch JSON by url
 * @param { {
 *  url: {String},
 *  [cacheBusting]: {Boolean}
 * } } params
 * @returns {Promise}
 */
const getJSON = (params) => {
  const wrappedFetch = getWrappedFetch(
    params.cacheBusting ? `${params.url}?${new Date().getTime()}` : params.url,
    {
      method: 'get', // optional, "GET" is default value
      headers: {
        Accept: 'application/json',
      },
    },
  );

  const timeoutId = setTimeout(() => {
    wrappedFetch.reject(new Error(`Load timeout for resource: ${params.url}`));// reject on timeout
  }, MAX_WAITING_TIME);

  // getting clear promise from wrapped
  return wrappedFetch.promise
    .then((response) => {
      clearTimeout(timeoutId);
      return response;
    })
    .then(processStatus)
    .then(parseJson);
};

// Now let's get the 100K grid square JSON file and store it into IndexedDB
const url = './gridHelper/correctCornerGrids_Formatted_Fixed.json';

getJSON({ url, cacheBusting: true })
  .then((data) => {
    let db;
    const request = indexedDB.open(DATABASE_NAME, 1);
    const gzdID = Object.getOwnPropertyNames(data);

    request.onupgradeneeded = (event) => {
      db = event.target.result;
      if (!db.objectStoreNames.contains('Grids100K')) {
        db.createObjectStore('Grids100K', {
          autoIncrement: true,
          keyPath: 'id',
        });
      }
    };

    request.onsuccess = () => {
      // Loop through the JSON data and store it in IndexedDB
      gzdID.map((e, i) => {
        db = request.result;
        db.transaction('Grids100K', 'readwrite')
          .objectStore(['Grids100K'])
          .add({
            id: e,
            [e]: Object.entries(data)[i][1],
          });
      });
    };

    request.onerror = (event) => {
      console.log('The database is opened failed');
      console.log(event.target.error);
    };
  }, (error) => {
    console.error('An error occured!');
    console.error(error.message ? error.message : error);
  });

// Dynamically retrieve the visible Grid Zone Designators and their 100K grid squares
const { self } = this;
self.onmessage = (event) => {
  let db;
  const visibleGZDs = event.data;
  const req = this.indexedDB.open(DATABASE_NAME, 1);

  req.onupgradeneeded = () => {
    // The database did not previously exist, so create object stores and indexes.
    self.postMessage('successfully upgraded db');
  };

  req.onsuccess = () => {
    db = req.result;

    const transaction = db.transaction(['Grids100K'], 'readonly');
    const invoiceStore = transaction.objectStore('Grids100K');
    visibleGZDs.forEach((key) => {
      invoiceStore.get(key).onsuccess = (ev) => {
        try {
          self.postMessage({
            GZD: key,
            Grid100K: ev.target.result[key],
          });
        } catch (error) {
          console.error(`Grid Square Designator ${key} is not loaded because you are over a body of water`);
        }
      };
    });
    db.close();
  };

  req.onerror = () => {
    self.postMessage('error');
  };
};
