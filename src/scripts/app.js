// * IMPORT Symbol Objects * //
import affiliationOutlineObject from './symbolObjects/affiliationOutline';
import militarySymbolsObject from './symbolObjects/militarySymbols';
import unitSizeObject from './symbolObjects/unitSize';
import mod1Object from './symbolObjects/mod1';
import mod2Object from './symbolObjects/mod2';
import taskForceObject from './symbolObjects/taskForce';
import commandPostObject from './symbolObjects/commandPost';
import { flyingSwitch } from './index';


// * The star of the show * //
// Example 1: const symbol_1 = new MilSym('.test', 'Unmanned Aerial Surveillance', 'friendlyTemplated', 'team', 'Assault', 'Rail', 'A/2-101', '27/42ID', '+', false, true, true, true, 'Main Command Post');
// Example 2: const symbol_2 = new MilSym('.test', 'Weapon System - Grenade Launcher - Medium', 'friendly' );
// symbol_2.mod1 = 'Armored';
// symbol_2.placeSymbol();
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
      affiliation: this._affiliation,
      symbol: this._symbol,
      echelon: this._echelon,
      mod1: this._mod1,
      mod2: this._mod2,
      uniqueDesignation: this._uniqueDesignation,
      higherFormation: this._higherFormation,
      reinforcedReduced: this._reinforcedReduced,
      flying: this._flying,
      activity: this._activity,
      installation: this._installation,
      taskForce: this._taskForce,
      commandPost: this._commandPost,
      type: militarySymbolsObject[this._symbol].type,
    };
    return this.placeSymbol();
  }

  // *********************************************************************************** //
  // * SVG Location (which DOM element to put symbol in)                               * //
  // *********************************************************************************** //
  get location() {
    if (this._location) {
      return document.querySelector(this._location);
    }
    return undefined;
  }

  set location(value) {
    this._location = value;
  }

  // *********************************************************************************** //
  // * Base symbol (infantry, cavalry, etc)                                            * //
  // *********************************************************************************** //
  get symbol() {
    if (this._symbol) {
      const decoratorGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      decoratorGroup.classList.add('decorator');
      Object.keys(militarySymbolsObject[this._symbol].affiliation[this._affiliation]).forEach((key) => {
        const element = militarySymbolsObject[this._symbol].affiliation[this._affiliation][key];
        if (key.indexOf('path') === 0) {
          const decorator = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          //! FLYING DECORATOR ADJUSTMENT
          // This will adjust the DECORATOR of the symbol if its flying AND if it has a 'flying' object property
          if (this._flying && militarySymbolsObject[this._symbol].affiliation[this._affiliation].flying) {
            const flyingDecorator = militarySymbolsObject[this._symbol].affiliation[this._affiliation].flying[key];
            decorator.setAttributeNS(null, 'd', `${flyingDecorator.d}`);
          } else {
            // If the unit is not flying:
            decorator.setAttributeNS(null, 'd', `${element.d}`);
          }
          // If the default decorator fill is missing, default to none
          !element.fill ? decorator.setAttributeNS(null, 'fill', 'none') : decorator.setAttributeNS(null, 'fill', `${element.fill}`);
          // If the default decorator stroke is missing, default to black
          !element.stroke ? decorator.setAttributeNS(null, 'stroke', 'black') : decorator.setAttributeNS(null, 'stroke', `${element.stroke}`);
          // If the default decorator stroke-width is missing, default to 4
          !element.strokeWidth ? decorator.setAttributeNS(null, 'stroke-width', '4') : decorator.setAttributeNS(null, 'stroke-width', `${element.strokeWidth}`);
          // If the strokeLineJoin key does not exist, do nothing, otherwise set the strokeLinejoin value
          !element.strokeLinejoin ? null : decorator.setAttributeNS(null, 'stroke-linejoin', `${element.strokeLinejoin}`);
          // If the transform key does not exist, do nothing, otherwise set the transform value
          !element.transform ? null : decorator.setAttributeNS(null, 'transform', `${element.transform}`);
          // If the stroke dash array key does not exist, do nothing, otherwise set the stroke dasharray value
          !element.strokeDashArray ? null : decorator.setAttributeNS(null, 'stroke-dasharray', `${element.strokeDashArray}`);
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

  // *********************************************************************************** //
  // * Affiliation (friendly,hostile, etc)                                             * //
  // *********************************************************************************** //
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

      // Since Graphic Control Measures do not have an outline, we check it here and remove it
      if (this.type === 'Graphic Control Measure') {
        outline.setAttributeNS(null, 'd', '');
        outline.setAttributeNS(null, 'fill', '');
        outlineGroup.append(outline);
        // Removes the echelon data above the Equipment symbol.
        this.echelon = 'none';
        // Remove Mod1/2
        this.mod1 = undefined;
        this.mod2 = undefined;
        // Removes the Unique Designation about the Equipment symbol
        this.uniqueDesignation = undefined;
        // Removes the Higher Formation about the Equipment symbol
        this.higherFormation = undefined;
        // Removes the Reinforced/Reduced above the Equipment symbol
        this.reinforcedReduced = undefined;
        // Remove activity amplifier on Equipment symbol
        this.activity = undefined;
        // Remove installation amplifier on Equipment symbol
        this.installation = undefined;
        // Remove the task force above the Equipment symbol
        this.taskForce = undefined;
        // Remove command post amplifier on Equipment symbol
        this.commandPost = undefined;
        return outlineGroup;
      }

      // Since Tactical Mission Tasks do not have an outline, we check it here and remove it
      if (this.type === 'Tactical Mission Task') {
        outline.setAttributeNS(null, 'd', '');
        outline.setAttributeNS(null, 'fill', '');
        outlineGroup.append(outline);
        // Removes the echelon data above the Equipment symbol.
        this.echelon = 'none';
        // Remove Mod1/2
        this.mod1 = undefined;
        this.mod2 = undefined;
        // Removes the Unique Designation about the Equipment symbol
        this.uniqueDesignation = undefined;
        // Removes the Higher Formation about the Equipment symbol
        this.higherFormation = undefined;
        // Removes the Reinforced/Reduced above the Equipment symbol
        this.reinforcedReduced = undefined;
        // Remove activity amplifier on Equipment symbol
        this.activity = undefined;
        // Remove installation amplifier on Equipment symbol
        this.installation = undefined;
        // Remove the task force above the Equipment symbol
        this.taskForce = undefined;
        // Remove command post amplifier on Equipment symbol
        this.commandPost = undefined;
        return outlineGroup;
      }

      // Check if the symbol has the flightCapable property
      if (militarySymbolsObject[this._symbol].flightCapable) {
        flyingSwitch.disabled = false;
      } else {
        // Disable flying specifically otherwise land units will have flight outlines. For instance if you switched from UAV to Infantry
        this._flying = false;
        flyingSwitch.disabled = true;
        // Uncheck the flying switch if the symbol does not have flight capabilities
        flyingSwitch.checked = false;
      }

      // This adds the flying outline to the symbol... Not sure if this logic is elegant or not...
      const adjustSymbolOutlineForFlying = () => {
        // Removes the echelon data above the Equipment symbol.
        this.echelon = 'none';
        // Removes the Unique Designation about the Equipment symbol
        this.uniqueDesignation = undefined;
        // Removes the Higher Formation about the Equipment symbol
        this.higherFormation = undefined;
        // Removes the Reinforced/Reduced above the Equipment symbol
        this.reinforcedReduced = undefined;
        // Remove activity amplifier on Equipment symbol
        this.activity = undefined;
        // Remove installation amplifier on Equipment symbol
        this.installation = undefined;
        // Remove the task force above the Equipment symbol
        this.taskForce = undefined;
        // Remove command post amplifier on Equipment symbol
        this.commandPost = undefined;

        // Instead of using the 'd' key in affiliationOutlineObject, we will use the 'flying' key
        if (affiliationOutlineObject[this._affiliation].templated) {
          outline.setAttributeNS(null, 'd', `${element.flying}`);
          outline.setAttributeNS(null, 'fill', `${element.fill}`);
          outlineTemplated.setAttributeNS(null, 'd', `${element.flying}`);
          outlineTemplated.setAttributeNS(null, 'fill', `${element.fill_2}`);
          outlineTemplated.setAttributeNS(null, 'stroke', `${element.stroke_2}`);
          outlineTemplated.setAttributeNS(null, 'stroke-width', `${element.strokeWidth_2}`);
          outlineTemplated.setAttributeNS(null, 'stroke-dasharray', `${element.strokeDashArray_2}`);
          outlineGroup.append(outline, outlineTemplated);
          return outlineGroup;
        }
        outline.setAttributeNS(null, 'd', `${element.flying}`);
        outline.setAttributeNS(null, 'fill', `${element.fill}`);
        outlineGroup.append(outline);
        return outlineGroup;
      };

      const adjustSymbolOutlineForEquipment = () => {
        // Set echelon to 'none' for equipment.
        // If set to undefined then it throws weird errors when you search for a piece of equipment.
        // Then when you change symbol to a land unit and enable a task force it blows up... idk
        this.echelon = 'none';
        // Remove the Unique Designation about the Equipment symbol
        this.uniqueDesignation = undefined;
        // Remove the Higher Formation about the Equipment symbol
        this.higherFormation = undefined;
        // Remove the Reinforced/Reduced above the Equipment symbol
        this.reinforcedReduced = undefined;
        // Remove activity amplifier on Equipment symbol
        this.activity = undefined;
        // Remove installation amplifier on Equipment symbol
        this.installation = undefined;
        // Remove the task force above the Equipment symbol
        this.taskForce = undefined;
        // Remove command post amplifier on Equipment symbol
        this.commandPost = undefined;

        // For equipment: friendly and friendlyTemplated symbols are circular, whereas all other affiliations do not get special treatment
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

        // If the equipment icon is hostileTemplated or pending then add the stroke dasharray
        if (this._affiliation === 'hostileTemplated' || this._affiliation === 'pending') {
          outline.setAttributeNS(null, 'd', `${affiliationOutlineObject[this._affiliation].d}`);
          outline.setAttributeNS(null, 'fill', `${affiliationOutlineObject[this._affiliation].fill}`);
          const outline2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          outline2.setAttributeNS(null, 'd', `${affiliationOutlineObject[this._affiliation].d}`);
          outline2.setAttributeNS(null, 'fill', 'none');
          outline2.setAttributeNS(null, 'stroke', 'rgb(239, 239, 239)');
          outline2.setAttributeNS(null, 'stroke-width', '5');
          outline2.setAttributeNS(null, 'stroke-dasharray', '4,4');
          outlineGroup.append(outline, outline2);
          return outlineGroup;
        }

        // If the equipment symbol is Hostile, Unknown or Neutral then just use these
        outline.setAttributeNS(null, 'd', `${affiliationOutlineObject[this._affiliation].d}`);
        outline.setAttributeNS(null, 'fill', `${affiliationOutlineObject[this._affiliation].fill}`);
        outlineGroup.append(outline);
        return outlineGroup;
      };

      // Now the logic of it all. First we check if the symbol is templated. If it is then we check if its a piece of equipment or if its flying.
      // If for example the templated symbol is not a piece of equipment and is not flying then we just use the normal fills and dasharray
      switch (affiliationOutlineObject[this._affiliation].templated) {
        case true:
          // equipment PLUS flight enabled
          if (militarySymbolsObject[this._symbol].type === 'Equipment' && this._flying) {
            return adjustSymbolOutlineForFlying();
          }
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
          // equipment PLUS flight enabled
          if (militarySymbolsObject[this._symbol].type === 'Equipment' && this._flying) {
            return adjustSymbolOutlineForFlying();
          }
          // normal equipment outline, not in flight
          if (militarySymbolsObject[this._symbol].type === 'Equipment') {
            return adjustSymbolOutlineForEquipment();
          }
          // NOT equipment, land unit in flight
          if (this._flying) {
            return adjustSymbolOutlineForFlying();
          }
          // Most symbols will NOT be a piece of equipment, will NOT be flying, and will NOT be templated.
          // So these next 4 lines are what the bulk of the symbols use
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

  // *********************************************************************************** //
  // * Echelon (unit size)                                                             * //
  // *********************************************************************************** //
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

  // *********************************************************************************** //
  // * Modifier 1 (top of symbol)                                                      * //
  // *********************************************************************************** //
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

  // *********************************************************************************** //
  // * Modifier 2 (Bottom of symbol)                                                   * //
  // *********************************************************************************** //
  get mod2() {
    if (this._mod2) {
      const mod2Group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      const mod2Path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      mod2Group.classList.add('mod2');
      Object.keys(mod2Object[this._mod2].affiliation[this._affiliation]).forEach((key) => {
        const element = mod2Object[this._mod2].affiliation[this._affiliation][key];
        if (key.indexOf('path') === 0) {
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

        // Check if mod2Object has a mobility key present for the current Mod2 element and also if the symbol is a piece of equipment
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
              // Basically: Mod2 MOBILITY symbols on equipment go below the symbol. This is a special case.
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

  // *********************************************************************************** //
  // * Unique Designation Text                                                         * //
  // *********************************************************************************** //
  get uniqueDesignation() {
    if (this._uniqueDesignation) {
      const uniqueDesignationGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      uniqueDesignationGroup.classList.add('uniqueUnitDesignation');
      const uniqueDesignationText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      uniqueDesignationText.textContent = this._uniqueDesignation.toUpperCase();
      // x: getBBox().width + getBBox().y + 5 (5 is padding)
      uniqueDesignationText.setAttribute('x', '180');
      // y: getBBox().height + (24.5 - 2 * 0.333)
      // 24.5 = font size in pixels, 2 = half of the strokeWidth, 0.333 is 1/3rd of the symbol size; which gives you 7.493
      uniqueDesignationText.setAttribute('y', '107.493');
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

  // *********************************************************************************** //
  // * Higher Formation Text                                                           * //
  // *********************************************************************************** //
  get higherFormation() {
    if (this._higherFormation) {
      const higherFormationGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      higherFormationGroup.classList.add('higherUnitFormation');
      const higherFormationText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      higherFormationText.textContent = this._higherFormation.toUpperCase();
      higherFormationText.setAttribute('x', '180');
      higherFormationText.setAttribute('y', '150');
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

  // *********************************************************************************** //
  // * Reinforced/Reduced Modifier                                                     * //
  // *********************************************************************************** //
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

  // *********************************************************************************** //
  // * Flying Modifier                                                                 * //
  // *********************************************************************************** //
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

  // *********************************************************************************** //
  // * Activity Modifier                                                               * //
  // *********************************************************************************** //
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
    }
    return undefined;
  }

  set activity(value) {
    this._activity = value;
  }

  // *********************************************************************************** //
  // * Installation Modifier                                                           * //
  // *********************************************************************************** //
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

  // *********************************************************************************** //
  // * Task Force Modifier                                                             * //
  // *********************************************************************************** //
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

  // *********************************************************************************** //
  // * Command Post Modifier                                                           * //
  // *********************************************************************************** //
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

  // *********************************************************************************** //
  // * Puts the symbol into the DOM with dataset attribute                             * //
  // *********************************************************************************** //
  placeSymbol() {
    // Remove the old symbol from the DOM
    if (this.location.querySelector('svg')) {
      this.location.querySelector('svg').remove();
    }
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const desc = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
    desc.textContent = `
      Affiliation: ${this._affiliation.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
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
          // Select boxes return a value of "None" on page load instead of undefined. This is due to Material Design instantiating
          return this._echelon === 'none' ? undefined : this.echelon;
        case 'mod1':
          return this._mod1 === 'None' ? undefined : this.mod1;
        case 'mod2':
          return this._mod2 === 'None' ? undefined : this.mod2;
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
          return this._commandPost === 'None' ? undefined : this.commandPost;
        default:
          break;
      }
    });

    symbolValues.forEach((e) => {
      // Append all groups to the SVG that are NOT undefined
      if (e !== undefined) {
        svg.append(e);
      }
    });

    this.location.append(svg);

    const moreReadableAffiliation = () => {
      switch (this.type) {
        case 'Graphic Control Measure':
          // If the symbol is a GCM, then set the affiliation data to 'None'
          return 'None';
        case 'Tactical Mission Task':
          // If the symbol is a TMT, then set the affiliation data to 'None'
          return 'None';
        default:
          // If the symbol is literally anything other than a GCM/TMT then 'prettify' it
          // (eg- turns 'friendlyTemplated' into 'Friendly Templated')
          // Get the first letter of the affiliation string and upper case it, then combine it back to the rest of the string
          const affiliationString = this._affiliation.charAt(0).toUpperCase() + this._affiliation.slice(1);
          // Now add a space between the capitalized letters
          return affiliationString.match(/[A-Z][a-z]+/g).join(' ');
      }
    };

    // translates camel cased string (eg- "companyTroopBattery" into "Company/Troop/Battery")
    const moreReadableEchelon = (element) => {
      if (element !== undefined) {
        const str = element.charAt(0).toUpperCase() + element.slice(1);
        return str.match(/[A-Z][a-z]+/g).join('/');
      }
    };

    const moreReadableReinforcedReduced = (element) => {
      if (element !== undefined) {
        switch (element) {
          case '–':
            return 'Reduced (–)';
          case '+':
            return 'Reinforced (+)';
          case '±':
            return 'Reinforced & Reduced (±)';
          default:
            return 'None';
        }
      }
    };

    // Contains all the nicely formatted data for the MainMS dataset attribute
    const dataObj = {
      Symbol: this._symbol,
      Type: militarySymbolsObject[this._symbol].type,
      Affiliation: moreReadableAffiliation(),
      Echelon: this._echelon === 'none' ? 'None' : moreReadableEchelon(this._echelon),
      'Modifier 1': this._mod1,
      'Modifier 2': this._mod2,
      'Unique Designation': this._uniqueDesignation ? this._uniqueDesignation.toUpperCase() : 'None',
      'Higher Formation': this._higherFormation ? this._higherFormation.toUpperCase() : 'None',
      'Reinforced or Reduced': this._reinforcedReduced ? moreReadableReinforcedReduced(this._reinforcedReduced) : 'None',
      Flying: this._flying ? this._flying.toString().toUpperCase() : 'None',
      Activity: this._activity ? this._activity.toString().toUpperCase() : 'None',
      Installation: this._installation ? this._installation.toString().toUpperCase() : 'None',
      'Task Force': this._taskForce ? this._taskForce.toString().toUpperCase() : 'None',
      'Command Post': this._commandPost ? this._commandPost : 'None',
    };

    // This will go through the dataObj and remove anything that is set to 'None'
    const currentSymbolData = Object.keys(dataObj).reduce((object, key) => {
      dataObj[key] !== 'None' ? object[key] = dataObj[key] : null;
      return object;
    }, {});

    svg.setAttributeNS(null, 'data-symbol-info', JSON.stringify(currentSymbolData));
    svg.setAttributeNS(null, 'height', '100');
    svg.setAttributeNS(null, 'width', '150');
    svg.setAttributeNS(null, 'preserveAspectRatio', 'xMidYMid');

    // This is the old version of TransformModifiersOnEquipment
    // Only called on equipment symbols. This will scale down the decorator, and move Mod1 up and Mod2 down so they all fit in the circle
    if (militarySymbolsObject[this._symbol].type === 'Equipment') {
      try {
        const equipmentOutline = document.querySelector('.newSVG svg');
        const equipmentDecorator = equipmentOutline.querySelector('g.decorator');
        const mod1 = equipmentOutline.querySelector('g.mod1');
        const mod2 = equipmentOutline.querySelector('g.mod2');
        if (mod1) {
          equipmentDecorator.style.transformOrigin = '100px 100px'; // transform from center of circle (cx, cy)
          equipmentDecorator.style.transform = 'translateY(2%) scale(0.75)';
          mod1.style.transformOrigin = '100px 100px';
          mod1.style.transform = 'translateY(-9%) scale(0.85)';
        }
        if (mod2) {
          mod2.style.transformOrigin = '100px 140px';
          mod2.style.transform = 'scale(0.85)';
        }
      } catch (error) {
        setTimeout(() => {
          const equipmentOutline = document.querySelector('.newSVG svg');
          const equipmentDecorator = equipmentOutline.querySelector('g.decorator');
          const mod1 = equipmentOutline.querySelector('g.mod1');
          const mod2 = equipmentOutline.querySelector('g.mod2');
          if (mod1) {
            equipmentDecorator.style.transformOrigin = '100px 100px'; // transform from center of circle (cx, cy)
            equipmentDecorator.style.transform = 'translateY(2%) scale(0.75)';
            mod1.style.transformOrigin = '100px 100px';
            mod1.style.transform = 'translateY(-9%) scale(0.85)';
          }
          if (mod2) {
            mod2.style.transformOrigin = '100px 140px';
            mod2.style.transform = 'scale(0.85)';
          }
        }, 300);
      }
    }


    // Set the viewBox of the symbols. Without this they will be invisible
    const setViewBox = () => {
      // Manually setting the viewBox prevents the symbol from resizing when adding elements like echelon.
      switch (militarySymbolsObject[this._symbol].type) {
        case 'Graphic Control Measure':
          return svg.setAttributeNS(null, 'viewBox', '60 -60 80 160');
        case 'Land Unit':
          return svg.setAttributeNS(null, 'viewBox', '20 30 160 150');
        case 'Equipment':
          return svg.setAttributeNS(null, 'viewBox', '40 40 120 120');
        default:
          break;
      }
    };

    // If MainMS is in the window, then set the viewbox, otherwise wait 300ms
    'MainMS' in window ? setViewBox() : setTimeout(setViewBox, 300);
  }
}


export default MilSym;
