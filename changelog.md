# Change Log Notes

---

## 18MAR20

- Added 31 Mod2 symbols
- Finished Mod2 symbols
- Added 5 Command Post symbols
- Finished Command Post symbols
- Added 48 Tactical Mission Tasks
- Finished Tactical Mission Tasks symbols
- Added 144 Graphic Control Measures
- Finished Graphic Control Measures
- Refactoring militarySymbols.js
  - Starting lines: 18,891
  - Starting Size: 445.01KB
  - Ending lines: 10,986
  - Ending Size: 279.48KB
- Refactoring mod1.js
  - Starting lines: 3867
  - Starting Size: 90.8KB
  - Ending lines: 3718
  - Ending Size: 87.9KB

---

## 16MAR20

- Greatly optimized Resizer() function. Previously when the user would click on the symbolSelect menu, this function would resize ALL the symbols. This took nearly 700ms and there was a noticeable lag between clicking the menu and when it would appear. I added the functionality to check whether the symbol is visible on the screen and then only resize those symbols. When the user scrolls down it will continually check if the position of the menu and attempt to run the resize function when the scrollTop threshold is broken. This new functionality now takes 53ms to run.
- Added async/await to bounceInAnimation() and setSelectMenuTextContent() which greatly increased the speed of addSymbolsAndModsToList(). Bringing the time down from 450ms to 96ms
- Added PreloadWebpackPlugin to webpack.common.js. Max Potential First Input Delay lowered from ~2500ms to 230ms
  - On further inspection this does not always work. Might be an issue with running lighthouse on the dev build
- Added preconnect rel attribute on google fonts stylesheet
- Fixed bug preventing 100K grids from drawing on zoom levels less than 6. This was due to instantiating leaflet bounds in the initialize method
- Centered map on United States and brought the zoom level out so the 100K grids are not drawing on the map during page load
- Moved Roboto to head so I could add the preload attribute
- Fixed async bug where if the user searches for a symbol and clicks the delete button the app would crash
- Fixed async bug where if the user clears out a search field it would crash the app
- Fixed bug in Resizer function which caused FireFox to shit out.
- Fixed async bug where a user clicks a popular icon but there is text in the search field, so the app would explode.
- Fixed bug where the task force amplifier would cause the app the explode. Apparently MainMS was missing an echelon setting when I instantiated it
- Fixed bug where Aviation Equipment did NOT convert into flying outline
- Fixed bug where the symbol list would not show up if a user had any text inputted into the uniqueDesignation and higherFormation fields
- Fixed bbox bug on the 2nd element in the command post list
- Fixed bug where User Text control was outputting dark blue instead of light blue
- Fixed bug where Grid Overlay toggle for 100K labels were showing up as enabled despite being on zoom level 6. I have them disabled for that zoom level due to performance issues.
- Mod2 starting count: 20, ending: 30

---

## 14MAR20

- Added an async/await chain inside addSymbolsAndModsToList(). This has a great impact on reducing the page load times on the dev site

|             Metric              | Before | After  |
| :-----------------------------: | ------ | ------ |
|        Lighthouse Score         | 0      | 19     |
|     First Contentful Paint      | 45.2s  | 2.1s   |
|           Speed Index           | 45.2s  | 13.4s  |
|       Time to Interactive       | 46.9s  | 52.6s  |
|     First Meaningful Paint      | 45.7s  | 47.2s  |
|         First CPU Idle          | 45.7s  | 47.2s  |
| Max Potential First Input Delay | 2990ms | 2030ms |

- Had to call it quits early, got called over to Randy's for St Paddy's day celebration (despite the fucking coronavirus apocalypse).
- Since Web Workers don't interact with the DOM I can't use it with addSymbolsAndModsToList() but I could potentially load all those symbol object files?

---

## 11MAR20

- Disabled click propagation on symbols. Now when a user clicks on a symbol the map won't zoom in.
- Added a Leaflet control that allows the user to add text markers to the map
- Implemented the popup feature for text markers, so now they can be deleted!
- Added colored text selector for the User Text Input Leaflet Control
- Added the Leaflet.Draw plugin for more user interaction
- Ran into issues with getting a printing plugin for leaflet. I think I'll just roll my own. Leaflet.EasyPrint would work but when the print job is done all the markers would disappear. Look into [Print.js](https://printjs.crabbly.com/)
- Lighthouse Prod build:
  - Score: 8
  - First Contentful Paint: 11.4s
  - DOM Size: 7,501 elements
  - chunk.js: 569KB
  - app.js: 352KB
- Lighthouse Dev Build:
  - Score: 0
  - First Contentful Paint: 45.3s
  - DOM Size: 7,502 elements
  - chunk.js: 5.2MB
  - app.js: 2.7MB
- For some reason the most popular symbols event listener was duplicated verbatim... right below each other and I didn't catch it.
- Disabling the 100K grids on page load will bring the Dev build Lighthouse score from 0 to 20 and lowers the First Contentful Paint from 45 seconds to 1.7 seconds
- TODO: Combine Leaflet.DumbMGRS.js + map.js + moveSymbol.js
- TODO: Combine app.js + index.js
- I'm sick of these dependency cycle warnings. I have no idea how to fix them.
- WebPack dev build isn't minifying one of the CSS bundle files and I don't know why. I'm at the point where I think I should hire some help

---

## 9MAR20

- Added download symbol buttons for SVG and PNG symbols. Incorporated them into the Menu Surface and added a tooltip for people who don't know what the difference is between an SVG and PNG file... Which is pretty much everyone
- Tried and failed to incorporate a Drawing toolbar for Leaflet. All the plugins that are available are heavy and don't allow you to include text. This will be a project for later.
- Consider Leaflet Google Mutant https://www.npmjs.com/package/leaflet.gridlayer.googlemutant
- Added all of the base symbols
- Added all of the Mod 1 symbols and made adjustments on affiliation type
- Starting number of symbols: 278
- Ending number of symbols: 460
- TODO: When dropping a symbol on a map it remains selected. So when you try and drag another symbol on the map you can't drop it on the map
- TODO: GCMs and TMTs still need to be added to militarySymbols object

---

## 7MAR20

- Flying equipment symbols need to be able to morphed into flying outlines
- Starting number of symbols: 154
- Ending number of symbols: 278

---

## 5MAR20

- Removed the mdc-grid on the map selectors and converted it to a list
- Added the MDCList package
- Fixed the map selector list
- Fixed an error with the latLngFromMGRS() function. Now it will throw an error on an invalid LatLng
- Added Viewport Biasing on Google Geocoder API to retrieve better results
- Removed attributionControl from maps as they are distracting
- Fixed zoom bug in in Leaflet.DumbMGRS. This bug was preventing maps from going beyond their default zoom levels. Some grids are still not drawing but I will worry about that later
- Added content and styles to the bottom app bar (section 3)
- Added content and styles to the bottom pushbar
- Added About section on surface menu
- Fixed a webpack error where images cannot be loaded (https://github.com/webpack/webpack/issues/1336)
- Added a favicon
- Began adding symbols to list (BIG MOMENT HERE)
- fixed Fuse.js search threshold from 0.6 to 0.2
- Added logic to modify decorators on flying symbols
- Added hover effect on the social media icons
- Starting number of symbols: 18
- Ending number of symbols: 154
- Index.scss is a gigantic file, this needs to be broken down or tree shook
- militarySymbols object file should be loaded via webworkers. This project is about to get massive
- Fixed MDCRipple effect on surface menu buttons

---

## 2MAR20

- Working on eslint errors
  - app.js (20 errors)
  - index.js (18 errors)
  - Leaflet.DumbMGRS.js (1 error)
  - map.js (2 errors)
  - moveSymbol.js (11 errors)
  - militarySymbols.js (3 errors)
  - mod2.js (1 error)
  - helperFunctions.js (4 errors)
- Gave up on eslint errors. I need to finish this project and I would be here for another month trying to resolve them.
- Added MGRS coordinates search bar
- Added Address search bar and integrated it with Google Geocoder API
- Added more base maps to the config.
- Began implementing the base maps into the menu surface for quick switching

---

## 29FEB20

- Created new project structure
- Added new webpack configs
- Merged code from mdcComponents into index.js
- Fixed bugs with marker popups
- Updated most Material Design Components to 4.0
- Updated babel from 6.26.3 to 7.8.4
- Updated all other babel plugins
- Updated eslint
- Updated webpack from 4.0.0 to 4.41.6
- Look into merging app.js and index.js and go through your eslint errors
- Clicking on a symbol will sometimes cause the map to zoom in. This is highly annoying

---

## 28FEB20

- Tried and failed to move this project over to Parcel
- Tried and failed to create a new webpack config. Some large errors occurred because I was updating all of MDC packages and apparently node-sass cannot use the @use module in sass files... Yeah idk
- Tried and failed to move this project over to Snowpack
- Fixed error in most popular symbols where if the search field has text in it, it would crash the app. I did this by adding clearSearchField() to the event listener
- Added toggle switches for GZD, 100K, and 1000M labels and grids
- Added a switch validator for grids and labels based on map zoom

---

## 15FEB20

- After 3 months and 340.33 hours I have finished the MGRS overlay plugin.
- Updated leaflet dependency to 1.6
- Updated node-sass to 4.13 (4.9 did not support Node version 13)
- Created folders for JS files based on the theme
  - map: Deals with Leaflet and its plugins
  - symbolObjects: Deals with the logic behind creating symbols. Also removed the word "object" from each of their file names.
  - ui: Deals with Material Design components, pushbar, or generally anything else UI related
- Moved DisableInputs and addSymbolsAndModsToList from helperFunctions into mdcComponents
- Tweaked the settings for Fuse.js for more accurate searches
- Moved TransformModifiersOnEquipment from helperFunctions into placeSymbol
- Removed leaflet-textpath dependency
- Removed the esm dependency. No idea why I even had it in the first place
- Added the map.locate method to automatically center the map on the users location
- Added "transform-object-rest-spread" to webpack plugins because for some dumbass reason it isn't enabled by default
- Added my Leaflet.DumbMGRS plugin!
- Added coordinate info box in the bottom app bar
- Removed geodesy dependency
- Added Grid Overlay menu surface
- Spent too much time messing around with imports/exports and global vars. This app is a total mess and I'm at the point where I think I just need to put that on a low priority list and just finish this app.
- TODO: Add in the grid overlay toggle buttons on the menu
- TODO: Consider moving easting/northing to bottom app bar section 3 and reduce the bottom app bar back to 80px height.
- TODO: Convert bottom app bar into an MDC grid? This would probably be a lot nicer to work with
- TODO: Remove menu surface button in exchange for a series of switches?
- TODO: When the app first loads it asks for your location, when the user agrees the map kind of "hangs" and does not set the view properly

---

## 21DEC19

- Made very little progress on the fucking grids. I got the 1000m SORT OF working. But this whole plugin is a total embarrassment

## 18DEC19

- Fixed issues with the 100km grid square not generating when the map bounds contains 2 GZDs. Now I just need to implement this into a proper leaflet plugin

---

## 15DEC19

- Got the 1000m grid squares to partially generate on a split GZD. Right now I have it generating for the left side of a GZD, there is a Promise function on the combinedIntervals() class method. I am thinking that I could possibly run the class again to generate the right side. If this works then I can definitely see this becoming an open source plugin.

---

## 13DEC19

- Got a rough copy of the 1000 meter grid square generator. The problem with it is it will not generate grids when the map bounds contain 2 grid square designators. This is due to the eastingIntervals() and northingIntervals() methods. Since adjacent GZDs have vastly different UTM values, the eastingIterator/northingIterator is not always less than `this.endCoordEasting.easting`. It is recommended that you go back into your class function in the leaflet-mgrs-layer-pages-gh project and find out how to incorporate this
- BUG: The 10k grid squares are not accurate. Scrape that whole idea and work on building the grid generator

---

## 4DEC19

- Fixed missing 100K grid squares in the generator (was missing grids for over 250 GZDs!)
- Fixed IndexedDB not logging the right data
- Created a web worker to load the 100K grid square data in the background
- Web Worker now posts data from IndexedDB
- Created dynamic 1000 meter grid squares

---

## 2DEC19

- Worked all day on fixing the grid generator. I have a working copy now but I'm too exhausted to add it. Look for the gridGeneratorExample.js file
- Finally got all the corner grids for all 100k grid squares. Putting them in the CORRECTCORNERGRIDS.js file to look at later. It's 4:04am and I'm exhausted

---

## 30NOV19

- Worked on 100K grids. I generated a JSON file for all the 100K grid squares in GZDs that are NOT on a body of water (eg- the fuckin oceans). Adding them to "map-grid-test.zip"
- The grids get retrieved by a Service Worker and then are stored in IndexedDB. When the user zooms in it will find the GZDs that match the key and will draw the 100K grid squares. This _technically_ works but there are some major inefficiencies with it. For example, I am wondering if I can cut the file size down by removing the bottom left and top left arrays. Also when the user drags the map the 100K grids will draw over each other. Very easy way to crash the browser.

---

## 25NOV19

- Worked exclusively on getting coordinates from 100k grid squares. Working version can be seen in GETGRIDSQUARECOORDS.js and also on my [codepen](https://codepen.io/pistell/pen/QWWXpEV)

---

## 23NOV19

- Corrected the GZDs for exception zones (32V, 31X, 33X, & 37X)
- Removed GZDs for zones 32X, 34X & 36X
- Removed MGRSString function as it did not take into consideration the exception zones, and replaced it with geodesy import
- Tried and failed getting the 100k grids to work
- Good progress on extracting bbox values from 100km grid squares
  - Look in the "100K_MGRS_GRIDS" folder and select the GZD you want to extract data from
  - Go to [mygeodata.cloud](https://mygeodata.cloud/converter/kml-to-geojson) and convert the KML to GeoJSON
  - Go to [mapshaper](https://mapshaper.org/) and upload your GZD file
  - Run this command in terminal:
  -     `mapshaper 18T.geojson -split 100kmSQ_ID -o bbox-index`
  - This will extract all the grid layers, delete them and keep "bbox-index.json"
  - From there run this regex command in a search & replace that will truncate the grid coordinates
  -     `\d{7}(?=\D)`
  - Consider using a JSON parser for all of this

---

## 20NOV19

- Worked on fixing the tags in the <head> got a lot of inspiration from [HTML Head](https://htmlhead.dev/)
- Since this website is primarily an app, I added the "application-name" meta tag
- Added the "theme-color" meta tag which will just change the toolbar of the app as documented [here](https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android)
- Added the "rating" meta tag with a value of "General" based on the content of the app
- Added humans.txt
- Added a new class that creates dynamic GZDs depending on the map.getBounds()
- Fixed the bug in the polylines that prevented symbols from being dropped on them. This was a simple options fix by setting "interactive" to false in gzdPolylineBox
- Added maxZoom to the default map. Prevents those annoying grey tiles

---

## 18NOV19

- Fixed a very difficult bug that prevented markers from being deleted if there were more than 2 on the map. This was due to creating my own popup solution. Since I don't know how to bind the popup data to the symbol it caused a lot of problems. This issue was solved by creating a layerGroup and adding all my markers to it. Then in the symbolData object I created a ID key with a unique value of 'marker.\_leaflet_id'. This object was then passed into the createPopupDiv() function and it allowed me to delete each marker by their own unique ID. Solution was found [here](https://gis.stackexchange.com/questions/201958/remove-leaflet-markers-leaflet-id/201975)
- Interesting [Military Installation Maps](https://www.loc.gov/item/86694460/)
- Potential web content for MGRS familiarity [here](http://www.citrusham.org/citrusham/grid.pdf) (saved locally as grid.pdf)
- Began creating the functionality for implementing my own Grid Zone Designators
- Created a Grid Zone Designator generator
- Refer to the ES6 version of a working MGRS Grid [here](https://github.com/eacaps/leaflet-mgrs-layer/tree/gh-pages)
- Created all the Grid Zone Designators for the world. Now we just need to generate them when they are within the map bounds
- Good source for visualizing Grid Zones [here](http://legallandconverter.com/p50.html)
- BUG: Symbols cannot be dropped directly on the grid lines. This is an issue with the drop function in moveSymbol
- BUG: On boot up the map does not load 100%. This could be a future problem on production.

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
