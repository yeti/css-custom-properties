/* eslint-disable */
import {expect, should} from 'chai';
import {createElement, getRoot, setup, tearDown} from './utils';
import CssCustomProperties from '../src/index.js';

should();

describe('get',  () => {

  beforeEach(setup);

  afterEach(tearDown);

  it('should get properties on an element', () => {
    // Given
    const element = createElement('div');

    // When
    const result = CssCustomProperties.set({
      'a': 0.5,
      'b': '16px',
    }, element);

    // Then
    CssCustomProperties.get('a', element).should.equal('0.5');
    CssCustomProperties.get('b', element).should.equal('16px');
  });

  it('should get properties on root element by default', () => {
    // When
    const result = CssCustomProperties.set({
      'a': 1.5,
      'b': 'red',
    });

    // Then
    CssCustomProperties.get('a').should.equal('1.5');
    CssCustomProperties.get('b').should.equal('red');
  });

  it('should get prefixed properties on an element', () => {
    // When
    const result = CssCustomProperties.set({
      'a': 1,
      'b': '32px',
    });

    // Then
    CssCustomProperties.get('--a').should.equal('1');
    CssCustomProperties.get('--b').should.equal('32px');
  });

  it('should fail silently if no element is provided', () => {
    // Then
    expect(CssCustomProperties.get('a', null)).to.be.undefined;
  });

  it('should fail silently if no variable is provided', () => {
    // Then
    expect(CssCustomProperties.get(null)).to.be.undefined;
  });

  it('should fail silently if a non-existant variable is provided', () => {
    // Then
    expect(CssCustomProperties.get('a')).to.be.undefined;
  });

});
