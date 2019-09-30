/* eslint-disable no-underscore-dangle */
// ex- var j = new MS('.test', 'Unmanned Aerial Surveillance', 'friendlyTemplated', 'team', 'Assault', 'Rail', 'A/2-101', '27/42ID', '+', false, true, true, true, 'Main Command Post')
class MS {
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
        switch (affiliationOutlineObject[this._affiliation].templated) {
          case true:
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
          case false:
            const outline0 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            outline0.setAttributeNS(null, 'cx', '100');
            outline0.setAttributeNS(null, 'cy', '100');
            outline0.setAttributeNS(null, 'r', '60');
            outline0.setAttributeNS(null, 'fill', 'rgb(128,224,255)');
            outline0.setAttributeNS(null, 'stroke', 'black');
            outline0.setAttributeNS(null, 'stroke-width', '4');
            outlineGroup.append(outline0);
            return outlineGroup;
          default:
            break;
        }
      };

      switch (affiliationOutlineObject[this._affiliation].templated) {
        case true:
          if (this.type === 'Equipment') {
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
          if (this.type === 'Equipment') {
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
      mod2Group.classList.add('mod2');
      Object.keys(mod2Object[this._mod2].affiliation[this._affiliation]).forEach((key) => {
        const element = mod2Object[this._mod2].affiliation[this._affiliation][key];
        if (key.indexOf('path') === 0) {
          const mod2Path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
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
    this.location.querySelector('svg') ? this.location.querySelector('svg').remove() : console.log('No SVG Found');
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
  }
}
