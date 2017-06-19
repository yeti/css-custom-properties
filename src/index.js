// Libraries
import {forEach, isString, set, startsWith} from './utils';

export default class CssCustomProperties {

  /* Getters */

  static get root() {
    return CssCustomProperties.getElement(':root');
  }

  /* API */

  /**
   * This method gets a CSS variable's value on a DOM element.
   *
   * @param  {String} variable      The CSS variable name.
   * @param  {DOM Element} element  The DOM element to get the css variable from.
   *                                Defaults to the global :root element.
   * @return {*}                    The matched variable's value. Else undefined.
   */
  static get(variable, element = CssCustomProperties.root) {
    if (!element || !CssCustomProperties.isValidName(variable)) {
      return undefined;
    }

    const styles = getComputedStyle(element);
    const value = styles.getPropertyValue(CssCustomProperties.prefixVariableName(variable));

    const trimmedValue = value && value.trim();

    return trimmedValue && trimmedValue !== '' ? trimmedValue : undefined;
  }

  /**
   * This method gets all CSS variables on a DOM element.
   *
   * @param  {DOM Element} element  The DOM element to get the css variables from.
   *                                Defaults to the global :root element.
   * @return {*}                    The collection of CSS variable-value pairs. Else undefined.
   */
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
          CssCustomProperties.abbreviateVariableName(variableName),
          CssCustomProperties.get(variableName, element)
        );
      }
    });

    return all;
  }

  /**
   * This method checks if a CSS variable exists on a DOM element.
   *
   * @param  {String} variable      The CSS variable name.
   * @param  {DOM Element} element  The DOM element to check.
   *                                Defaults to the global :root element.
   * @return {Boolean}              True if CSS variable exists on element, else false.
   */
  static has(variable, element = CssCustomProperties.root) {
    return !!CssCustomProperties.get(variable, element);
  }

  /**
   * This method sets CSS variables on a DOM element.
   *
   * @param  {Object} collection    The collection of CSS variable-value pairs.
   * @param  {DOM Element} element  The DOM element to apply the css variable to.
   *                                Defaults to the global :root element.
   * @return {*}                    The collection of CSS variable-value pairs. Else undefined.
   */
  static set(collection, element = CssCustomProperties.root) {
    if (!element) {
      return undefined;
    }

    if (!collection) {
      return {};
    }

    const all = {};

    forEach(collection, (key, value) => {
      CssCustomProperties.setProperty(key, value, element);

      set(
        all,
        CssCustomProperties.abbreviateVariableName(key),
        CssCustomProperties.get(key, element)
      );
    });

    return all;
  }

  /**
   * This method sets a CSS variable on a DOM element.
   *
   * @param  {String} variable      The CSS variable name.
   * @param  {String} value         The CSS variable value.
   * @param  {DOM Element} element  The DOM element to apply the css variable to.
   *                                Defaults to the global :root element.
   * @return {*}                    The value of the CSS variable. Else undefined.
   */
  static setProperty(variable, value, element = CssCustomProperties.root) {
    if (!element || !CssCustomProperties.isValidName(variable)) {
      return undefined;
    }

    element.style.setProperty(CssCustomProperties.prefixVariableName(variable), value);

    return value;
  }

  /**
   * This method removes a CSS variable from a DOM element.
   *
   * @param  {String} variable      The CSS variable name.
   * @param  {DOM Element} element  The DOM element to remove the css variable from.
   *                                Defaults to the global :root element.
   * @return {*}                    The value of the removed CSS variable. Else undefined.
   */
  static unset(variable, element = CssCustomProperties.root) {
    if (!element || !CssCustomProperties.isValidName(variable)) {
      return undefined;
    }

    const value = CssCustomProperties.get(variable, element);

    CssCustomProperties.set({
      [variable]: null
    }, element);

    return value;
  }

  /**
   * This method removes all CSS variables from a DOM element.
   *
   * @param  {DOM Element} element  The DOM element to remove the css variables from.
   *                                Defaults to the global :root element.
   * @return {*}                    The collection of removed CSS variable-value pairs. Else undefined.
   */
  static unsetAll(element = CssCustomProperties.root) {
    if (!element) {
      return undefined;
    }

    const all = CssCustomProperties.getAll(element);

    forEach(all, (key, value) => {
      CssCustomProperties.unset(key, element);
    });

    return all;
  }

  /* Helpers */

  /**
   * Get DOM element from selector.
   *
   * @param  {String} selector  The selector to match against.
   * @return {DOM Element}      The matched element.
   */
  static getElement(selector) {
    return document.querySelector(selector);
  }

  /**
   * Trim the "--" prefix on a string, if it exists.
   *
   * @param  {String} name  The variable name to trim.
   * @return {String}       The trimmed variable name.
   */
  static abbreviateVariableName(name = '') {
    return name.startsWith('--') ? name.slice(2) : name;
  }

  /**
   * Add the "--" prefix on a string, if it is missing.
   *
   * @param  {String} name  The variable name to prefix.
   * @return {String}       The prefixed variable name.
   */
  static prefixVariableName(name = '') {
    return name.startsWith('--') ? name : `--${name}`;
  }

  /**
   * Checks if variable name is valid.
   *
   * @param  {String} name  The variable name to validate.
   * @return {Boolean}      True if valid.
   */
  static isValidName(name) {
    return isString(name);
  }
}
