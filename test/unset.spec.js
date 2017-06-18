/* eslint-disable */
import {expect, should} from 'chai';
import {createElement, setup, tearDown} from './utils';
import CssCustomProperties from '../src/index.js';

should();

describe('unset',  () => {

  beforeEach(setup);

  afterEach(tearDown);

  it('should unset properties on an element', () => {
    // Given
    const element = createElement('div');
    const result = CssCustomProperties.set({
      'a': 0.5,
      'b': '16px',
    }, element);

    // When
    CssCustomProperties.unset('a', element);

    // Then
    getComputedStyle(element).getPropertyValue('--a').should.equal('');
    getComputedStyle(element).getPropertyValue('--b').should.equal('16px');
  });

  it('should unset properties on root element by default', () => {
    // Given
    const root = document.querySelector(':root');
    const result = CssCustomProperties.set({
      'a': 0.5,
      'b': '16px',
    });

    // When
    CssCustomProperties.unset('a');

    // Then
    getComputedStyle(root).getPropertyValue('--a').should.equal('');
    getComputedStyle(root).getPropertyValue('--b').should.equal('16px');
  });

  it('should unset prefixed properties on an element', () => {
    // Given
    const root = document.querySelector(':root');
    const result = CssCustomProperties.set({
      'a': 0.5,
      'b': '16px',
    });

    // When
    CssCustomProperties.unset('--a');

    // Then
    getComputedStyle(root).getPropertyValue('--a').should.equal('');
    getComputedStyle(root).getPropertyValue('--b').should.equal('16px');
  });

  it('should unset all properties on the root element by default', () => {
    // Given
    const root = document.querySelector(':root');
    const result = CssCustomProperties.set({
      'a': 0.5,
      'b': '16px',
    });

    // When
    CssCustomProperties.unsetAll();

    // Then
    getComputedStyle(root).getPropertyValue('--a').should.equal('');
    getComputedStyle(root).getPropertyValue('--b').should.equal('');
  });

  it('should unset all properties on an element', () => {
    // Given
    const element = createElement('div');
    const result = CssCustomProperties.set({
      'a': 0.5,
      'b': '16px',
    }, element);

    // When
    CssCustomProperties.unsetAll(element);

    // Then
    getComputedStyle(element).getPropertyValue('--a').should.equal('');
    getComputedStyle(element).getPropertyValue('--b').should.equal('');
  });

  it('should unset no properties', () => {
    // Given
    const root = document.querySelector(':root');
    const result = CssCustomProperties.set({
      'a': 2,
      'b': 'red',
    });

    // When
    CssCustomProperties.unset(null);

    // Then
    getComputedStyle(root).getPropertyValue('--a').should.equal('2');
    getComputedStyle(root).getPropertyValue('--b').should.equal('red');
  });

  it('should fail silently if no element is provided', () => {
    // Given
    const root = document.querySelector(':root');
    const result = CssCustomProperties.set({
      'a': 2,
      'b': 'red',
    });

    // When
    CssCustomProperties.unset(null, null);
    CssCustomProperties.unsetAll(null);

    // Then
    getComputedStyle(root).getPropertyValue('--a').should.equal('2');
    getComputedStyle(root).getPropertyValue('--b').should.equal('red');
  });

  it('should return custom property that it just unset', () => {
    // Given
    CssCustomProperties.set({
      'a': 1,
      'b': '32px',
    });

    // When
    const result = CssCustomProperties.unset('a');

    // Then
    result.should.equal('1');
  });

  it('should return all custom properties that it just unset', () => {
    // Given
    CssCustomProperties.set({
      'a': 1,
      'b': '32px',
    });

    // When
    const result = CssCustomProperties.unsetAll();

    // Then
    result.should.deep.equal({
      'a': '1',
      'b': '32px',
    });
  });

});
