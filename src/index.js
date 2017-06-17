// Libraries
import _ from 'lodash';

export default class CssCustomProperties {

  static get(variable, element = CssCustomProperties.root) {
    if (!element) {
      return undefined;
    }

    const styles = getComputedStyle(element);
    const value = styles.getPropertyValue(CssCustomProperties.getPrefixedVariableName(variable));

    return value ? value.trim() : undefined;
  }

  static getAll(element = CssCustomProperties.root) {
    if (!element) {
      return undefined;
    }

    const all = {};

    _.forEach(element.style, (variable, key) => {
      if (variable.startsWith('--')) {
        _.set(
          all,
          CssCustomProperties.getAbbreviatedVariableName(variable),
          CssCustomProperties.get(variable, element)
        );
      }
    });

    return all;
  }

  static has(variable, element = CssCustomProperties.root) {
    return !!CssCustomProperties.get(variable, element);
  }

  static set(collection, element = CssCustomProperties.root) {
    if (!element) {
      return undefined;
    }

    _.forEach(collection, (value, key) => {
      CssCustomProperties.setProperty(key, value, element);
    });

    return collection;
  }

  static setProperty(variable, value, element = CssCustomProperties.root) {
    if (!element) {
      return undefined;
    }

    element.style.setProperty(CssCustomProperties.getPrefixedVariableName(variable), value);

    return value;
  }

  static unset(variable, element = CssCustomProperties.root) {
    if (!element) {
      return undefined;
    }

    const value = CssCustomProperties.get(variable, element);

    CssCustomProperties.set({
      [variable]: null
    }, element);

    return value;
  }

  static getElement(selector) {
    return document.querySelector(selector);
  }

  static get root() {
    return CssCustomProperties.getElement(':root');
  }

  static getAbbreviatedVariableName(name = '') {
    return name.startsWith('--') ? name.slice(2) : name;
  }

  static getPrefixedVariableName(name = '') {
    return name.startsWith('--') ? name : `--${name}`;
  }
}

window.doof = CssCustomProperties;
