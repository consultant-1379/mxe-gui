/**
 * Component MainContainer is defined as
 * `<e-main-container>`
 *
 * Imperatively create component
 * @example
 * let component = new MainContainer();
 *
 * Declaratively create component
 * @example
 * <e-main-container></e-main-container>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import { LitComponent, html } from '@eui/lit-component';
import 'components/model-list/model-card/src/ModelCard';
import 'components/model-list/sidebar/src/Sidebar';
import { boundMethod } from 'autobind-decorator';
import ModelService from 'services/ModelService';
import style from './mainContainer.css';

/**
 * Main container
 */
@definition('e-main-container', {
  style,
  home: 'main-container',
  props: {
    models: {
      attribute: false,
      type: 'array',
      default: [],
    },
  },
})
export default class MainContainer extends LitComponent {
  componentDidConnect() {
    ModelService.getModels().then((response) => {
      this.models = response;
    });
  }

  @boundMethod
  postModel() {
    ModelService.postModel({
      name: 'Video Streaming',
      status: 'Stopped',
      icon: 'graph-circle',
    }).then((response) => {
      this.models = response;
    });
  }

  /**
   * Render the <e-main-container> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <e-sidebar></e-sidebar>
      <eui-layout-v0-tile class="tile" tile-title="${this.models.length} models in the list">
        <div class="content" slot="content">
          ${this.models.map(
            (model) => html`
              <e-model-card class="model-card" .model="${model}"></e-model-card>
            `
          )}
        </div>
        <div slot="action">
          <span>Sort by &nbsp;</span>
          <eui-base-v0-dropdown label="Oldest to newest" data-type="click">
            <div menu-item tabindex="0">Action One</div>
            <div menu-item tabindex="0">Action Two</div>
          </eui-base-v0-dropdown>
          <eui-base-v0-button primary @click="${this.postModel}">Onboard model</eui-base-v0-button>
        </div>
      </eui-layout-v0-tile>
    `;
  }
}

/**
 * Register the component as e-main-container.
 * Registration can be done at a later time and with a different name
 */
MainContainer.register();
