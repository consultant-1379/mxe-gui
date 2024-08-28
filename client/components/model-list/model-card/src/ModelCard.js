/**
 * Component ModelCard is defined as
 * `<e-model-card>`
 *
 * Imperatively create component
 * @example
 * let component = new ModelCard();
 *
 * Declaratively create component
 * @example
 * <e-model-card></e-model-card>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import { LitComponent, html } from '@eui/lit-component';
import { Card } from '@eui/layout';
import { STATUS_PACKAGING, STATUS_RUNNING, STATUS_STOPPED } from 'utils/Enums';
import style from './modelCard.css';

/**
 * @property {boolean} propOne - show active/inactive state.
 * @property {boolean} propTwo - show active/inactive state.
 */
@definition('e-model-card', {
  style,
  home: 'model-card',
  props: {
    model: {
      attribute: false,
      type: 'object',
      default: null,
    },
  },
})
export default class ModelCard extends LitComponent {
  /**
   * Get status icon name according to the model status
   * @returns {string}
   */
  getStatusIcon() {
    switch (this.model.status) {
      case STATUS_RUNNING:
        return 'video-pause';
      case STATUS_STOPPED:
        return 'video-play';
      default:
        return 'video-play';
    }
  }

  isPackaging() {
    return this.model.status === STATUS_PACKAGING;
  }

  /**
   * Render the <e-model-card> component. This function is called each time a
   * prop changes.
   */
  render() {
    if (!this.model) {
      return '';
    }
    const { name, status, icon } = this.model;
    return html`
      <eui-layout-v0-card
        class="model-card ${this.isPackaging() ? 'packaging' : ''}"
        card-title="${name}"
        subtitle="${!this.isPackaging() ? status : ''}"
      >
        <div class="content" slot="content">
          <eui-v0-icon
            class="model-logo"
            size="${this.isPackaging() ? '55px' : '80px'}"
            name="${this.isPackaging() ? 'dial' : icon}"
          ></eui-v0-icon>
          <div class="text">Packaging is in progress</div>
        </div>

        <eui-v0-icon class="action" slot="action" name="${this.getStatusIcon()}"></eui-v0-icon>
      </eui-layout-v0-card>
    `;
  }
}

/**
 * Register the component as e-model-card.
 * Registration can be done at a later time and with a different name
 */
ModelCard.register();
