// * UNIT AFFILIATION OBJECT * //
const affiliationOutlineObject = {
  friendly: {
    templated: false,
    d: 'M25,50 l150,0 0,100 -150,0 z',
    fill: 'rgb(128,224,255)',
  },
  friendlyTemplated: {
    templated: true,
    d: 'M25,50 l150,0 0,100 -150,0 z',
    fill: 'rgb(128,224,255)',
    fill_2: 'none',
    stroke_2: 'rgb(239, 239, 239)',
    strokeWidth_2: '5',
    strokeDashArray_2: '4,4',
  },
  hostile: {
    templated: false,
    d: 'M 100,28 L172,100 100,172 28,100 100,28 Z',
    fill: 'rgb(255,128,128)',
  },
  hostileTemplated: {
    templated: true,
    d: 'M 100,28 L172,100 100,172 28,100 100,28 Z',
    fill: 'rgb(255,128,128)',
    fill_2: 'none',
    stroke_2: 'rgb(239, 239, 239)',
    strokeWidth_2: '5',
    strokeDashArray_2: '4,4',
  },
  unknown: {
    templated: false,
    d: 'M63,63 C63,20 137,20 137,63 C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z',
    fill: 'rgb(255,255,128)',
  },
  pending: {
    templated: true,
    d: 'M63,63 C63,20 137,20 137,63 C180,63 180,137 137,137 C137,180 63,180 63,137 C20,137 20,63 63,63 Z',
    fill: 'rgb(255,255,128)',
    fill_2: 'none',
    stroke_2: 'rgb(239, 239, 239)',
    strokeWidth_2: '5',
    strokeDashArray_2: '4,4',
  },
  neutral: {
    templated: false,
    d: 'M45,45 l110,0 0,110 -110,0 z',
    fill: 'rgb(170, 255, 170)',
  },
};

export default affiliationOutlineObject;
