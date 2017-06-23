/* eslint-disable */
import {expect, should} from 'chai';
import {createElement, getRoot, setup, tearDown} from './utils';
import CssCustomProperties from '../src/index.js';

should();

describe('getAll',  () => {

  beforeEach(setup);

  afterEach(tearDown);

  it('should get all properties on an element', () => {
    // Given
    const element = createElement('div');

    // When
    const result = CssCustomProperties.set({
      'a': 0.5,
      'b': '16px',
    }, element);

    // Then
    CssCustomProperties.getAll(element).should.deep.equal({
      'a': 0.5,
      'b': '16px',
    });
  });

  it('should get properties on root element by default', () => {
    // When
    const result = CssCustomProperties.set({
      'a': 1.5,
      'b': 'red',
    }, CssCustomProperties.root);

    // Then
    CssCustomProperties.getAll().should.deep.equal({
      'a': 1.5,
      'b': 'red',
    });
  });

  it('should get all prefixed properties on an element', () => {
    // When
    const result = CssCustomProperties.set({
      'a': 2,
      'b': 'blue',
    }, CssCustomProperties.root);

    // Then
    CssCustomProperties.getAllPrefixed().should.deep.equal({
      '--a': 2,
      '--b': 'blue',
    });
  });

  it('should get no properties on an element', () => {
    // Then
    CssCustomProperties.getAllPrefixed().should.deep.equal({});
  });

  it('should fail silently if no element is provided', () => {
    // Then
    expect(CssCustomProperties.getAll(null)).to.be.undefined;
  });

  it('should fail silently if no element is provided', () => {
    // Then
    expect(CssCustomProperties.getAllPrefixed(null)).to.be.undefined;
  });

});
