import Moveable from 'moveable';

window.Moveable = Moveable;
setTimeout(() => {
  const tgt = document.querySelector('.testSVG');
  //! You have to set the position to relative or it will not work
  tgt.style.position = 'relative';
  // tgt.parentElement.style.position = 'relative';
  // tgt.style.zIndex = '18';

  const moveoptions = {
    target: null,
    // target: tgt,
    // target: document.querySelector('#ball'),
    draggable: true,
    scalable: true,
    rotatable: true,
    pinchable: true, // ["resizable", "scalable", "rotatable"]
    origin: false,
    keepRatio: true,
    // Resize, Scale Events at edges.
    edge: true,
    throttleDrag: 0,
    throttleScale: 0,
    throttleRotate: 0,
  };

  const moveable = new Moveable(document.querySelector('.mdc-drawer-app-content'), moveoptions);


  function moveSymbol(event) {
    const target = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

    moveable.target = target;

    target.classList.add('drag');
    target.innerHTML = document.querySelector('.testSVG').innerHTML;
    document.body.appendChild(target);

    const bbox = target.getBBox();
    const viewBox = [bbox.x, bbox.y, bbox.width + 15, bbox.height + 15].join(' ');
    target.setAttribute('viewBox', viewBox);


    document.querySelector('.newSVG > svg').removeAttributeNS(null, 'class', 'animateSymbol');

    moveable.on('dragStart', ({ target, clientX, clientY }) => {
      console.count('onDragStart', target);
    }).on('drag', ({
      target, transform, left, top, right, bottom, beforeDelta, beforeDist, delta, dist, clientX, clientY,
    }) => {
      console.log('onDrag left, top', left, top);
      target.style.left = `${left}px`;
      target.style.top = `${top}px`;
      // console.log("onDrag translate", dist);
      // target!.style.transform = transform;
    }).on('dragEnd', ({
      target, isDrag, clientX, clientY,
    }) => {
      // console.count("onDragEnd", target, isDrag);
      // return moveable.target=null;
      // setTimeout(() => {
      //   moveable.target = null;
      // }, 200);
    });


    moveable.on('scaleStart', ({ target, clientX, clientY }) => {
      console.log('onScaleStart', target);
    }).on('scale', ({
      target, scale, dist, delta, transform, clientX, clientY,
    }) => {
      console.log('onScale scale', scale);
      target.style.transform = transform;
    }).on('scaleEnd', ({
      target, isDrag, clientX, clientY,
    }) => {
      console.count('onScaleEnd', target, isDrag);
      // setTimeout(() => {
      //   moveable.target=null;
      // },200)
    });


    moveable.on('rotateStart', ({ target, clientX, clientY }) => {
      console.log('onRotateStart', target);
    }).on('rotate', ({
      target, beforeDelta, delta, dist, transform, clientX, clientY,
    }) => {
      console.log('onRotate', dist);
      target.style.transform = transform;
    }).on('rotateEnd', ({
      target, isDrag, clientX, clientY,
    }) => {
      console.count('onRotateEnd', target, isDrag);
      // setTimeout(() => {
      //   moveable.target=null;
      // },200)
    });
  }
  window.moveSymbol = moveSymbol;
  tgt.addEventListener('click', moveSymbol);

  document.querySelector('.main-content:not(svg)').addEventListener('click', () => {
    console.log(moveable.target);
    moveable.target = null;
    shiftControlBox();
  });

  function shiftControlBox() {
    document.querySelectorAll('.drag:not(.testSVG)').forEach((e) => {
      e.addEventListener(
        'mousedown',
        (e) => {
          moveable.target = e.currentTarget;
        },
        { once: true },
      );
    });
  }
}, 200);
