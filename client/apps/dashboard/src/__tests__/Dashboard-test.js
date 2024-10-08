/**
 * Integration tests for <e-dashboard>
 */
import { expect } from 'chai';
import { inShadow, injectHTMLElement } from 'test/utils';

import Dashboard from '../Dashboard';

describe('Dashboard Application Tests', () => {
  let container;
  let inject;
  before(() => {
    container = document.body.appendChild(document.createElement('div'));
    inject = injectHTMLElement.bind(null, container);
    window.EUI = undefined; // stub out the locale
    Dashboard.register();
  });

  after(() => {
    document.body.removeChild(container);
  });

  describe('Basic application setup', () => {
    it('should create a new <e-dashboard>', async () => {
      const appUnderTest = await inject('<e-dashboard></e-dashboard>');
      // check shadow DOM
      const headingTag = inShadow(appUnderTest, 'h1');
      expect(headingTag.textContent, '"Your app markup goes here" was not found').to.equal(
        'Your app markup goes here'
      );
    });
  });
});
