/**
 * Integration tests for <e-flow-catalogue>
 */
import { expect } from 'chai';
import { inShadow, injectHTMLElement } from 'test/utils';

import FlowCatalogue from '../FlowCatalogue';

describe('FlowCatalogue Application Tests', () => {
  let container;
  let inject;
  before(() => {
    container = document.body.appendChild(document.createElement('div'));
    inject = injectHTMLElement.bind(null, container);
    window.EUI = undefined; // stub out the locale
    FlowCatalogue.register();
  });

  after(() => {
    document.body.removeChild(container);
  });

  describe('Basic application setup', () => {
    it('should create a new <e-flow-catalogue>', async () => {
      const appUnderTest = await inject('<e-flow-catalogue></e-flow-catalogue>');
      // check shadow DOM
      const headingTag = inShadow(appUnderTest, 'h1');
      expect(headingTag.textContent, '"Your app markup goes here" was not found').to.equal(
        'Your app markup goes here'
      );
    });
  });
});
