# MGRS-Mapper (development repo)

A development repository for MGRS-Mapper application

---

## TODO

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
- [x] Remove files and folders from gitignore in your repo [As seen here](http://www.codeblocq.com/2016/01/Untrack-files-already-added-to-git-repository-based-on-gitignore/)
- [ ] When typing slow in the symbol search field it will display "No Results Found". Find a way to only enable the search dropdown if the char length is at least 3
- [ ] Global vars need cleaning up. Use imports
- [ ] Helper info-window on the Mod1/2 dropdowns are needed. Most soldier's don't know this stuff
- [x] Create a folder for object JS files and rename them. Things are going to get more complicated as we add in Tactical Mission Tasks, Graphic Control Measures and Task Force Amps
- [ ] Mod1 helper text has word wrap. Fix it to 1 line
- [x] Fix the symbol panel so that amplifiers don't get clipped
- [ ] Decide on using Bottom App Bar or Infowindow menu like on the Original pushbar site?
- [ ] The select menus are too similar. Each should have an icon that differentiates them

## DEFAULT VALUES

### Path:

- d: REQUIRED
- fill: none
- stroke: black
- strokeWidth: 4

### Circle:

- cx: REQUIRED
- cy: REQUIRED
- r: REQUIRED
- fill: Black
- stroke: Black
- strokeWidth: 4

### Text:

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
