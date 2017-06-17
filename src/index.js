// Libraries
import {forEach, set, startsWith} from './utils';

export default class CssCustomProperties {

  static get root() {
    return CssCustomProperties.getElement(':root');
  }

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

    forEach(element.style, (key, value) => {
      if (startsWith(value, '--')) {
        const variableName = value;

        set(
          all,
          CssCustomProperties.getAbbreviatedVariableName(variableName),
          CssCustomProperties.get(variableName, element)
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

    forEach(collection, (key, value) => {
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

  /* Helpers */

  static getElement(selector) {
    return document.querySelector(selector);
  }

  static getAbbreviatedVariableName(name = '') {
    return name.startsWith('--') ? name.slice(2) : name;
  }

  static getPrefixedVariableName(name = '') {
    return name.startsWith('--') ? name : `--${name}`;
  }
}

window.doof = CssCustomProperties;
