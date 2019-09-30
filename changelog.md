# Change Log Notes

## 29SEPT19

- Decided against using setters on Activity, Installation, and Task Force switches because these switches are not mutating data, they are adding data. The Flying switch is mutating the affiliationOutlineObject data for the symbol so it makes more sense to use it there
- Added Command Post object and functionality
- Decided to use setters and getters for everything. Check MilSym_Refactored.js for big changes.

---

## 26SEPT19

- Removed RRSwitches class in favor of reinforcedReducedSwitchTest()
- Added RRSwitches class back...
- Moved enableFlyingOutline logic to MilSym class under "get affiliationOutlineData()"
- Refactored enableFlyingOutline switch
- Added Activity modifier
- Added Installation modifier
- Added DisableInputs class
- Added Task Force Object and functions
- Added Getter/Setter logic to MilSym and removed the old code.
- File Sizes: (app - 36.29kb), (mdcComponents - 28.41kb), (unitSizeObject - 9.77kb), (taskForceObject - 7.59kb), (mod2Object - 6.89kb), (militarySymbolsObject - 5.51kb), (affiliationOutlineObject - 4.44kb), (mod1Object - 3.54kb)

---

## 23SEPT19

- Moved eslint, eslint-config-airbnb-base and eslint-plugin-import from dependencies to devDependencies

* Added a Change log to track what I am doing. Commit notes are very sparse sometimes
* Removed WebpackMonitor as it has not been maintained in 2 years
* Installed webpack-bundle-analyzer plugin
* Tried replacing the [selectSymbol, selectAffiliation, selectUnitSize, selectMod1, selectMod2] forEach loop with something better but got bogged down
* disableInputsOnEquipment()
* added flight capability modifier

## Format examples

> [Live Preview Here](https://markdownlivepreview.com)

---

> Markdown is a lightweight markup language, originally created by John Gruber and Aaron Swartz allowing people "to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML)".

---

## usage

1. Write markdown text in this textarea.
2. Click 'HTML Preview' button.

---

## markdown quick reference

# headers

_emphasis_

**strong**

- list

> block quote

    code (4 spaces indent)

[links](https://wikipedia.org)

---

## changelog

- 17-Feb-2013 re-design

---

## thanks

- [markdown-js](https://github.com/evilstreak/markdown-js)
