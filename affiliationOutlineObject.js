// * UNIT AFFILIATION OBJECT * //
const affiliationOutlineObject = {
  get friendly() {
    return {
      templated: false,
      d: 'M25,50 l150,0 0,100 -150,0 z',
      fill: 'rgb(128,224,255)',
      flying: 'M 155,150 C 155,50 115,30 100,30 85,30 45,50 45,150',
    };
  },
  get friendlyTemplated() {
    return {
      templated: true,
      d: 'M25,50 l150,0 0,100 -150,0 z',
      fill: 'rgb(128,224,255)',
      fill_2: 'none',
      stroke_2: 'rgb(239, 239, 239)',
      strokeWidth_2: '5',
      strokeDashArray_2: '4,4',
      flying: 'M 155,150 C 155,50 115,30 100,30 85,30 45,50 45,150',
    };
  },
  get hostile() {
    return {
      templated: false,
      d: 'M 100,28 L172,100 100,172 28,100 100,28 Z',
      fill: 'rgb(255,128,128)',
      flying: 'M 45,150 L45,70 100,20 155,70 155,150',
    };
  },
  get hostileTemplated() {
    return {
      templated: true,
      d: 'M 100,28 L172,100 100,172 28,100 100,28 Z',
      fill: 'rgb(255,128,128)',
      fill_2: 'none',
      stroke_2: 'rgb(239, 239, 239)',
      strokeWidth_2: '5',
      strokeDashArray_2: '4,4',
      flying: 'M 45,150 L45,70 100,20 155,70 155,150',
    };
  },
  get unknown() {
    return {
      templated: false,
      d: 'M63,63 C63,20 137,20 137,63 C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z',
      fill: 'rgb(255,255,128)',
      flying: 'M 65,150 c -55,0 -50,-90 0,-90 0,-50 70,-50 70,0 50,0 55,90 0,90',
    };
  },
  get pending() {
    return {
      templated: true,
      d: 'M63,63 C63,20 137,20 137,63 C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z',
      fill: 'rgb(255,255,128)',
      fill_2: 'none',
      stroke_2: 'rgb(239, 239, 239)',
      strokeWidth_2: '5',
      strokeDashArray_2: '4,4',
      flying: 'M 65,150 c -55,0 -50,-90 0,-90 0,-50 70,-50 70,0 50,0 55,90 0,90',
    };
  },
  get neutral() {
    return {
      templated: false,
      d: 'M45,45 l110,0 0,110 -110,0 z',
      fill: 'rgb(170, 255, 170)',
      flying: 'M 45,150 L 45,30,155,30,155,150',
    };
  },
};

export default affiliationOutlineObject;
