module.exports={
  "extends" : "airbnb-base",
  "env": {
    "browser": true,
    "node": true
  },
  'rules': {
    'max-len': [2, {
      code: 150,
      comments: 150,
      ignoreTemplateLiterals: true,
      ignoreStrings: true
    }],
    "no-console": "off",
    "no-unused-expressions": "off",
    "no-underscore-dangle": "off",
  }
 }