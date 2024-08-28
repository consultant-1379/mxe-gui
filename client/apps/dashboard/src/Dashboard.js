/**
 * Dashboard is defined as
 * `<e-dashboard>`
 *
 * Imperatively create application
 * @example
 * let app = new Dashboard();
 *
 * Declaratively create application
 * @example
 * <e-dashboard></e-dashboard>
 *
 * @extends {App}
 */
import { definition } from '@eui/component';
import { App, html } from '@eui/app';
import style from './dashboard.css';

@definition('e-dashboard', {
  style,
})
export default class Dashboard extends App {
  /**
   * Render the <e-dashboard> app. This function is called each time a
   * prop changes.
   */
  render() {
    const { EUI } = window;
    return html`
      <h1>${(EUI && EUI.Localizer.loc.APP_DEFAULT_TEXT) || 'Your app markup goes here'}</h1>
    `;
  }
}
