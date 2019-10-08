17JUL19 This is a pretty decent refactoring of your code.

### TODO

- [x] Next steps would be integrating the affiliation dropdown and adding a mutation observer to dynamically update the SVG in the panel
- [x] After that you need to add in the rest of the standard affiliations (hostile, templated, etc). There might be an issue with stroke-dasharray needing to be added to the matchPaths() function
- [x] Create a skeleton symbol object that contains all the decorator information for all affiliations
- [x] Add in the equipment icons (will require some more tweaking)
- [x] matchPaths() function and testObj need to be renamed. Come on man
- [x] The "demo-width-class" class in the html file needs to be changed to something less stupid
- [x] Code split your symbol object and affiliation object out into their own files
- [x] Modifier 1
- [x] Modifier 2
- [x] Unit Size modifier
- [x] "In Flight" outline modifiers for aviation symbols
- [x] Symbol text for Unique Designation and Higher formation
- [x] Task Force amplifier
- [x] Reinforced/Reduced modifier
- [x] Activity conversion (would require some logic, eg- a grenade launcher cannot be an activity)
- [x] Installation conversion (would require some logic, eg- a grenade launcher cannot be an installation)
- [x] Command Post amplifier
- [x] Tactical Mission Tasks
- [x] Graphic Control Measures
- [ ] Skeleton Screen preloader (Should be done right before launch)
- [ ] Remove files and folders from gitignore in your repo

### DEFAULT VALUES

# Path:

- d: REQUIRED
- fill: none
- stroke: black
- strokeWidth: 4

# Circle:

- cx: REQUIRED
- cy: REQUIRED
- r: REQUIRED
- fill: Black
- stroke: Black
- strokeWidth: 4

# Text:

- symbolText: REQUIRED
- x: REQUIRED
- y: REQUIRED
- text-anchor: REQUIRED
- font-size: REQUIRED
- fontFamily: Arial
- fontWeight: 30
- stroke: none
- strokeWidth: 4
- fill: black

# Creating an object and integrating it:

- create object and import to app.js
- create HTML container for object
- add to MilSym class params
- add to MilSym constructor
- create method in MilSym
- create addXtoDropdownList() func
- export addXtoDropdownList() to mdcComponents.js
- import that shit
- create new MDCSelect for your object
- add your new MDCSelect to the forEach array to enabled the change event
- add your new MDCSelect to the selectMenus event listener
- add addXtoDropdownList() to the window.load function on mdcComponents.js
