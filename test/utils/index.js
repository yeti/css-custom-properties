/* eslint-disable */
import CssCustomProperties from '../../src/index.js';

let body;

export const setup = () => {
  body = document.body.cloneNode(true);
};

export const tearDown = () => {
  document.body = body;
  CssCustomProperties.unsetAll();
};

export const createElement = (tag = 'div') => {
  const element = document.createElement(tag);
  document.body.appendChild(element);
  return element;
}

export const getRoot = () => {
  return document.querySelector(':root');
}
