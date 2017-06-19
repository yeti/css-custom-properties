/* eslint-disable */
import {expect, should} from 'chai';
import {createElement, getRoot, setup, tearDown} from './utils';
import CssCustomProperties from '../src/index.js';

should();

describe('has',  () => {

  beforeEach(setup);

  afterEach(tearDown);

  it('should check if element has variable', () => {
    // Given
    const element = createElement('div');

    // When
    const result = CssCustomProperties.set({
      'a': 0.5,
      'b': '16px',
    }, element);

    // Then
    CssCustomProperties.has('a', element).should.be.true;
  });

  it('should check if element doesn\'t have variable', () => {
    // Given
    const element = createElement('div');

    // When
    const result = CssCustomProperties.set({
      'a': 0.5,
      'b': '16px',
    }, element);

    // Then
    CssCustomProperties.has('c', element).should.be.false;
  });

  it('should check root element by default', () => {
    // When
    const result = CssCustomProperties.set({
      'a': 0.5,
      'b': '16px',
    }, getRoot());

    // Then
    CssCustomProperties.has('a').should.be.true;
  });

  it('should return false if no variable is provided', () => {
    expect(CssCustomProperties.has(null)).to.be.false;
  });

  it('should return false if no element is provided', () => {
    expect(CssCustomProperties.has('a', null)).to.be.false;
  });

});
