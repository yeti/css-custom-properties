/* eslint-disable */
import {expect, should} from 'chai';
import CssCustomProperties from '../src/index.js';

should();

describe('helpers',  () => {


  describe('prefix',  () => {


    it('should prefix strings', () => {
      expect(CssCustomProperties.prefix('hello')).to.equal('--hello');
      expect(CssCustomProperties.prefix('--hello')).to.equal('--hello');
    });

    it('should prefix objects', () => {
      expect(CssCustomProperties.prefix({
        'hello': 1,
        '--goodbye': 2
      })).to.deep.equal({
        '--hello': 1,
        '--goodbye': 2
      });
    });

    it('should prefix arrays', () => {
      expect(CssCustomProperties.prefix(['--hello', 'goodbye'])).to.deep.equal(['--hello', '--goodbye']);
    });

    it('should prefix nothing', () => {
      expect(CssCustomProperties.prefix(123)).to.equal(undefined);
      expect(CssCustomProperties.prefix(null)).to.equal(undefined);
    });

  });

  describe('unprefix',  () => {


    it('should unprefix strings', () => {
      expect(CssCustomProperties.unprefix('hello')).to.equal('hello');
      expect(CssCustomProperties.unprefix('--hello')).to.equal('hello');
    });

    it('should unprefix objects', () => {
      expect(CssCustomProperties.unprefix({
        'hello': 1,
        '--goodbye': 2
      })).to.deep.equal({
        'hello': 1,
        'goodbye': 2
      });
    });

    it('should unprefix arrays', () => {
      expect(CssCustomProperties.unprefix(['--hello', 'goodbye'])).to.deep.equal(['hello', 'goodbye']);
    });

    it('should unprefix nothing', () => {
      expect(CssCustomProperties.unprefix(123)).to.equal(undefined);
      expect(CssCustomProperties.unprefix(null)).to.equal(undefined);
    });

  });
});
