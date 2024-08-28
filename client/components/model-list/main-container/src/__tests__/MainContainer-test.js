/**
 * Integration tests for <e-main-container>
 */
import { expect } from 'chai';
import '../MainContainer';
import { inShadow, injectHTMLElement, simulateEvent, nextTick } from 'test/utils';

describe('MainContainer Component Tests', () => {
  let container;
  let inject;
  before(() => {
    container = document.body.appendChild(document.createElement('div'));
    inject = injectHTMLElement.bind(null, container);
  });

  after(() => {
    document.body.removeChild(container);
  });

  describe('Basic component setup', () => {
    it('should create a new <e-main-container>', async () => {
      const customElement = await inject('<e-main-container></e-main-container>');
      // check shadow DOM
      /* eslint-disable no-unused-expressions */
      expect(customElement).to.exist;
    });
    describe('Create components', () => {
      it('should create new <e-sidebar>', async () => {
        const customElement = await inject('<e-main-container></e-main-container>');
        const sidebar = inShadow(customElement, 'e-sidebar');
        // check shadow DOM
        /* eslint-disable no-unused-expressions */
        expect(sidebar).to.exist;
      });
      it('should create new <eui-layout-v0-tile>', async () => {
        const customElement = await inject('<e-main-container></e-main-container>');
        const tile = inShadow(customElement, 'eui-layout-v0-tile');
        // check shadow DOM
        /* eslint-disable no-unused-expressions */
        expect(tile).to.exist;
      });
    });
  });
});
