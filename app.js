/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-expressions */
// * IMPORTS * //
import { selectAffiliation } from './mdcComponents';
import affiliationOutlineObject from './affiliationOutlineObject';
import militarySymbolsObject from './militarySymbolsObject';
import unitSizeObject from './unitSizeObject';
import mod1Object from './mod1Object';
import mod2Object from './mod2Object';
import taskForceObject from './taskForceObject';
import commandPostObject from './commandPostObject';


// * The star of the show * //
// ex- new MilSym('.test', 'Infantry', 'friendly', 'team', 'Armored', 'Rail', 'A/2-101', '27/42ID', '+', false, false, false, false, 'Tactical Command Post').placeSymbol();
// class MilSym_OLD {
//   constructor(location, symbol, affiliation = 'friendly', echelon = 'none', mod1 = 'None', mod2 = 'None', uniqueDesignation = '', higherFormation = '', reinforcedReduced = '', isFlying = false, isActivity = false, isInstallation = false, isTaskForce = false, commandPost = 'None') {
//     this.location = document.querySelector(location);
//     this.symbol = militarySymbolsObject[symbol].affiliation[affiliation];
//     this.affiliation = affiliationOutlineObject[affiliation];
//     this.echelon = unitSizeObject[echelon].affiliation[affiliation];
//     this.type = militarySymbolsObject[symbol].type;
//     this.mod1 = mod1Object[mod1].affiliation[affiliation];
//     this.mod2 = mod2Object[mod2].affiliation[affiliation];
//     this.uniqueDesignation = uniqueDesignation;
//     this.higherFormation = higherFormation;
//     this.reinforcedReduced = reinforcedReduced;
//     this.isFlying = isFlying;
//     this.flightCapable = militarySymbolsObject[symbol].flightCapable;
//     this.isActivity = isActivity;
//     this.isInstallation = isInstallation;
//     this.isTaskForce = isTaskForce;
//     this.commandPost = commandPostObject[commandPost].affiliation[affiliation];
//     this.data = {
//       location,
//       symbol,
//       affiliation,
//       echelon,
//       mod1,
//       mod2,
//       type: this.type,
//     };
//   }

//   placeSymbol() {
//     this.location.querySelector('svg') ? this.location.querySelector('svg').remove() : null;
//     const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
//     const desc = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
//     // Add a description attr to the SVG, remove camel case and add a space on Affiliation and Echelon
//     desc.textContent = `
//           Affiliation: ${this.data.affiliation.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
//           Echelon: ${this.data.echelon.replace(/([A-Z])/g, ' / $1').replace(/^./, str => str.toUpperCase())}
//           Symbol: ${this.data.symbol}
//           Modifier 1: ${this.data.mod1}
//           Modifier 2: ${this.data.mod2}
//           About: This symbol was created by CPT James Pistell for MGRS-Mapper.com`;
//     svg.prepend(desc);
//     // This will find any symbols that have nothing in the echelon path data. You can use this later to exclude them from being inserted into the DOM
//     // if (this.echelon.d === '') {
//     //   svg.append(this.affiliationOutlineData, this.decoratorData);
//     // } else {
//     //   svg.append(this.affiliationOutlineData, this.decoratorData, this.echelonData);
//     // }
//     svg.append(this.affiliationOutlineData, this.decoratorData, this.echelonData, this.mod1Data, this.mod2Data, this.uniqueDesignationData, this.higherFormationData, this.reinforcedReducedData, this.isFlyingData, this.activityData, this.installationData, this.taskForceData, this.commandPostData);
//     this.location.append(svg);
//     svg.setAttributeNS(null, 'data-symbol-name', this.data.symbol);
//     svg.setAttributeNS(null, 'data-symbol-info', JSON.stringify(this.data)); // this should probably be split into separate data-attrs
//     svg.setAttributeNS(null, 'height', `${svg.getBBox().height}`);
//     svg.setAttributeNS(null, 'width', `${svg.getBBox().width}`);
//     svg.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
//     // svg.setAttributeNS(null, 'viewBox', `${svg.getBBox().x - 4} ${svg.getBBox().y - 4} ${svg.getBBox().width + 8} ${svg.getBBox().height + 8}`);
//     // Manually setting the viewBox prevents the symbol from resizing when adding elements like echelon. This might not be the best way to do things.
//     svg.setAttributeNS(null, 'viewBox', '21 46 158 108');
//   }

//   get affiliationOutlineData() {
//     const outlineGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//     outlineGroup.setAttributeNS(null, 'class', 'outline');
//     const outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//     outline.setAttributeNS(null, 'stroke', 'black');
//     outline.setAttributeNS(null, 'stroke-width', '4');
//     const outlineTemplated = document.createElementNS('http://www.w3.org/2000/svg', 'path');

//     const generateOutline = () => Object.keys(this.affiliation).forEach((key) => {
//       const value = this.affiliation[key];
//       if (key.indexOf('templated') === 0 && value === true) {
//         outline.setAttributeNS(null, 'd', `${this.affiliation.d}`);
//         outline.setAttributeNS(null, 'fill', `${this.affiliation.fill}`);
//         outlineTemplated.setAttributeNS(null, 'd', `${this.affiliation.d}`);
//         outlineTemplated.setAttributeNS(null, 'fill', `${this.affiliation.fill_2}`);
//         outlineTemplated.setAttributeNS(null, 'stroke', `${this.affiliation.stroke_2}`);
//         outlineTemplated.setAttributeNS(null, 'stroke-width', `${this.affiliation.strokeWidth_2}`);
//         outlineTemplated.setAttributeNS(null, 'stroke-dasharray', `${this.affiliation.strokeDashArray_2}`);
//         // Had to put this in an async function because the templated outline was popping up ahead of the regular outline
//         // Can't use generator functions because of some dumbass babel error and I didn't feel like installing the @babel/runtime plugin
//         (async () => {
//           // Don't listen to VS Code, await IS necessary for this
//           await outlineGroup.append(outlineTemplated);
//           outlineGroup.prepend(outline);
//         })().catch((err) => {
//           console.error(err);
//           setTimeout(() => {
//             outlineGroup.append(outlineTemplated);
//             outlineGroup.prepend(outline);
//           }, 30);
//         });
//         // This async function also works
//         // (async () => {
//         //   await outlineGroup.append(outline, outlineTemplated);
//         //   outline.insertAdjacentElement('afterend', outlineTemplated);
//         // })();
//       } else {
//         outline.setAttributeNS(null, 'd', `${this.affiliation.d}`);
//         outline.setAttributeNS(null, 'fill', `${this.affiliation.fill}`);
//         outlineGroup.append(outline);
//       }
//     });

//     // Check if the symbol is a piece of equipment
//     switch (this.type) {
//       case 'Equipment':
//         // Removes the echelon data above the Equipment symbol.
//         this.echelon = unitSizeObject.none.affiliation[this.data.affiliation];
//         // Removes the Unique Designation about the Equipment symbol
//         this.uniqueDesignation = '';
//         // Removes the Higher Formation about the Equipment symbol
//         this.higherFormation = '';
//         // Removes the Reinforced/Reduced above the Equipment symbol
//         this.reinforcedReduced = '';
//         // If the symbol is a friendly piece of equipment, then we need to adjust the outline
//         switch (selectAffiliation.value) {
//           case 'friendly':
//             const outline0 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//             outline0.setAttributeNS(null, 'cx', '100');
//             outline0.setAttributeNS(null, 'cy', '100');
//             outline0.setAttributeNS(null, 'r', '60');
//             outline0.setAttributeNS(null, 'fill', 'rgb(128,224,255)');
//             outline0.setAttributeNS(null, 'stroke', 'black');
//             outline0.setAttributeNS(null, 'stroke-width', '4');
//             outlineGroup.append(outline0);
//             break;
//           case 'friendlyTemplated':
//             const outline1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//             outline1.setAttributeNS(null, 'cx', '100');
//             outline1.setAttributeNS(null, 'cy', '100');
//             outline1.setAttributeNS(null, 'r', '60');
//             outline1.setAttributeNS(null, 'fill', 'rgb(128,224,255)');
//             outline1.setAttributeNS(null, 'stroke', 'black');
//             outline1.setAttributeNS(null, 'stroke-width', '4');
//             const outline2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//             outline2.setAttributeNS(null, 'cx', '100');
//             outline2.setAttributeNS(null, 'cy', '100');
//             outline2.setAttributeNS(null, 'r', '60');
//             outline2.setAttributeNS(null, 'fill', 'none');
//             outline2.setAttributeNS(null, 'stroke', 'rgb(239, 239, 239)');
//             outline2.setAttributeNS(null, 'stroke-width', '5');
//             outline2.setAttributeNS(null, 'stroke-dasharray', '4,4');
//             outlineGroup.append(outline1, outline2);
//             break;
//           default:
//             // If the equipment is anything BUT friendly, we can use the normal outlines for Land Units.
//             generateOutline();
//             break;
//         }
//         break;
//       default:
//         generateOutline();
//         break;
//     }

//     return outlineGroup;
//   }

//   get decoratorData() {
//     const decoratorGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//     decoratorGroup.classList.add('decorator');
//     Object.keys(this.symbol).forEach((key) => {
//       if (key.indexOf('path') === 0) {
//         const element = this.symbol[key];
//         const decorator = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//         decorator.setAttributeNS(null, 'd', `${element.d}`);
//         // If the default decorator fill is missing, default to none
//         !element.fill ? decorator.setAttributeNS(null, 'fill', 'none') : decorator.setAttributeNS(null, 'fill', `${element.fill}`);
//         // If the default decorator stroke is missing, default to black
//         !element.stroke ? decorator.setAttributeNS(null, 'stroke', 'black') : decorator.setAttributeNS(null, 'stroke', `${element.stroke}`);
//         // If the default decorator stroke-width is missing, default to 4
//         !element.strokeWidth ? decorator.setAttributeNS(null, 'stroke-width', '4') : decorator.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
//         decoratorGroup.append(decorator);
//       }
//       if (key.indexOf('circle') === 0) {
//         const element = this.symbol[key];
//         const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
//         circle.setAttributeNS(null, 'cx', `${element.cx}`);
//         circle.setAttributeNS(null, 'cy', `${element.cy}`);
//         circle.setAttributeNS(null, 'r', `${element.r}`);
//         // Default circle decorator stroke to black
//         !element.stroke ? circle.setAttributeNS(null, 'stroke', 'black') : circle.setAttributeNS(null, 'stroke', `${element.stroke}`);
//         // Default circle decorator stroke width to 4
//         !element.strokeWidth ? circle.setAttributeNS(null, 'stroke-width', '4') : circle.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
//         // Default circle decorator fill to black
//         !element.fill ? circle.setAttributeNS(null, 'fill', 'black') : circle.setAttributeNS(null, 'fill', `${element.fill}`);
//         decoratorGroup.append(circle);
//       }
//       if (key.indexOf('text') === 0) {
//         const element = this.symbol[key];
//         const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//         text.textContent = element.symbolText;
//         text.setAttributeNS(null, 'x', `${element.x}`);
//         text.setAttributeNS(null, 'y', `${element.y}`);
//         text.setAttributeNS(null, 'text-anchor', `${element.textAnchor}`);
//         text.setAttributeNS(null, 'font-size', `${element.fontSize}`);
//         // Default decorator font family to Arial
//         !element.fontFamily ? text.setAttributeNS(null, 'font-family', 'Arial') : text.setAttributeNS(null, 'font-family', `${element.fontFamily}`);
//         // Default decorator font weight to 30
//         !element.fontWeight ? text.setAttributeNS(null, 'font-weight', '30') : text.setAttributeNS(null, 'font-weight', `${element.fontWeight}`);
//         // Default decorator font stroke to none
//         !element.stroke ? text.setAttributeNS(null, 'stroke', 'none') : text.setAttributeNS(null, 'stroke', `${element.stroke}`);
//         // Default decorator font stroke width to 4
//         !element.strokeWidth ? text.setAttributeNS(null, 'stroke-width', '4') : text.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
//         // Default decorator font fill to black
//         !element.fill ? text.setAttributeNS(null, 'fill', 'black') : text.setAttributeNS(null, 'fill', `${element.fill}`);
//         decoratorGroup.append(text);
//       }
//     });
//     return decoratorGroup;
//   }

//   get echelonData() {
//     const echelonGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//     echelonGroup.setAttributeNS(null, 'class', 'echelon');
//     const element = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//     element.setAttributeNS(null, 'd', `${this.echelon.d}`);
//     element.setAttributeNS(null, 'fill', 'black');
//     element.setAttributeNS(null, 'stroke', 'black');
//     element.setAttributeNS(null, 'stroke-width', '4');
//     Object.keys(this.echelon).forEach((key) => {
//       // ! The only echelon with a fill OTHER THAN black is 'team'. Probably don't need a loop for this.
//       element.setAttributeNS(null, 'fill', `${this.echelon.fill}`);
//     });
//     echelonGroup.append(element);
//     return echelonGroup;
//   }

//   get mod1Data() {
//     const mod1Group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//     mod1Group.classList.add('mod1');
//     Object.keys(this.mod1).forEach((key) => {
//       if (key.indexOf('path') === 0) {
//         const element = this.mod1[key];
//         const mod1Path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//         mod1Path.setAttributeNS(null, 'd', `${element.d}`);
//         // If the default mod1Path fill is missing, default to none
//         !element.fill ? mod1Path.setAttributeNS(null, 'fill', 'none') : mod1Path.setAttributeNS(null, 'fill', `${element.fill}`);
//         // If the default mod1Path stroke is missing, default to black
//         !element.stroke ? mod1Path.setAttributeNS(null, 'stroke', 'black') : mod1Path.setAttributeNS(null, 'stroke', `${element.stroke}`);
//         // If the default mod1Path stroke-width is missing, default to 4
//         !element.strokeWidth ? mod1Path.setAttributeNS(null, 'stroke-width', '4') : mod1Path.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
//         // If the mod1 element is missing a transform property, do nothing, else set the transform value
//         !element.transform ? null : mod1Path.setAttributeNS(null, 'transform', `${element.transform}`);
//         mod1Group.append(mod1Path);
//       }
//       if (key.indexOf('text') === 0) {
//         const element = this.mod1[key];
//         const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//         text.textContent = element.symbolText;
//         text.setAttributeNS(null, 'x', `${element.x}`);
//         text.setAttributeNS(null, 'y', `${element.y}`);
//         text.setAttributeNS(null, 'text-anchor', `${element.textAnchor}`);
//         text.setAttributeNS(null, 'font-size', `${element.fontSize}`);
//         // Default decorator font family to Arial
//         !element.fontFamily ? text.setAttributeNS(null, 'font-family', 'Arial') : text.setAttributeNS(null, 'font-family', `${element.fontFamily}`);
//         // Default decorator font weight to 30
//         !element.fontWeight ? text.setAttributeNS(null, 'font-weight', '30') : text.setAttributeNS(null, 'font-weight', `${element.fontWeight}`);
//         // Default decorator font stroke to none
//         !element.stroke ? text.setAttributeNS(null, 'stroke', 'none') : text.setAttributeNS(null, 'stroke', `${element.stroke}`);
//         // Default decorator font stroke width to 4
//         !element.strokeWidth ? text.setAttributeNS(null, 'stroke-width', '4') : text.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
//         // Default decorator font fill to black
//         !element.fill ? text.setAttributeNS(null, 'fill', 'black') : text.setAttributeNS(null, 'fill', `${element.fill}`);
//         mod1Group.append(text);
//       }
//     });
//     return mod1Group;
//   }

//   get mod2Data() {
//     const mod2Group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//     mod2Group.classList.add('mod2');
//     Object.keys(this.mod2).forEach((key) => {
//       if (key.indexOf('path') === 0) {
//         const element = this.mod2[key];
//         const mod2Path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//         mod2Path.setAttributeNS(null, 'd', `${element.d}`);
//         // If the default mod2Path fill is missing, default to none
//         !element.fill ? mod2Path.setAttributeNS(null, 'fill', 'none') : mod2Path.setAttributeNS(null, 'fill', `${element.fill}`);
//         // If the default mod2Path stroke is missing, default to black
//         !element.stroke ? mod2Path.setAttributeNS(null, 'stroke', 'black') : mod2Path.setAttributeNS(null, 'stroke', `${element.stroke}`);
//         // If the default mod2Path stroke-width is missing, default to 4
//         !element.strokeWidth ? mod2Path.setAttributeNS(null, 'stroke-width', '4') : mod2Path.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
//         // If the symbol mod2 is a mobility modifier AND it's a piece of equipment, put Mod2 below the symbol
//         if (this.mod2.mobility && this.type === 'Equipment') {
//           // Now check the affiliation of the symbol and refine the Mod2 translation
//           switch (this.data.affiliation) {
//             case 'friendly':
//               mod2Path.setAttributeNS(null, 'd', mod2Object[this.data.mod2].affiliation.mobility.path_1.d);
//               mod2Path.setAttributeNS(null, 'transform', 'translate(0,47)');
//               break;
//             case 'friendlyTemplated':
//               mod2Path.setAttributeNS(null, 'd', mod2Object[this.data.mod2].affiliation.mobility.path_1.d);
//               mod2Path.setAttributeNS(null, 'transform', 'translate(0,47)');
//               break;
//             case 'neutral':
//               mod2Path.setAttributeNS(null, 'd', mod2Object[this.data.mod2].affiliation.mobility.path_1.d);
//               mod2Path.setAttributeNS(null, 'transform', 'translate(0,47)');
//               break;
//             default:
//               // This is important. This will remove the path data for the affiliation and set it to the 'mobility' path data. Otherwise the Mod2 will be truncated
//               // For instance: set the symbol to a Land Unit and then to hostile and then Mod2 to "Amphibious". Notice how truncated the Mod2 is?
//               // This removes that truncation and sets it back to 'mobility' so Mod2 will be the full width of the symbol
//               mod2Path.setAttributeNS(null, 'd', mod2Object[this.data.mod2].affiliation.mobility.path_1.d);
//               // Handles Mod2 translate for hostile, hostileTemplated, unknown & pending
//               mod2Path.setAttributeNS(null, 'transform', 'translate(0,60)');
//               break;
//           }
//         } else {
//           // If the mod2 element is missing a transform property, do nothing, else set the transform value
//           !element.transform ? null : mod2Path.setAttributeNS(null, 'transform', `${element.transform}`);
//         }
//         mod2Group.append(mod2Path);
//       }
//       if (key.indexOf('text') === 0) {
//         const element = this.mod2[key];
//         const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//         text.textContent = element.symbolText;
//         text.setAttributeNS(null, 'x', `${element.x}`);
//         text.setAttributeNS(null, 'y', `${element.y}`);
//         text.setAttributeNS(null, 'text-anchor', `${element.textAnchor}`);
//         text.setAttributeNS(null, 'font-size', `${element.fontSize}`);
//         // Default decorator font family to Arial
//         !element.fontFamily ? text.setAttributeNS(null, 'font-family', 'Arial') : text.setAttributeNS(null, 'font-family', `${element.fontFamily}`);
//         // Default decorator font weight to 30
//         !element.fontWeight ? text.setAttributeNS(null, 'font-weight', '30') : text.setAttributeNS(null, 'font-weight', `${element.fontWeight}`);
//         // Default decorator font stroke to none
//         !element.stroke ? text.setAttributeNS(null, 'stroke', 'none') : text.setAttributeNS(null, 'stroke', `${element.stroke}`);
//         // Default decorator font stroke width to 4
//         !element.strokeWidth ? text.setAttributeNS(null, 'stroke-width', '4') : text.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
//         // Default decorator font fill to black
//         !element.fill ? text.setAttributeNS(null, 'fill', 'black') : text.setAttributeNS(null, 'fill', `${element.fill}`);
//         mod2Group.append(text);
//       }
//     });
//     return mod2Group;
//   }

//   get uniqueDesignationData() {
//     const uniqueDesignationGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//     uniqueDesignationGroup.classList.add('uniqueUnitDesignation');
//     const uniqueDesignationText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//     uniqueDesignationText.textContent = this.uniqueDesignation.toUpperCase();
//     uniqueDesignationText.setAttribute('x', '115%');
//     uniqueDesignationText.setAttribute('y', '100%');
//     uniqueDesignationText.setAttribute('fill', 'black');
//     uniqueDesignationText.setAttribute('font-weight', 'bold');
//     uniqueDesignationText.setAttribute('font-family', 'Arial');
//     uniqueDesignationText.setAttribute('font-size', '22');
//     uniqueDesignationText.setAttribute('text-anchor', 'start');
//     uniqueDesignationGroup.append(uniqueDesignationText);
//     return uniqueDesignationGroup;
//   }

//   get higherFormationData() {
//     const higherFormationGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//     higherFormationGroup.classList.add('higherUnitFormation');
//     const higherFormationText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//     higherFormationText.textContent = this.higherFormation.toUpperCase();
//     higherFormationText.setAttribute('x', '115%');
//     higherFormationText.setAttribute('y', '140%');
//     higherFormationText.setAttribute('fill', 'black');
//     higherFormationText.setAttribute('font-weight', 'bold');
//     higherFormationText.setAttribute('font-family', 'Arial');
//     higherFormationText.setAttribute('font-size', '22');
//     higherFormationText.setAttribute('text-anchor', 'start');
//     higherFormationGroup.append(higherFormationText);
//     return higherFormationGroup;
//   }

//   get reinforcedReducedData() {
//     const reinforcedReducedGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//     reinforcedReducedGroup.classList.add('reinforcedReduced');
//     const reinforcedReducedText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//     reinforcedReducedText.setAttribute('x', '195');
//     reinforcedReducedText.setAttribute('y', '40');
//     reinforcedReducedText.setAttribute('text-anchor', 'start');
//     reinforcedReducedText.setAttribute('font-size', '40');
//     reinforcedReducedText.setAttribute('font-family', 'Arial');
//     reinforcedReducedText.setAttribute('font-weight', 'bold');
//     reinforcedReducedText.setAttribute('stroke-width', '4');
//     reinforcedReducedText.setAttribute('fill', 'black');
//     reinforcedReducedText.textContent = this.reinforcedReduced;
//     reinforcedReducedGroup.append(reinforcedReducedText);
//     return reinforcedReducedGroup;
//   }

//   get isFlyingData() {
//     // Wrapping this in an if statement prevents some random path code from being appended to the SVG.
//     if (this.isFlying) {
//       return this.affiliation.flying;
//     }
//     return 'Flying Data Goes Here';
//   }

//   // MainMS.isFlyingData = true;
//   set isFlyingData(value) {
//     if (value) {
//       // Mutate the path data
//       this.affiliation.d = this.affiliation.flying;
//     } else {
//       // Reset the path data
//       this.affiliation.d = affiliationOutlineObject[this.data.affiliation].d;
//     }
//     // Can be written as a ternary operator
//     // value ? this.affiliation.d = this.affiliation.flying : this.affiliation.d = affiliationOutlineObject[this.data.affiliation].d;
//   }

//   get activityData() {
//     if (this.isActivity) {
//       const activityGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//       activityGroup.classList.add('activity');
//       const activityModifier = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//       activityModifier.setAttribute('d', this.affiliation.activity);
//       activityModifier.setAttribute('fill', 'black');
//       activityModifier.setAttribute('stroke', 'black');
//       activityModifier.setAttribute('stroke-width', '4');
//       activityGroup.append(activityModifier);
//       return activityGroup;
//     }
//     return 'Activity Data Goes Here';
//   }


//   get installationData() {
//     if (this.isInstallation) {
//       const installationGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//       installationGroup.classList.add('installation');
//       const installationModifier = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//       installationModifier.setAttribute('d', this.affiliation.installation);
//       installationModifier.setAttribute('fill', 'black');
//       installationModifier.setAttribute('stroke', 'black');
//       installationModifier.setAttribute('stroke-width', '4');
//       installationGroup.append(installationModifier);
//       return installationGroup;
//     }
//     return 'Installation Data Goes Here';
//   }

//   get taskForceData() {
//     if (this.isTaskForce) {
//       const taskForceGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//       taskForceGroup.classList.add('taskforce');
//       const taskForceModifier = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//       taskForceModifier.setAttribute('d', taskForceObject[this.data.echelon].affiliation[this.data.affiliation].d);
//       taskForceModifier.setAttribute('fill', 'none');
//       taskForceModifier.setAttribute('stroke', 'black');
//       taskForceModifier.setAttribute('stroke-width', '4');
//       taskForceGroup.append(taskForceModifier);
//       return taskForceGroup;
//     }
//     return 'Task Force Data Goes Here';
//   }

//   get commandPostData() {
//     const commandPostGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
//     commandPostGroup.classList.add('commandpost');

//     Object.keys(this.commandPost).forEach((key) => {
//       if (key.indexOf('path') === 0) {
//         const element = this.commandPost[key];
//         const commandPostPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
//         commandPostPath.setAttributeNS(null, 'd', `${element.d}`);
//         // If the default commandPostPath fill is missing, default to none
//         !element.fill ? commandPostPath.setAttributeNS(null, 'fill', 'none') : commandPostPath.setAttributeNS(null, 'fill', `${element.fill}`);
//         // If the default commandPostPath stroke is missing, default to black
//         !element.stroke ? commandPostPath.setAttributeNS(null, 'stroke', 'black') : commandPostPath.setAttributeNS(null, 'stroke', `${element.stroke}`);
//         // If the default commandPostPath stroke-width is missing, default to 4
//         !element.strokeWidth ? commandPostPath.setAttributeNS(null, 'stroke-width', '4') : commandPostPath.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
//         // If the commandPost element is missing a transform property, do nothing, else set the transform value
//         !element.transform ? null : commandPostPath.setAttributeNS(null, 'transform', `${element.transform}`);
//         commandPostGroup.append(commandPostPath);
//       }
//       if (key.indexOf('text') === 0) {
//         const element = this.commandPost[key];
//         const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
//         text.textContent = element.symbolText;
//         text.setAttributeNS(null, 'x', `${element.x}`);
//         text.setAttributeNS(null, 'y', `${element.y}`);
//         text.setAttributeNS(null, 'text-anchor', `${element.textAnchor}`);
//         text.setAttributeNS(null, 'font-size', `${element.fontSize}`);
//         // Default decorator font family to Arial
//         !element.fontFamily ? text.setAttributeNS(null, 'font-family', 'Arial') : text.setAttributeNS(null, 'font-family', `${element.fontFamily}`);
//         // Default decorator font weight to 30
//         !element.fontWeight ? text.setAttributeNS(null, 'font-weight', '30') : text.setAttributeNS(null, 'font-weight', `${element.fontWeight}`);
//         // Default decorator font stroke to none
//         !element.stroke ? text.setAttributeNS(null, 'stroke', 'none') : text.setAttributeNS(null, 'stroke', `${element.stroke}`);
//         // Default decorator font stroke width to 4
//         !element.strokeWidth ? text.setAttributeNS(null, 'stroke-width', '4') : text.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
//         // Default decorator font fill to black
//         !element.fill ? text.setAttributeNS(null, 'fill', 'black') : text.setAttributeNS(null, 'fill', `${element.fill}`);
//         commandPostGroup.append(text);
//       }
//     });
//     return commandPostGroup;
//   }
// }

// Example 1- const symbol_1 = new MilSym('.test', 'Unmanned Aerial Surveillance', 'friendlyTemplated', 'team', 'Assault', 'Rail', 'A/2-101', '27/42ID', '+', false, true, true, true, 'Main Command Post');
// Example 2 - const symbol_2 = new MilSym('.test', 'Weapon System - Grenade Launcher - Medium', 'friendly' );
// symbol_2.mod1 = 'Armored';
// symbol_2.placeSymbol();
//! PLEASE TRANSFER YOUR OLD COMMENTS INTO THIS CLASS
class MilSym {
  constructor(location, symbol, affiliation, echelon, mod1, mod2, uniqueDesignation, higherFormation, reinforcedReduced, flying, activity, installation, taskForce, commandPost) {
    this._location = location;
    this._symbol = symbol;
    this._affiliation = affiliation;
    this._echelon = echelon;
    this._mod1 = mod1;
    this._mod2 = mod2;
    this._uniqueDesignation = uniqueDesignation;
    this._higherFormation = higherFormation;
    this._reinforcedReduced = reinforcedReduced;
    this._flying = flying;
    this._activity = activity;
    this._installation = installation;
    this._taskForce = taskForce;
    this._commandPost = commandPost;
    this.type = militarySymbolsObject[this._symbol].type;
    this.data = {
      affiliation,
      symbol,
      echelon,
      mod1,
      mod2,
      uniqueDesignation,
      higherFormation,
      reinforcedReduced,
      flying,
      activity,
      installation,
      taskForce,
      commandPost,
    };
    return this.placeSymbol();
  }

  // SVG LOCATION
  get location() {
    if (this._location) {
      return document.querySelector(this._location);
    }
    return undefined;
  }

  set location(value) {
    this._location = value;
  }

  // SYMBOL
  get symbol() {
    if (this._symbol) {
      const decoratorGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      decoratorGroup.classList.add('decorator');
      Object.keys(militarySymbolsObject[this._symbol].affiliation[this._affiliation]).forEach((key) => {
        const element = militarySymbolsObject[this._symbol].affiliation[this._affiliation][key];
        if (key.indexOf('path') === 0) {
          const decorator = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          decorator.setAttributeNS(null, 'd', `${element.d}`);
          // If the default decorator fill is missing, default to none
          !element.fill ? decorator.setAttributeNS(null, 'fill', 'none') : decorator.setAttributeNS(null, 'fill', `${element.fill}`);
          // If the default decorator stroke is missing, default to black
          !element.stroke ? decorator.setAttributeNS(null, 'stroke', 'black') : decorator.setAttributeNS(null, 'stroke', `${element.stroke}`);
          // If the default decorator stroke-width is missing, default to 4
          !element.strokeWidth ? decorator.setAttributeNS(null, 'stroke-width', '4') : decorator.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
          decoratorGroup.append(decorator);
        }
        if (key.indexOf('circle') === 0) {
          const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          circle.setAttributeNS(null, 'cx', `${element.cx}`);
          circle.setAttributeNS(null, 'cy', `${element.cy}`);
          circle.setAttributeNS(null, 'r', `${element.r}`);
          // Default circle decorator stroke to black
          !element.stroke ? circle.setAttributeNS(null, 'stroke', 'black') : circle.setAttributeNS(null, 'stroke', `${element.stroke}`);
          // Default circle decorator stroke width to 4
          !element.strokeWidth ? circle.setAttributeNS(null, 'stroke-width', '4') : circle.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
          // Default circle decorator fill to black
          !element.fill ? circle.setAttributeNS(null, 'fill', 'black') : circle.setAttributeNS(null, 'fill', `${element.fill}`);
          decoratorGroup.append(circle);
        }
        if (key.indexOf('text') === 0) {
          const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          text.textContent = element.symbolText;
          text.setAttributeNS(null, 'x', `${element.x}`);
          text.setAttributeNS(null, 'y', `${element.y}`);
          text.setAttributeNS(null, 'text-anchor', `${element.textAnchor}`);
          text.setAttributeNS(null, 'font-size', `${element.fontSize}`);
          // Default decorator font family to Arial
          !element.fontFamily ? text.setAttributeNS(null, 'font-family', 'Arial') : text.setAttributeNS(null, 'font-family', `${element.fontFamily}`);
          // Default decorator font weight to 30
          !element.fontWeight ? text.setAttributeNS(null, 'font-weight', '30') : text.setAttributeNS(null, 'font-weight', `${element.fontWeight}`);
          // Default decorator font stroke to none
          !element.stroke ? text.setAttributeNS(null, 'stroke', 'none') : text.setAttributeNS(null, 'stroke', `${element.stroke}`);
          // Default decorator font stroke width to 4
          !element.strokeWidth ? text.setAttributeNS(null, 'stroke-width', '4') : text.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
          // Default decorator font fill to black
          !element.fill ? text.setAttributeNS(null, 'fill', 'black') : text.setAttributeNS(null, 'fill', `${element.fill}`);
          decoratorGroup.append(text);
        }
      });
      return decoratorGroup;
    }
    return undefined;
  }

  set symbol(value) {
    this._symbol = value;
  }

  // AFFILIATION
  get affiliation() {
    if (this._affiliation) {
      const outlineGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      outlineGroup.setAttributeNS(null, 'class', 'outline');
      const outline = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      outline.setAttributeNS(null, 'stroke', 'black');
      outline.setAttributeNS(null, 'stroke-width', '4');
      const outlineTemplated = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      const element = affiliationOutlineObject[this._affiliation];
      // Set the symbol type to Equipment or Land Unit
      this.type = militarySymbolsObject[this._symbol].type;

      // Check if the symbol has the flightCapable property
      if (militarySymbolsObject[this._symbol].flightCapable) {
        flyingSwitch.disabled = false;
      } else {
        flyingSwitch.disabled = true;
      }

      //! This adds the flying outline to the symbol... Not sure if this logic is elegant or not...
      //! TEST THIS THOROUGHLY
      const adjustSymbolOutlineForFlying = () => {
        // Removes the echelon data above the Equipment symbol.
        this.echelon = undefined;
        // Removes the Unique Designation about the Equipment symbol
        this.uniqueDesignation = undefined;
        // Removes the Higher Formation about the Equipment symbol
        this.higherFormation = undefined;
        // Removes the Reinforced/Reduced above the Equipment symbol
        this.reinforcedReduced = undefined;
        outline.setAttributeNS(null, 'd', `${element.flying}`);
        outline.setAttributeNS(null, 'fill', `${element.fill}`);
        outlineGroup.append(outline);
        return outlineGroup;
      };

      const adjustSymbolOutlineForEquipment = () => {
        // Removes the echelon data above the Equipment symbol.
        this.echelon = undefined;
        // Removes the Unique Designation about the Equipment symbol
        this.uniqueDesignation = undefined;
        // Removes the Higher Formation about the Equipment symbol
        this.higherFormation = undefined;
        // Removes the Reinforced/Reduced above the Equipment symbol
        this.reinforcedReduced = undefined;

        if (this._affiliation === 'friendly') {
          const outline0 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          outline0.setAttributeNS(null, 'cx', '100');
          outline0.setAttributeNS(null, 'cy', '100');
          outline0.setAttributeNS(null, 'r', '60');
          outline0.setAttributeNS(null, 'fill', 'rgb(128,224,255)');
          outline0.setAttributeNS(null, 'stroke', 'black');
          outline0.setAttributeNS(null, 'stroke-width', '4');
          outlineGroup.append(outline0);
          return outlineGroup;
        }

        if (this._affiliation === 'friendlyTemplated') {
          const outline1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          outline1.setAttributeNS(null, 'cx', '100');
          outline1.setAttributeNS(null, 'cy', '100');
          outline1.setAttributeNS(null, 'r', '60');
          outline1.setAttributeNS(null, 'fill', 'rgb(128,224,255)');
          outline1.setAttributeNS(null, 'stroke', 'black');
          outline1.setAttributeNS(null, 'stroke-width', '4');
          const outline2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          outline2.setAttributeNS(null, 'cx', '100');
          outline2.setAttributeNS(null, 'cy', '100');
          outline2.setAttributeNS(null, 'r', '60');
          outline2.setAttributeNS(null, 'fill', 'none');
          outline2.setAttributeNS(null, 'stroke', 'rgb(239, 239, 239)');
          outline2.setAttributeNS(null, 'stroke-width', '5');
          outline2.setAttributeNS(null, 'stroke-dasharray', '4,4');
          outlineGroup.append(outline1, outline2);
          return outlineGroup;
        }
        // If the equipment symbol is not friendly, then just use the normal outlines
        outline.setAttributeNS(null, 'd', `${affiliationOutlineObject[this._affiliation].d}`);
        outline.setAttributeNS(null, 'fill', `${affiliationOutlineObject[this._affiliation].fill}`);
        outlineGroup.append(outline);
        return outlineGroup;
      };

      switch (affiliationOutlineObject[this._affiliation].templated) {
        case true:
          if (militarySymbolsObject[this._symbol].type === 'Equipment') {
            return adjustSymbolOutlineForEquipment();
          }
          if (this._flying) {
            return adjustSymbolOutlineForFlying();
          }
          outline.setAttributeNS(null, 'd', `${element.d}`);
          outline.setAttributeNS(null, 'fill', `${element.fill}`);
          outlineTemplated.setAttributeNS(null, 'd', `${element.d}`);
          outlineTemplated.setAttributeNS(null, 'fill', `${element.fill_2}`);
          outlineTemplated.setAttributeNS(null, 'stroke', `${element.stroke_2}`);
          outlineTemplated.setAttributeNS(null, 'stroke-width', `${element.strokeWidth_2}`);
          outlineTemplated.setAttributeNS(null, 'stroke-dasharray', `${element.strokeDashArray_2}`);
          outlineGroup.append(outline, outlineTemplated);
          return outlineGroup;
        case false:
          if (militarySymbolsObject[this._symbol].type === 'Equipment') {
            return adjustSymbolOutlineForEquipment();
          }
          if (this._flying) {
            return adjustSymbolOutlineForFlying();
          }
          outline.setAttributeNS(null, 'd', `${element.d}`);
          outline.setAttributeNS(null, 'fill', `${element.fill}`);
          outlineGroup.append(outline);
          return outlineGroup;
        default:
          break;
      }
    } else {
      return undefined;
    }
  }

  set affiliation(value) {
    this._affiliation = value;
  }

  // ECHELON
  get echelon() {
    if (this._echelon) {
      const echelonGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      echelonGroup.setAttributeNS(null, 'class', 'echelon');
      const element = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      element.setAttributeNS(null, 'd', `${unitSizeObject[this._echelon].affiliation[this._affiliation].d}`);
      //  The only echelon with a fill OTHER THAN black is 'team'.
      this._echelon === 'team' ? element.setAttributeNS(null, 'fill', 'none') : element.setAttributeNS(null, 'fill', 'black');
      element.setAttributeNS(null, 'stroke', 'black');
      element.setAttributeNS(null, 'stroke-width', '4');
      echelonGroup.append(element);
      return echelonGroup;
    }
    return undefined;
  }

  set echelon(value) {
    this._echelon = value;
  }

  // MODIFIER 1
  get mod1() {
    if (this._mod1) {
      const mod1Group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      mod1Group.classList.add('mod1');
      Object.keys(mod1Object[this._mod1].affiliation[this._affiliation]).forEach((key) => {
        const element = mod1Object[this._mod1].affiliation[this._affiliation][key];
        if (key.indexOf('path') === 0) {
          const mod1Path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          mod1Path.setAttributeNS(null, 'd', `${element.d}`);
          // If the default mod1Path fill is missing, default to none
          !element.fill ? mod1Path.setAttributeNS(null, 'fill', 'none') : mod1Path.setAttributeNS(null, 'fill', `${element.fill}`);
          // If the default mod1Path stroke is missing, default to black
          !element.stroke ? mod1Path.setAttributeNS(null, 'stroke', 'black') : mod1Path.setAttributeNS(null, 'stroke', `${element.stroke}`);
          // If the default mod1Path stroke-width is missing, default to 4
          !element.strokeWidth ? mod1Path.setAttributeNS(null, 'stroke-width', '4') : mod1Path.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
          // If the mod1 element is missing a transform property, do nothing, else set the transform value
          !element.transform ? null : mod1Path.setAttributeNS(null, 'transform', `${element.transform}`);
          mod1Group.append(mod1Path);
        }
        if (key.indexOf('text') === 0) {
          // const element = this.mod1[key];
          const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          text.textContent = element.symbolText;
          text.setAttributeNS(null, 'x', `${element.x}`);
          text.setAttributeNS(null, 'y', `${element.y}`);
          text.setAttributeNS(null, 'text-anchor', `${element.textAnchor}`);
          text.setAttributeNS(null, 'font-size', `${element.fontSize}`);
          // Default decorator font family to Arial
          !element.fontFamily ? text.setAttributeNS(null, 'font-family', 'Arial') : text.setAttributeNS(null, 'font-family', `${element.fontFamily}`);
          // Default decorator font weight to 30
          !element.fontWeight ? text.setAttributeNS(null, 'font-weight', '30') : text.setAttributeNS(null, 'font-weight', `${element.fontWeight}`);
          // Default decorator font stroke to none
          !element.stroke ? text.setAttributeNS(null, 'stroke', 'none') : text.setAttributeNS(null, 'stroke', `${element.stroke}`);
          // Default decorator font stroke width to 4
          !element.strokeWidth ? text.setAttributeNS(null, 'stroke-width', '4') : text.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
          // Default decorator font fill to black
          !element.fill ? text.setAttributeNS(null, 'fill', 'black') : text.setAttributeNS(null, 'fill', `${element.fill}`);
          mod1Group.append(text);
        }
      });
      return mod1Group;
    }
    return undefined;
  }

  set mod1(value) {
    this._mod1 = value;
  }

  // MODIFIER 2
  get mod2() {
    if (this._mod2) {
      const mod2Group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      const mod2Path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      mod2Group.classList.add('mod2');
      Object.keys(mod2Object[this._mod2].affiliation[this._affiliation]).forEach((key) => {
        const element = mod2Object[this._mod2].affiliation[this._affiliation][key];


        if (key.indexOf('path') === 0) {
          // const mod2Path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          mod2Path.setAttributeNS(null, 'd', `${element.d}`);
          // If the default mod2Path fill is missing, default to none
          !element.fill ? mod2Path.setAttributeNS(null, 'fill', 'none') : mod2Path.setAttributeNS(null, 'fill', `${element.fill}`);
          // If the default mod2Path stroke is missing, default to black
          !element.stroke ? mod2Path.setAttributeNS(null, 'stroke', 'black') : mod2Path.setAttributeNS(null, 'stroke', `${element.stroke}`);
          // If the default mod2Path stroke-width is missing, default to 4
          !element.strokeWidth ? mod2Path.setAttributeNS(null, 'stroke-width', '4') : mod2Path.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
          // If the mod2 element is missing a transform property, do nothing, else set the transform value
          !element.transform ? null : mod2Path.setAttributeNS(null, 'transform', `${element.transform}`);
          mod2Group.append(mod2Path);
        }
        if (key.indexOf('text') === 0) {
          // const element = this.mod2[key];
          const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          text.textContent = element.symbolText;
          text.setAttributeNS(null, 'x', `${element.x}`);
          text.setAttributeNS(null, 'y', `${element.y}`);
          text.setAttributeNS(null, 'text-anchor', `${element.textAnchor}`);
          text.setAttributeNS(null, 'font-size', `${element.fontSize}`);
          // Default decorator font family to Arial
          !element.fontFamily ? text.setAttributeNS(null, 'font-family', 'Arial') : text.setAttributeNS(null, 'font-family', `${element.fontFamily}`);
          // Default decorator font weight to 30
          !element.fontWeight ? text.setAttributeNS(null, 'font-weight', '30') : text.setAttributeNS(null, 'font-weight', `${element.fontWeight}`);
          // Default decorator font stroke to none
          !element.stroke ? text.setAttributeNS(null, 'stroke', 'none') : text.setAttributeNS(null, 'stroke', `${element.stroke}`);
          // Default decorator font stroke width to 4
          !element.strokeWidth ? text.setAttributeNS(null, 'stroke-width', '4') : text.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
          // Default decorator font fill to black
          !element.fill ? text.setAttributeNS(null, 'fill', 'black') : text.setAttributeNS(null, 'fill', `${element.fill}`);
          mod2Group.append(text);
        }

        //! This works but I would advise you to further test it.
        if (mod2Object[this._mod2].affiliation[this._affiliation].mobility && militarySymbolsObject[this._symbol].type === 'Equipment') {
          // Now check the affiliation of the symbol and refine the Mod2 translation
          switch (this._affiliation) {
            case 'friendly':
              mod2Path.setAttributeNS(null, 'd', mod2Object[this._mod2].affiliation.mobility.path_1.d);
              mod2Path.setAttributeNS(null, 'transform', 'translate(0,47)');
              break;
            case 'friendlyTemplated':
              mod2Path.setAttributeNS(null, 'd', mod2Object[this._mod2].affiliation.mobility.path_1.d);
              mod2Path.setAttributeNS(null, 'transform', 'translate(0,47)');
              break;
            case 'neutral':
              mod2Path.setAttributeNS(null, 'd', mod2Object[this._mod2].affiliation.mobility.path_1.d);
              mod2Path.setAttributeNS(null, 'transform', 'translate(0,47)');
              break;
            default:
              // This is important. This will remove the path data for the affiliation and set it to the 'mobility' path data. Otherwise the Mod2 will be truncated
              // For instance: set the symbol to a Land Unit and then to hostile and then Mod2 to "Amphibious". Notice how truncated the Mod2 is?
              // This removes that truncation and sets it back to 'mobility' so Mod2 will be the full width of the symbol
              mod2Path.setAttributeNS(null, 'd', mod2Object[this._mod2].affiliation.mobility.path_1.d);
              // Handles Mod2 translate for hostile, hostileTemplated, unknown & pending
              mod2Path.setAttributeNS(null, 'transform', 'translate(0,60)');
              break;
          }
        } else {
          // If the mod2 element is missing a transform property, do nothing, else set the transform value
          //! Not sure if this is even needed.
          !element.transform ? null : mod2Path.setAttributeNS(null, 'transform', `${element.transform}`);
        }
      });

      return mod2Group;
    }
    return undefined;
  }

  set mod2(value) {
    this._mod2 = value;
  }

  // UNIQUE DESIGNATION
  get uniqueDesignation() {
    if (this._uniqueDesignation) {
      const uniqueDesignationGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      uniqueDesignationGroup.classList.add('uniqueUnitDesignation');
      const uniqueDesignationText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      uniqueDesignationText.textContent = this._uniqueDesignation.toUpperCase();
      uniqueDesignationText.setAttribute('x', '115%');
      uniqueDesignationText.setAttribute('y', '100%');
      uniqueDesignationText.setAttribute('fill', 'black');
      uniqueDesignationText.setAttribute('font-weight', 'bold');
      uniqueDesignationText.setAttribute('font-family', 'Arial');
      uniqueDesignationText.setAttribute('font-size', '22');
      uniqueDesignationText.setAttribute('text-anchor', 'start');
      uniqueDesignationGroup.append(uniqueDesignationText);
      return uniqueDesignationGroup;
    }
    return undefined;
  }

  set uniqueDesignation(value) {
    this._uniqueDesignation = value;
  }

  // HIGHER FORMATION
  get higherFormation() {
    if (this._higherFormation) {
      const higherFormationGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      higherFormationGroup.classList.add('higherUnitFormation');
      const higherFormationText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      higherFormationText.textContent = this._higherFormation.toUpperCase();
      higherFormationText.setAttribute('x', '115%');
      higherFormationText.setAttribute('y', '140%');
      higherFormationText.setAttribute('fill', 'black');
      higherFormationText.setAttribute('font-weight', 'bold');
      higherFormationText.setAttribute('font-family', 'Arial');
      higherFormationText.setAttribute('font-size', '22');
      higherFormationText.setAttribute('text-anchor', 'start');
      higherFormationGroup.append(higherFormationText);
      return higherFormationGroup;
    }
    return undefined;
  }

  set higherFormation(value) {
    this._higherFormation = value;
  }

  // REINFORCED AND REDUCED
  get reinforcedReduced() {
    if (this._reinforcedReduced) {
      const reinforcedReducedGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      reinforcedReducedGroup.classList.add('reinforcedReduced');
      const reinforcedReducedText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      reinforcedReducedText.setAttribute('x', '195');
      reinforcedReducedText.setAttribute('y', '40');
      reinforcedReducedText.setAttribute('text-anchor', 'start');
      reinforcedReducedText.setAttribute('font-size', '40');
      reinforcedReducedText.setAttribute('font-family', 'Arial');
      reinforcedReducedText.setAttribute('font-weight', 'bold');
      reinforcedReducedText.setAttribute('stroke-width', '4');
      reinforcedReducedText.setAttribute('fill', 'black');
      reinforcedReducedText.textContent = this._reinforcedReduced;
      reinforcedReducedGroup.append(reinforcedReducedText);
      return reinforcedReducedGroup;
    }
    return undefined;
  }

  set reinforcedReduced(value) {
    this._reinforcedReduced = value;
  }

  // FLYING
  get flying() {
    if (this._flying) {
      // Logic provided in the adjustSymbolOutlineForFlying() function in "get affiliation"
      return this._flying;
    }
    return undefined;
  }

  set flying(value) {
    this._flying = value;
  }

  // ACTIVITY
  get activity() {
    if (this._activity) {
      const activityGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      activityGroup.classList.add('activity');
      const activityModifier = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      activityModifier.setAttribute('d', affiliationOutlineObject[this._affiliation].activity);
      activityModifier.setAttribute('fill', 'black');
      activityModifier.setAttribute('stroke', 'black');
      activityModifier.setAttribute('stroke-width', '4');
      activityGroup.append(activityModifier);
      return activityGroup;
      // return this._activity;
    }
    return undefined;
  }

  set activity(value) {
    this._activity = value;
  }

  // INSTALLATION
  get installation() {
    if (this._installation) {
      const installationGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      installationGroup.classList.add('installation');
      const installationModifier = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      installationModifier.setAttribute('d', affiliationOutlineObject[this._affiliation].installation);
      installationModifier.setAttribute('fill', 'black');
      installationModifier.setAttribute('stroke', 'black');
      installationModifier.setAttribute('stroke-width', '4');
      installationGroup.append(installationModifier);
      return installationGroup;
    }
    return undefined;
  }

  set installation(value) {
    this._installation = value;
  }

  // TASK FORCE
  get taskForce() {
    if (this._taskForce) {
      const taskForceGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      taskForceGroup.classList.add('taskforce');
      const taskForceModifier = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      taskForceModifier.setAttribute('d', taskForceObject[this._echelon].affiliation[this._affiliation].d);
      taskForceModifier.setAttribute('fill', 'none');
      taskForceModifier.setAttribute('stroke', 'black');
      taskForceModifier.setAttribute('stroke-width', '4');
      taskForceGroup.append(taskForceModifier);
      return taskForceGroup;
    }
    return undefined;
  }

  set taskForce(value) {
    this._taskForce = value;
  }

  // COMMAND POST
  get commandPost() {
    if (this._commandPost) {
      const commandPostGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      commandPostGroup.classList.add('commandpost');

      Object.keys(commandPostObject[this._commandPost].affiliation[this._affiliation]).forEach((key) => {
        const element = commandPostObject[this._commandPost].affiliation[this._affiliation][key];
        if (key.indexOf('path') === 0) {
          const commandPostPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          commandPostPath.setAttributeNS(null, 'd', `${element.d}`);
          // If the default commandPostPath fill is missing, default to none
          !element.fill ? commandPostPath.setAttributeNS(null, 'fill', 'none') : commandPostPath.setAttributeNS(null, 'fill', `${element.fill}`);
          // If the default commandPostPath stroke is missing, default to black
          !element.stroke ? commandPostPath.setAttributeNS(null, 'stroke', 'black') : commandPostPath.setAttributeNS(null, 'stroke', `${element.stroke}`);
          // If the default commandPostPath stroke-width is missing, default to 4
          !element.strokeWidth ? commandPostPath.setAttributeNS(null, 'stroke-width', '4') : commandPostPath.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
          // If the commandPost element is missing a transform property, do nothing, else set the transform value
          !element.transform ? null : commandPostPath.setAttributeNS(null, 'transform', `${element.transform}`);
          commandPostGroup.append(commandPostPath);
        }
        if (key.indexOf('text') === 0) {
          const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
          text.textContent = element.symbolText;
          text.setAttributeNS(null, 'x', `${element.x}`);
          text.setAttributeNS(null, 'y', `${element.y}`);
          text.setAttributeNS(null, 'text-anchor', `${element.textAnchor}`);
          text.setAttributeNS(null, 'font-size', `${element.fontSize}`);
          // Default decorator font family to Arial
          !element.fontFamily ? text.setAttributeNS(null, 'font-family', 'Arial') : text.setAttributeNS(null, 'font-family', `${element.fontFamily}`);
          // Default decorator font weight to 30
          !element.fontWeight ? text.setAttributeNS(null, 'font-weight', '30') : text.setAttributeNS(null, 'font-weight', `${element.fontWeight}`);
          // Default decorator font stroke to none
          !element.stroke ? text.setAttributeNS(null, 'stroke', 'none') : text.setAttributeNS(null, 'stroke', `${element.stroke}`);
          // Default decorator font stroke width to 4
          !element.strokeWidth ? text.setAttributeNS(null, 'stroke-width', '4') : text.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
          // Default decorator font fill to black
          !element.fill ? text.setAttributeNS(null, 'fill', 'black') : text.setAttributeNS(null, 'fill', `${element.fill}`);
          commandPostGroup.append(text);
        }
      });
      return commandPostGroup;
    }
    return undefined;
  }

  set commandPost(value) {
    this._commandPost = value;
  }

  // PLACE SYMBOL
  placeSymbol() {
    this.location.querySelector('svg') ? this.location.querySelector('svg').remove() : null;
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const desc = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
    desc.textContent = `
      Affiliation: ${this._affiliation.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
      Echelon: ${this._echelon}
      Symbol: ${this._symbol}
      Modifier 1: ${this._mod1}
      Modifier 2: ${this._mod2}
      About: This symbol was created by CPT James Pistell for MGRS-Mapper.com`;
    svg.prepend(desc);

    const symbolValues = Object.entries(this.data).map((key) => {
      switch (key[0]) {
        case 'affiliation':
          return this.affiliation;
        case 'symbol':
          return this.symbol;
        case 'echelon':
          return this.echelon;
        case 'mod1':
          return this.mod1;
        case 'mod2':
          return this.mod2;
        case 'uniqueDesignation':
          return this.uniqueDesignation;
        case 'higherFormation':
          return this.higherFormation;
        case 'reinforcedReduced':
          return this.reinforcedReduced;
        case 'flying':
          return this.flying;
        case 'activity':
          return this.activity;
        case 'installation':
          return this.installation;
        case 'taskForce':
          return this.taskForce;
        case 'commandPost':
          return this.commandPost;
        default:
          break;
      }
    });

    symbolValues.forEach((e) => {
      if (e !== undefined) {
        svg.append(e);
      }
    });

    this.location.append(svg);

    svg.setAttributeNS(null, 'data-symbol-name', this._symbol);
    svg.setAttributeNS(null, 'data-symbol-info', JSON.stringify(this.data)); // this should probably be split into separate data-attrs
    svg.setAttributeNS(null, 'height', `${svg.getBBox().height}`);
    svg.setAttributeNS(null, 'width', `${svg.getBBox().width}`);
    svg.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');
    // svg.setAttributeNS(null, 'viewBox', `${svg.getBBox().x - 4} ${svg.getBBox().y - 4} ${svg.getBBox().width + 8} ${svg.getBBox().height + 8}`);
    // Manually setting the viewBox prevents the symbol from resizing when adding elements like echelon. This might not be the best way to do things.
    svg.setAttributeNS(null, 'viewBox', '21 46 158 108');
    console.log('PlaceSymbol Running!');
  }
}


// * Add Symbols and Modifiers to the Dropdown lists
// ex- addSymbolsAndModsToList(mod1Object, 'mod1', selectMod1);
// obj = the object to iterate over (ex- mod1Object)
// abv = the abbreviation of the object to match the HTML select lists
// menu = the MDCSelect menu const in mdcComponents.js
const addSymbolsAndModsToList = (obj, abv, menu = null) => {
  Object.keys(obj).forEach((key) => {
    const mdcList = document.querySelector(`.mdc-list.${abv}-list`);
    const newli = document.createElement('li');
    const modTypeInfo = document.createElement('em');
    modTypeInfo.setAttributeNS(null, 'class', `${abv}-type-info`);
    // Add the type of the Modifier in the drop down box
    modTypeInfo.textContent = obj[key].type.padEnd(15, '.');
    newli.setAttributeNS(null, 'class', 'mdc-list-item');
    newli.setAttributeNS(null, 'data-value', key);
    newli.textContent = key.toString();
    newli.prepend(modTypeInfo);
    mdcList.append(newli);
    const figureElement = document.createElement('figure');
    figureElement.setAttributeNS(null, 'class', `${abv}Figure`);
    // add the symbol key to the data-attr so they can match up with the list item
    figureElement.setAttributeNS(null, `data-${abv}-name`, `${key}`);
    newli.prepend(figureElement);
    // This will add the Symbols and Modifiers to the dropdown list
    switch (abv) {
      case 'mod1':
        // new MilSym(`.mod1Figure[data-mod1-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, 'none', `${key}`, 'None').placeSymbol();
        new MilSym(`.mod1Figure[data-mod1-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, undefined, `${key}`, undefined);
        break;
      case 'mod2':
        // new MilSym(`.mod2Figure[data-mod2-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, 'none', 'None', `${key}`).placeSymbol();
        new MilSym(`.mod2Figure[data-mod2-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, undefined, undefined, `${key}`);
        break;
      case 'commandpost':
        // return new MilSym(`.commandpostFigure[data-commandpost-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, 'none', 'None', 'None', '', '', '', false, false, false, false, `${key}`).placeSymbol();
        return new MilSym(`.commandpostFigure[data-commandpost-name="${key}"]`, `${selectSymbol.value}`, `${selectAffiliation.value}`, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, `${key}`);
      case 'symbol':
        // Set the selected symbol to "Default Land Unit" on page load
        selectSymbol.foundation_.setSelectedIndex(0);
        // Returning 'symbol' since we need to keep the symbol affiliation outlines
        // return new MilSym(`.symbolFigure[data-symbol-name="${key}"]`, `${key}`, `${selectAffiliation.value}`, 'none').placeSymbol();
        return new MilSym(`.symbolFigure[data-symbol-name="${key}"]`, `${key}`, `${selectAffiliation.value}`, undefined);
      default:
        break;
    }
    // This will remove the affiliation containers on the Modifier elements in the dropdown
    // ! Remember selectMod1 is a global var from mdcComponents.js -- Import it on production
    menu.menu_.items.map((key2) => {
      // This targets the Modifier element (eg- the moon symbol for "foraging")
      const modElement = key2.querySelectorAll('li figure svg g.outline path')[0];
      // This targets the SVG container for each Modifier element
      const modSVGContainer = modElement.parentElement.parentElement;
      // Set the affiliation outline background color to transparent, otherwise this will show a default land unit
      modElement.setAttributeNS(null, 'fill', 'transparent');
      // Set the affiliation outline stroke to 0
      modElement.setAttributeNS(null, 'stroke-width', '0');
      // Set the affiliation outline path to nothing
      modElement.setAttributeNS(null, 'd', '');
      // Set the SVG container viewBox to this value. (Note: Probably not needed)
      // modSVGContainer.setAttributeNS(null, 'viewBox', '80 55 40 20');
      // Scale the Modifier element down in the select box so they don't clip
      modSVGContainer.style.transform = 'scale(0.75)';
      // Set the selected index to the first item (usually this is "Default/None")
      menu.foundation_.setSelectedIndex(0);
    });
  });
};

// ex- new Resizer('.symbolFigure svg');  (default parameters set for thumbnails)
class Resizer {
  constructor(symbolElement, width = 93, height = 64) {
    this.symbolElement = document.querySelectorAll(symbolElement);
    this.width = width;
    this.height = height;
    this.symbolElement.forEach((key) => {
      key.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid'); // this is a default value I believe
      key.setAttributeNS(null, 'viewBox', `${key.getBBox().x - 4} ${key.getBBox().y - 4} ${key.getBBox().width + 8} ${key.getBBox().height + 8}`);
      key.setAttributeNS(null, 'width', `${this.width}`);
      key.setAttributeNS(null, 'height', `${this.height}`);
    });
  }
}

// ex- "new TransformModifiersOnEquipment('.newSVG > svg')"
// This should only be called on equipment symbols. This will scale down the decorator, and move Mod1 up and Mod2 down so they all fit in the circle
class TransformModifiersOnEquipment {
  constructor(equipmentOutline) {
    if (MainMS.type === 'Equipment') {
      this.equipmentOutline = document.querySelector(equipmentOutline); // The equipment SVG you want to readjust
      this.equipmentDecorator = this.equipmentOutline.querySelector('g.decorator');
      this.mod1 = this.equipmentOutline.querySelector('g.mod1');
      this.mod2 = this.equipmentOutline.querySelector('g.mod2');
      this.equipmentDecorator.style.transformOrigin = '100px 100px'; // transform from center of circle (cx, cy)
      this.equipmentDecorator.style.transform = 'translateY(2%) scale(0.75)';
      // mod1.style.transform = `translateY(-${equipmentOutline.viewBox.baseVal.x / equipmentOutline.viewBox.baseVal.y * 21}px)`;
      this.mod1.style.transformOrigin = '100px 100px';
      this.mod1.style.transform = 'translateY(-11%) scale(0.85)';
      this.mod2.style.transformOrigin = '100px 140px';
      this.mod2.style.transform = 'scale(0.85)';
    }
  }
}

// Toggle the bounceIn animation on the Unit Size, Mod 1 and Mod 2. Disabled for Equipment because TransformModifiersOnEquipment throws everything off
function bounceInAnimation(location) {
  if (MainMS.type !== 'Equipment') {
    const bounceIn = document.querySelector(location);
    // transformBox is crucial. Without this Mod1 will not scale from the center
    bounceIn.style.transformBox = 'fill-box';
    bounceIn.style.transformOrigin = 'center center';
    bounceIn.classList.toggle('bounceIn');
  }
}


window.MilSym = MilSym;
window.unitSizeObject = unitSizeObject;
window.affiliationOutlineObject = affiliationOutlineObject;
window.selectAffiliation = selectAffiliation;
window.militarySymbolsObject = militarySymbolsObject;
window.mod1Object = mod1Object;
window.mod2Object = mod2Object;
window.taskForceObject = taskForceObject;
window.commandPostObject = commandPostObject;

export {
  addSymbolsAndModsToList, Resizer, TransformModifiersOnEquipment, bounceInAnimation, MilSym,
};
