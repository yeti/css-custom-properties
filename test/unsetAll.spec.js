/* eslint-disable */
import {expect, should} from 'chai';
import {createElement, setup, tearDown} from './utils';
import CssCustomProperties from '../src/index.js';

should();

describe('unsetAll',  () => {

  beforeEach(setup);

  afterEach(tearDown);

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

  it('should unset non-existing property', () => {
    // When
    const result = CssCustomProperties.unset('--a');

    // Then
    expect(result).to.be.undefined;
  });

  it('should fail silently if no element is provided', () => {
    // Given
    const root = document.querySelector(':root');
    const result = CssCustomProperties.set({
      'a': 2,
      'b': 'red',
    });

    // When
    CssCustomProperties.unsetAll(null);

    // Then
    getComputedStyle(root).getPropertyValue('--a').should.equal('2');
    getComputedStyle(root).getPropertyValue('--b').should.equal('red');
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
      'a': 1,
      'b': '32px',
    });
  });

  it('should unset nothing', () => {
    // When
    const result = CssCustomProperties.unsetAll();

    // Then
    result.should.deep.equal({});
  });

});
