/* eslint-disable */
import {expect, should} from 'chai';
import {createElement, getRoot, setup, tearDown} from './utils';
import CssCustomProperties from '../src/index.js';

should();

describe('set',  () => {

  beforeEach(setup);

  afterEach(tearDown);

  it('should set properties on an element', () => {
    // Given
    const element = createElement('div');

    // When
    const result = CssCustomProperties.set({
      'a': 0.5,
      'b': '16px',
    }, element);

    // Then
    getComputedStyle(element).getPropertyValue('--a').should.equal('0.5');
    getComputedStyle(element).getPropertyValue('--b').should.equal('16px');
  });

  it('should set properties on root element by default', () => {
    // When
    const result = CssCustomProperties.set({
      'a': 1.5,
      'b': 'red',
    });

    // Then
    getComputedStyle(getRoot()).getPropertyValue('--a').should.equal('1.5');
    getComputedStyle(getRoot()).getPropertyValue('--b').should.equal('red');
  });

  it('should set prefixed properties on an element', () => {
    // When
    const result = CssCustomProperties.set({
      'a': 1,
      'b': '32px',
    });

    // Then
    getComputedStyle(getRoot()).getPropertyValue('--a').should.equal('1');
    getComputedStyle(getRoot()).getPropertyValue('--b').should.equal('32px');
  });

  it('should set single property', () => {
    // When
    const result = CssCustomProperties.set({
      'a': 0,
    });

    // Then
    getComputedStyle(getRoot()).getPropertyValue('--a').should.equal('0');
  });

  it('should set no properties', () => {
    // When
    const result = CssCustomProperties.set({});

    // Then
    CssCustomProperties.getAll().should.deep.equal({});
  });

  it('should fail silently if no element is provided', () => {
    // When
    const result = CssCustomProperties.set({
      'a': 4,
    }, null);

    // Then
    CssCustomProperties.getAll().should.deep.equal({});
    expect(result).to.be.undefined;
  });

  it('should fail silently if no collection is provided', () => {
    // When
    const result = CssCustomProperties.set(null);

    // Then
    CssCustomProperties.getAll().should.deep.equal({});
    result.should.deep.equal({});
  });

  it('should return custom properties that it just applied', () => {
    // When
    const result = CssCustomProperties.set({
      'a': 1,
      'b': '32px',
    });

    // Then
    result.should.deep.equal({
      'a': '1',
      'b': '32px',
    });
  });

});
