/**
 * Integration tests for <e-model-card>
 */
import { expect } from 'chai';
import '../ModelCard';
import { inShadow, injectHTMLElement, simulateEvent, nextTick } from 'test/utils';

describe('ModelCard Component Tests', () => {
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
    it('should create a new <e-model-card>', async () => {
      const customElement = await inject('<e-model-card></e-model-card>');
      // check shadow DOM
      const card = inShadow(customElement, 'eui-layout-v0-card');
      /* eslint-disable no-unused-expressions */
      expect(card).to.exist;
    });
  });
});
