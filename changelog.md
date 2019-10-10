# Change Log Notes

---

## 10OCT19

- Fixed a bug with the animateSymbol class. Previously when a user changed a symbol and then hovered over it the zoom in animation would work. But when they hover-out the '.animateSymbol' class would run the drop in animation. This was fixed by adding the addAndRemoveSymbolPanelAnimation function.
- Fixed a potential performance bug in the addSymbolsAndModsToList function. For some reason 'selectSymbol.foundation\_.setSelectedIndex(0)' was running again and again depending on the number of elements in the selectSymbol dropdown. This was fixed by replacing it with the following following:
  >
        selectSymbol.foundation_.adapter_.floatLabel(true);
        selectSymbol.setEnhancedSelectedIndex_(0);

---

## 8OCT19

- Added menu open and closed icons for top app bar
- Added more files to _gitignore_
- Separated JS and CSS files into their own folders
- Fixed bug with GCMs not showing up. This was due to an extra parameter in **DisableInputs** (_because I moved the flying param logic to MilSym class_)
- Set symbol viewBox to new fixed attributes which should contain all elements in the panel
- Added 50px to padding-bottom and reduced padding-top by 5px in the symbol panel
- Reduced all command post flag staffs to a max length of 240
- Fixed bug with Unique and Higher Formation text
- Mathematically centered the unique identifier text
  >
      uniqueDesignationText.setAttribute('y', '107.493');
      svg.getBBox().height + (24.5 - 2) * 0.333
      // height = 100
      // 24.5 = font size in pixels, 2 = half of the strokeWidth, 0.333 = 1/3rd of the symbol size; which gives you 7.493
- Cleaned up and organized CSS files
- Added hover animations to symbol panel and dismissible drawer icon
- Added select menu icons and adjusted CSS styles
- Fixed a bug where if a user types in the search field for an icon, the selectSymbol dropdown would compress. It wasn't an elegant fix but it technically works
  >
        selectSymbol.menu_.root_.attributes.style.value = 'transform-origin: center top; top: 591.625px; max-height: 714.375px; right: 33.3438px;';
        // Test this before production
- Fixed CSS issues on switches
- Added Surface Menu component to Top App Bar

---

## 6OCT19

- Refactored DisableInputs
- Smashed bugs with GCMs overriding DisableInputs (This took like 6 hours)
- Refactored enableTaskForce, enableInstallation, enableActivity
- Fixed bug where if you enabled Activity, Installation, and Task Force and THEN enabled flying, the amplifier switches wouldn't disappear. This was fixed inside adjustSymbolOutlineForFlying()
- Would static methods on MilSym be a more efficient way to go about this? The purpose of static methods is that you can access generic properties on a class without having to create a class instance. Static methods don't have access to the this class instance, and therefore are really only there as utility functions and properties.
- Added Pushbar.js
- Added Top App Bar
- Incorporated old Pushbar logic
- Smashed bugs with flying switch. Previously if you enabled a flying symbol then switched to a non flying symbol it would keep the flying outline. This was fixed by adding this.\_flying = false in the flightCapable if statement in MilSym
- Added z-elevation and other styles to elements to complete the skeleton

---

## 3OCT19

- Messed around with async/await in MilSym
- changed TransformModifiersOnEquipment from a class to a async function
- Attempted to fix the bounceIn animation function for equipment icons but ran into roadblocks. Minor issue, will look again later
- Refactored DisableInputs class into function IOT abide by ESLint "Disallow new for side effects"
- Added a boolean switch to compare old and new affiliation values when the selectSymbol dropdown is clicked. If the old value and new value don't match up, then run a "new MilSym" if that dropdown is open IOT change the symbol outlines to the currently selected affiliation. This is a huge performance boost because previously I was creating all new symbols no matter if the dropdown was opened or if the current affiliation was not changed.
- Bugs Smashed: Pending outline on equipment in the symbol dropdown not showing, Task Force button not working on page load, disableInputs not working, When Task Force amp is selected it was preventing users from searching for equipment (made the symbol panel go blank), Fixed an issue when a symbol is in flight and it was throwing Mod2 off center when a user switched affiliations, fixed a bug where the flying switch was disabled when activated, fixed a bug where if a user checks and unchecks flying they couldn't add a task force.
- Cleaned up app.js and mdcComponents.js and moved some functions to helperFunctions.js
- Reduced taskForceObject.js from 8.48 kb to 3.11 kb!
- Added tacticalMissionTaskObject and all its related functions
- Added graphicControlMeasuresObject and most of its related functions

---

## 1OCT19

- Added the new MilSym class
- Added setSelectBoxTextContent function on page load
- Fixed inputDesignationFields()
- Fixed Equipment Outline for friendly units
- Fixed Task Force switch
- Fixed Installation Switch
- Fixed Activity Switch
- Fixed equipment outline...again

---

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
- Added a Change log to track what I am doing. Commit notes are very sparse sometimes
- Removed WebpackMonitor as it has not been maintained in 2 years
- Installed webpack-bundle-analyzer plugin
- Tried replacing the **[selectSymbol, selectAffiliation, selectUnitSize, selectMod1, selectMod2]** forEach loop with something better but got bogged down
- Added **disableInputsOnEquipment()**
- added flight capability modifier
