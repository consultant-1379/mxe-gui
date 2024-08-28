/**
 * FlowCatalogue is defined as
 * `<e-flow-catalogue>`
 *
 * Imperatively create application
 * @example
 * let app = new FlowCatalogue();
 *
 * Declaratively create application
 * @example
 * <e-flow-catalogue></e-flow-catalogue>
 *
 * @extends {App}
 */
import { definition } from '@eui/component';
import { App, html } from '@eui/app';
import style from './flowCatalogue.css';

@definition('e-flow-catalogue', {
  style,
  props: {
    response: { attribute: false },
  },
})
export default class FlowCatalogue extends App {
  /**
   * Uncomment this block to add initilaization code
   * constructor() {
   *   super();
   *   // initialize
   * }
   */

  /**
   * Render the <e-flow-catalogue> app. This function is called each time a
   * prop changes.
   */
  render() {
    const { EUI } = window;
    return html`
      <h1>${(EUI && EUI.Localizer.loc.APP_DEFAULT_TEXT) || 'Your app markup goes here'}</h1>
    `;
  }
}

/**
 * Register the component as e-flow-catalogue.
 * Registration can be done at a later time and with a different name
 * Uncomment the below line to register the App if used outside the container
 */
// FlowCatalogue.register();
