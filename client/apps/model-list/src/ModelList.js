/**
 * ModelList is defined as
 * `<e-model-list>`
 *
 * Imperatively create application
 * @example
 * let app = new ModelList();
 *
 * Declaratively create application
 * @example
 * <e-model-list></e-model-list>
 *
 * @extends {App}
 */
import { definition } from '@eui/component';
import { App, html } from '@eui/app';
import style from './modelList.css';
import 'components/model-list/main-container/src/MainContainer';

@definition('e-model-list', {
  style,
})
export default class ModelList extends App {
  /**
   * Render the <e-model-list> app. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <e-main-container></e-main-container>
    `;
  }
}
