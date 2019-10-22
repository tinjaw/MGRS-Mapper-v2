import Moveable from 'moveable';
import { bounceInAnimation } from './helperFunctions';


// img.src = 'http://kryogenix.org/images/hackergotchi-simpler.png';

window.Moveable = Moveable;

const draggy = {
  location: document.querySelector('.newSVG > svg'),
  get newLocation() {
    const propertyToModify = {
      location: document.querySelector('.newSVG > svg'),
    };
    const modifiedTarget = Object.assign({}, this.location, propertyToModify);
    return modifiedTarget;
  },
  get genImg() {
    const svgElement = document.querySelector('.newSVG > svg');
    const img = new Image();
    // const img = document.createElement('img');
    img.classList.add('hideDataImage');


    const svgString = new XMLSerializer().serializeToString(svgElement);
    const decoded = unescape(encodeURIComponent(svgString));
    const base64 = btoa(decoded);
    const imgSource = `data:image/svg+xml;base64,${base64}`;
    img.setAttribute('src', imgSource);
    document.body.append(img);
    console.log(img);
    return img;
  },
};

// const draggy = () => {
//   const svgElement = document.querySelector('.newSVG > svg');
//   const img = new Image();
//   img.classList.add('hideDataImage');
//   const svgString = new XMLSerializer().serializeToString(svgElement);
//   const decoded = unescape(encodeURIComponent(svgString));
//   const base64 = btoa(decoded);
//   const imgSource = `data:image/svg+xml;base64,${base64}`;
//   img.setAttribute('src', imgSource);
//   document.body.append(img);
//   return img;
// };


window.draggy = draggy;
setTimeout(() => {
  const newSVGDiv = document.querySelector('.newSVG');
  const map2 = document.querySelector('#main-content');


  // HTML5 DRAG AND DROP API
  // /Drag'n Drop functions
  const allowDrop = (event) => {
    event.preventDefault();
  };


  const drag = (event) => {
    // const svgElement = document.querySelector('.newSVG > svg');
    // // Create your own image
    // const img = document.createElement('img');
    // // Serialize svg to string
    // const svgString = new XMLSerializer().serializeToString(svgElement);
    // // Remove any characters outside the Latin1 range
    // const decoded = unescape(encodeURIComponent(svgString));
    // // Now we can use btoa to convert the svg to base64
    // const base64 = btoa(decoded);
    // const imgSource = `data:image/svg+xml;base64,${base64}`;
    // img.setAttribute('src', imgSource);
    // img.width = 500;
    // event.dataTransfer.setDragImage(img, 150, 100);
    // newSVGDiv.setAttribute('style', 'width:176px');
    console.log(event.dataTransfer);
    event.dataTransfer.setData('text', event.target.id);
    event.dataTransfer.effectAllowed = 'copy';
  };


  const drop = (event) => {
    event.preventDefault();
    const x1 = event.clientX - 76; // getBoundingClientRect().width / 2
    const y1 = event.clientY - 51; // getBoundingClientRect().height / 2
    // var data = event.dataTransfer.getData("text");
    // var copyimg = document.createElement("img");
    const target = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    target.classList.add('draggable');

    // target.classList.remove('bounceIn');
    // var original = document.getElementById(data);
    // copyimg.src = original.src;
    target.innerHTML = document.querySelector('.newSVG >  svg').innerHTML;
    event.target.appendChild(target);

    const bbox = target.getBBox();


    document.querySelectorAll('.draggable > g').forEach((key) => {
      key.classList.remove('bounceIn');
      const bbox = key.parentElement.getBBox();
      key.parentElement.setAttribute('viewBox', `${bbox.x}, ${bbox.y}, ${bbox.width}, ${bbox.height}`);
    });

    cloneSymbol(event);
    target.setAttribute('height', `${bbox.height}`);
    target.setAttribute('width', `${bbox.width}`);

    // target.setAttribute('viewBox', `${bbox.x}, ${bbox.y}, ${bbox.width}, ${bbox.height}`);
    target.setAttribute('style', `position: absolute; top: ${y1}px; left:${x1}px;`);
  };


  // MOVEABLE.JS
  const moveableoptions = {
  // Set the target as null until someone moves and clones it onto the yellow background
    target: null,
    // If the container is null, the position is fixed. (default: parentElement(document.body))
    container: document.body,
    draggable: true,
    resizable: true,
    scalable: true,
    rotatable: true,
    warpable: false,
    pinchable: true,
    origin: false,
    keepRatio: true,
    edge: true,
    throttleDrag: 0,
    throttleScale: 0,
    throttleRotate: 0,
  };

  const moveable = new Moveable(document.body, moveableoptions);
  function cloneSymbol(event) {
    // All "targets" will be symbols with the draggable class
    const tgt = document.querySelectorAll('.draggable');
    // Create the array for the targets
    const arr = Array.from(tgt);
    // Now push the targets on the yellow board to an arry
    tgt.forEach((e) => {
      arr.push(e);
    });
    // Get the last target in the array and set it
    moveable.target = arr.slice(-1)[0];
    /* draggable */
    moveable
      .on('dragStart', ({ target, clientX, clientY }) => {
        // console.log('onDragStart', target);
      })
      .on(
        'drag',
        ({
          target, transform, left, top, right, bottom, beforeDelta, beforeDist, delta, dist, clientX, clientY,
        }) => {
          // console.log('onDrag left, top', left, top);
          target.style.left = `${left}px`;
          target.style.top = `${top}px`;
        },
      )
      .on('dragEnd', ({
        target, isDrag, clientX, clientY,
      }) => {
        // console.log('onDragEnd', target, isDrag);
      });

    /* scalable */
    moveable
      .on('scaleStart', ({ target, clientX, clientY }) => {
        // console.log('onScaleStart', target);
      })
      .on('scale', ({
        target, scale, dist, delta, transform, clientX, clientY,
      }) => {
        // console.log('onScale scale', scale);
        target.style.transform = transform;
      })
      .on('scaleEnd', ({
        target, isDrag, clientX, clientY,
      }) => {
        // console.log('onScaleEnd', target, isDrag);
      });

    /* rotatable */
    moveable
      .on('rotateStart', ({ target, clientX, clientY }) => {
        // console.log('onRotateStart', target);
      })
      .on('rotate', ({
        target, beforeDelta, delta, dist, transform, clientX, clientY,
      }) => {
        // console.log('onRotate', dist);
        target.style.transform = transform;
      })
      .on('rotateEnd', ({
        target, isDrag, clientX, clientY,
      }) => {
        // console.log('onRotateEnd', target, isDrag);
      });

    /* pinchable */
    moveable
      .on('pinchStart', ({ target, clientX, clientY }) => {
        // pinchStart event occur before dragStart, rotateStart, scaleStart, resizeStart
        // console.log('onPinchStart');
      })
      .on('pinch', ({
        target, clientX, clientY, datas,
      }) => {
        // pinch event occur before drag, rotate, scale, resize
        // console.log('onPinch');
      })
      .on('pinchEnd', ({
        isDrag, target, clientX, clientY, datas,
      }) => {
        // pinchEnd event occur before dragEnd, rotateEnd, scaleEnd, resizeEnd
        // console.log('onPinchEnd');
      });

    /* resizable */
    //! Keep this enabled in order to disable resizing... idk man
    moveable
      .on('resizeStart', ({ target, clientX, clientY }) => {
        // console.log('onResizeStart', target);
      })
      .on('resize', ({
        target, width, height, dist, delta, clientX, clientY,
      }) => {
        // console.log('onResize', target);
        delta[0] && (target.style.width = `${width}px`);
        delta[1] && (target.style.height = `${height}px`);
      })
      .on('resizeEnd', ({
        target, isDrag, clientX, clientY,
      }) => {
        // console.log('onResizeEnd', target, isDrag);
      });
  }

  // This toggles the control box on whatever element you click on
  function backgroundTest(event) {
    document.querySelectorAll('.draggable').forEach((key) => {
      // https://stackoverflow.com/questions/24183286/drag-and-drop-to-div-behind-absolutely-positioned-div
      const elements = document.elementsFromPoint(event.clientX, event.clientY);
      const chosenTarget = elements.find(key => key.matches('.draggable'));
      // If you click a symbol on the yellow background, it will set it as the Moveable target
      // If you click the yellow background it will de-select the symbol so you can get that annoying control box out of view
      chosenTarget ? (moveable.target = chosenTarget) : (moveable.target = undefined);
    });
  }


  newSVGDiv.addEventListener('mouseover', (e) => {
    // const elementPointed = document.elementFromPoint(e.clientX, e.clientY);
    const element = document.querySelector('.newSVG svg');
    if (element.parentNode.querySelector(':hover') === element) {
    // Mouse is inside element

      newSVGDiv.setAttributeNS(null, 'draggable', true);
    } else {
    // Mouse is outside element

      newSVGDiv.setAttributeNS(null, 'draggable', false);
    }
  });


  //! DRAG START
  // newSVGDiv.addEventListener('dragstart', (e) => {
  //   event.dataTransfer.effectAllowed = 'copy';
  //   event.dataTransfer.clearData();
  //   event.dataTransfer.setData('text/html', event.target.id);
  //   event.dataTransfer.setDragImage(draggy.genImg, 10 /* xOffset */, 10 /* yOffset */);
  // }, false);
  newSVGDiv.addEventListener('dragstart', dragStart, false);
  // https://stackoverflow.com/questions/29131466/change-ghost-image-in-html5-drag-and-drop
  function dragStart(event) {
    MainMS.placeSymbol();
    const crt = document.querySelector('.newSVG > svg').cloneNode(true);

    crt.classList.remove('newSVG');
    crt.classList.add('hideDataImage');
    // crt.style.height = '160px';
    // crt.style.width = '176px';
    // crt.style.position = 'absolute';
    // crt.style.top = '0';
    // crt.style.left = '50%';
    crt.style.zIndex = '-1';
    document.body.appendChild(crt);
    crt.setAttributeNS(null, 'height', `${crt.getBBox().height}`);
    crt.setAttributeNS(null, 'width', `${crt.getBBox().width}`);
    crt.setAttributeNS(null, 'viewBox', `${crt.getBBox().x - 4} ${crt.getBBox().y - 4} ${crt.getBBox().width + 8} ${crt.getBBox().height + 8}`);
    // crt.setAttribute('height', '150');
    // crt.setAttribute('width', '100');
    // crt.setAttribute('viewBox', '25 15 150 135');
    // crt.style.height = `${document.querySelector('.newSVG > svg').getBBox().height}px`;

    // console.log(event.toElement.outerHTML); //! Works
    console.log(crt);
    event.dataTransfer.effectAllowed = 'copy';
    event.dataTransfer.setData('text/plain', event.target.id);
    // Set the drag image and center it on the cursor
    event.dataTransfer.setDragImage(crt, crt.getBoundingClientRect().width / 2, crt.getBoundingClientRect().height / 2);


    window.setTimeout(() => {
      crt.parentNode.removeChild(crt);
    }, 100);
  }

  // newSVGDiv.ondragstart = (event) => {
  // event.dataTransfer.effectAllowed = 'copy';
  // event.dataTransfer.clearData();
  // event.dataTransfer.setData('text/plain', event.target.id);
  //   event.dataTransfer.setDragImage(draggy.genImg, 10 /* xOffset */, 10 /* yOffset */);
  // };


  const target = document.querySelector('.newSVG > svg');

  // config object
  const config = {
    // attributes: true,
    // attributeOldValue: true,
    characterData: true,
    // characterDataOldValue: true,
    childList: true,
    // subtree: true,
  };

  // subscriber function
  function subscriber(mutations) {
    mutations.forEach((mutation) => {
      draggy.genImg;
      // console.log(draggy.genImg);


      // const rr = new Draggy('.newSVG > svg');
      // console.log(rr);
    });
  }

  // instantiating observer
  const observer = new MutationObserver(subscriber);

  // observing target
  observer.observe(newSVGDiv, config);


  map2.ondrop = (event) => {
    drop(event);
  };
  map2.ondragover = allowDrop;
  map2.onclick = backgroundTest;
}, 200);
