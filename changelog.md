# Change Log Notes

---

## 16NOV19

- Fixed a bug where the popups would stack on top of each other with each click
- Fixed a bug with the popup arrow not aligning to the center of the popup box. I did this by appending the outerArrowDiv and innerArrowDiv to the symbolInfoDiv and then adjusted all the values by using CSS calc()
- Implemented Delete Button on popup
- Set CSS styles for popup
- Added function for translating LAT-LNG to MGRS
- added moreReadableString() function in app.js to make Popup data better to read
- Implemented popup close button
- Moved JS styles into SCSS file
- Added an event listener that updates the MGRS coordinates when the mouse moves
- Added pulsating prompt to remind the user to drag the symbol onto the map
- Tried and failed implementing the MGRS grid
- BUG: When the page has multiple markers, they won't delete

---

## 13NOV19

- Got the dynamic popup box to work in test environment
- Began integrating the popup into the main project. Major issues with this.

---

## 11NOV19

- Worked on implementing popup as a web component
- Utter failure of a day. Wasted on the popup question
- Total failure of a day. Spent the entire time messing with popup windows for markers and made no progress

---

## 9NOV19

- First day back from being sick
- Interesting [leaflet.draw](http://jsfiddle.net/knownasilya/qj6oghsb/2/), and [this one too](http://embed.plnkr.co/dwxdcmieSjnLBqqvADqh/)
- Added map symbol drag-n-drop
- Fixed bug where a symbol is dropped onto another symbol and it disappears
- Added map symbol popup window
- Fixed bug that caused the symbol control box to disappear when resized to 0
- Fixed bug when user resizes the marker outside of the browser window or when they resize it too quickly
- Fixed bug where JSON data from drag event wasn't transferring over to drop event
- Added delete button on infowindow
- Most of today was spent on trying to center the info window when the symbol is resized
- Since the info window is too difficult to implement via Leaflet, try to create one natively in HTML/CSS. These could use some nice MDC animations

---

## 4NOV19

- Added the facebook page to the production version of MGRS-Mapper. Hopefully I will get a few links between now and when I go live
- Added Fusco to the private repo in case I fucking die
- Added affiliationString() function. This will return a string of 'None' if the symbol is a TMT/GCM. Otherwise it will return the affiliation string by setting the first character to uppercase and adding a space between words. (eg- it will turn 'friendlyTemplated' into 'Friendly Templated')
- Moved Tactical Mission Tasks into the main militarySymbolsObject file.
- Modified DisableInputs to accept an object as a parameter. This makes readability so much easier.
- Most Searched for symbols:
  1. Infantry
  2. Check point
  3. Infantry, Mechanized
  4. Target Reference Point
  5. Armor, Combat
  6. Field Artillery, Combat
  7. Ground Zero, Weapon (nuclear explosion)
  8. Cavalry
  9. Military Police
  10. Infantry, Light
  11. Engineer
  12. Observation Post
- Most emplaced symbols:
  1. Default unit
  2. Infantry
  3. Infantry, Mechanized
  4. Infantry, Light
  5. Armor
  6. Military Police
  7. Ground Track
  8. Combat, Unit
  9. SOF Unit
  10. Field Artillery
  11. Infantry, Airborne
  12. Armor Track
- Added Most Popular Symbols section
- Added Leaflet map
- Centered TMTs in symbol panel by modifying path data

---

## 30OCT19

- Had way too many issues with MapBox and decided to revert back to where I left off on the 28th. Moved the modified webpack.config and package.json files to the ./old folder and pushed the changes to a new branch "7bitSignedAscii".
- Centered the dropped symbol on the mouse cursor
- Since a user's symbol orientation is unknown I think we need to combine Tactical Mission Tasks into the general militarySymbolsObject file.
- Created a [Facebook page](https://www.facebook.com/mgrsmapper)
- DisableInputs should be refactored to accept an object as params. It is unreadable as it stands
- Added site logo but to be honest I am not happy with it and it should probably be removed.
- Tooltip inspiration [Tippy.js](https://github.com/atomiks/tippyjs)

---

## 28OCT19

- Got tied up in JS Perf testing out better implementations of the Resizer class. Found that converting it to a function yields with an array that stores values yields a +4,000% performance increase. Check the data out [here](https://jsperf.com/svgviewbox-3/) and [here](https://pagebuildersandwich.com/increased-plugins-performance-200/)
- [Online SVG Editor](https://svg-edit.github.io/svgedit/releases/latest/editor/svg-editor.html) this might be useful when adding symbols
- Fixed the bug where the symbolSelect unordered list wasn't mating to the bottom of it's dropdown select box. This was due to an idiotic mistake on my part by manually setting the style value to this:

  >     selectSymbol.menu*.root*.attributes.style.value = `transform-origin: center top; top: ${selectSymbol.root_.getBoundingClientRect().bottom}px; max-height: 714.375px; right: 33.3438px;`;

- Fixed overflow-x problem for select boxes in FireFox.
- Moved JSON preview to Menu Surface IOT prepare for the map
- MapBox is a bloated piece of shit software that fucks with Moveable.js. Consider going back to Google Maps. Spent over 13 hours on it today and got no where

---

## 25COT19

- Created a grid for all the list item elements in the select boxes. Now the symbol description sits on top of the type and everything is aligned properly without having to use that ugly padStart() method. Decided to code my own CSS grid instead of using MDCs built in Layout Grid (didn't feel like generating tons of extra divs).
- Fixed a bug when selecting a GCM it would remove the first indexed item in the select boxes for Mod1/2, CPs and TMTs. This was an issue with DisableInputs and the way MDC listens for events. I was setting "selectMod1.selectedIndex = 0" which was causing a change event that then triggered placeSymbol(). So when a GCM was selected it would run placeSymbol() 5 separate times. By setting "selectMod1.setEnhancedSelectedIndex\_(0);" this "silently" changes the index of the select box and the event listeners don't pick it up.
- Added mdc-typography--headline6 to all non-generated list items for uniformity.
- Got stuck on adding a map. I think I am going to go with MapBox and load in some vector and raster maps. I have a semi-working version on codepen [here](https://codepen.io/pistell/pen/bGGRgaW)
- TODO: Implement the MGRS overlay!!!!
- BUG: Scroll down on the pushbar and then select a symbol. Notice how the list does not append to the bottom of the select box? That needs to be fixed. It's also not resizing the selectSymbols items. The symbols in firefox are also jacked up. In Chrome all you need to do is hover over them and they will resize but in Firefox this does not happen. Upon further inspection this looks like the default behavior of MDC. Look into locking the scroll position when a menu is open. Putting a setTimeout on the Resizer class seems to fix the issue on Chrome but it still persists on Firefox... fml

---

## 23OCT19

- TransformModifiersOnEquipment() is being imported into mdcComponents but only being used in app.js
- Tried fixing the bounceIn animation for equipment modifiers but got stuck. Settled on a zoom in animation that I got from [Animate.css](https://daneden.github.io/animate.css/)
- Added semi-dynamic viewBoxes on symbols via the setViewBox arrow function
- Fixed a bug that appended empty divs to the symbol. For instance, a select box with generated content would automatically set the value to "None" which caused my placeSymbol method to append that div even though it was empty. I added a ternary operator in the symbolValues function expression that would return the value undefined if it was set to "None"
- Added a dynamic block of code in a <pre> tag that displayed data-symbol-info in a readable format. More info [here](https://codepen.io/pistell/pen/abbJgRb)
- Fixed bug that appended the wrong information into 'data-symbol-info'.
- Fixed animation bug that prevented the drop down animation for Equipment and GCMs
- Added About Section on the bottom of the Pushbar
- Moved ES Lint rules from top of file to eslintrc
- BUG: When removing TransformModifiersOnEquipment from the window and into imports it throws an error... No clue.
- Fully removed graphicControlMeasuresObject and integrated it with militarySymbolsObject. Since users tend to search for GCMs as much as symbols it made more sense to incorporate them into the main symbols object
- Fixed a bug when clearing the search field. It was looking for dataset-symbol-name, which I removed earlier
- Added bottom-about section on Pushbar
- Added scroll bar styling in Chrome
- Fixed scroll bar bug in Firefox by setting the .symbolSelectors height statically to 911px
- Fixed the fadeInAndSlideOut animation bug on Firefox with an 'animationend' event listener on the window.
- Added bounceInAnimation to Command Post and Tactical Mission Tasks
- BUG: Choose a GCM, then go back to a normal land unit, now check Mod1 or Mod2 -> The first item is missing???? This is an issue with the Resizer class

---

## 21OCT19

- Integrated the Drag-and-Drop functionality. (this took 14 hours).
- Noted bug in Firefox on the placeSymbol() method. For some reason setting the height and width via getBBox() causes the app to fail. Setting the values statically fixes this issue. Although I don't like it.
- BUG: Graphic Control Measures do not work with clone-and-drag. IMO this whole feature needs to be incorporated into the main military symbols object. In the long term this will be more beneficial since people tend to search for GCMs just as much as regular symbols
- Feature: Need a clear symbol button. I have the feeling if a user has selected a piece of equipment, they won't know how to escape the disabled menus.

---

## 17OCT19

- Added extra data to package.json
- Moved all Pushbar logic to pushbar.js. Since Pushbar is not an Material Design Component, it does not belong in mdcComponents.js
- Consider: [Loading Overlays](https://github.com/muhdfaiz/js-loading-overlay)
- Consider: [How to get mid point of SVG](https://stackoverflow.com/questions/26867641/how-to-get-mid-point-of-g-tag-in-svg-using-javascript)
- Consider: [Webpack and Lazy Loading](https://medium.com/walkme-engineering/how-and-when-not-to-use-webpack-for-lazy-loading-bef9d37c42c1)
- Consider: [Material Theming](https://medium.com/google-design/how-to-style-buttons-using-material-theming-ad215f892207)
- Consider: [33 JS Concepts](https://github.com/leonardomso/33-js-concepts)

---

## 16OCT19

- Added MPL 2.0 license.
- Finally removed the default text in the package.json file... Only took me half a year
- Potential bug. The dropzone restriction works when you drop the symbol down but once it is dropped it can be moved anywhere outside the yellow background. Need to set the container for the symbol.

---

## 14OCT19

- Noticed that a lot of search strings in the old MGRS site include things like checkpoints and TRPs. Need a way to search both object files...
- Added clone to Moveable
- Added cloneAndDrag.html. You will need to go through it and manually insert what you need into moveSymbol.js. But everything works with it... Thank god
- Good website for learning about viewBox [here](http://oreillymedia.github.io/svg-essentials-examples/ch03/using_viewbox.html)
- Check out this old pen you wrote about multiple conditions for switches [here](https://codepen.io/pistell/pen/KLejOg) This is less than 30 lines of JS and could potentially replace the needless complexity of RRSwitches class

---

## 10OCT19

- Fixed a bug with the animateSymbol class. Previously when a user changed a symbol and then hovered over it the zoom in animation would work. But when they hover-out the '.animateSymbol' class would run the drop in animation. This was fixed by adding the addAndRemoveSymbolPanelAnimation function.
- Fixed a potential performance bug in the addSymbolsAndModsToList function. For some reason 'selectSymbol.foundation\_.setSelectedIndex(0)' was running again and again depending on the number of elements in the selectSymbol dropdown. This was fixed by replacing it with the following following:

  >

        selectSymbol.foundation_.adapter_.floatLabel(true);
        selectSymbol.setEnhancedSelectedIndex_(0);

- Added a Bottom App Bar in HTML and SCSS. I kind of just copied the CSS for the Top App Bar but added a property of bottom: 0; I made a CodePen of a more intricate bottom app bar [here](https://codepen.io/pistell/pen/YzzyEbw) I am not sure if this is even worth incorporating but it looks nice.
- Added moveable.js. Huge issues with this one:
  - The hover animation on the symbol panel lags the shit out of the resize/scale/drag/rotate functions. Disabling it is a temporary fix.
  - The bounding box is off center on the symbol
  - The symbol should be cloned and then the target is attached to it
  - When selecting a new symbol the entire functionality fails
  - 92k file size (wtf)
  - Only works when I put a setTimeout function on it (total hack)
  - When placing the symbol down, if you minimize the pushbar, the symbol moves along with it (note: this does not happen when I set it to work on the red ball. I think cloning the dom node is what will fix these issues)
  - I think if I clone the symbol in the panel, I won't have to worry about the animations lagging, or the pushbar fucking things up...
  - https://codepen.io/pistell/pen/ExxPYom is a good resource that shows how to drag and clone an object. However it requires an additional dependency called [Scene.js](https://bundlephobia.com/result?p=scenejs@1.1.4)
  - At this point you need to start looking into tree-shaking because Moveable+Scene is about 125k in size.
- Added bounceInAnimation() to Activity, Installation and Task Force.
- Also noted that Moveable.js requires SceneJs to run certain tasks like clone-and-drag.

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
