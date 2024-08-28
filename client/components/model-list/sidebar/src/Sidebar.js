/**
 * Component Sidebar is defined as
 * `<e-sidebar>`
 *
 * Imperatively create component
 * @example
 * let component = new Sidebar();
 *
 * Declaratively create component
 * @example
 * <e-sidebar></e-sidebar>
 *
 * @extends {LitComponent}
 */
import { definition } from '@eui/component';
import { LitComponent, html } from '@eui/lit-component';
import style from './sidebar.css';

/**
 * @property {boolean} propOne - show active/inactive state.
 * @property {boolean} propTwo - show active/inactive state.
 */
@definition('e-sidebar', {
  style,
  home: 'sidebar',
  props: {
    propOne: {
      attribute: true,
      type: 'boolean',
      default: true,
    },
    propTwo: {
      attribute: true,
      type: 'boolean',
    },
  },
})
export default class Sidebar extends LitComponent {
  /**
   * Render the <e-sidebar> component. This function is called each time a
   * prop changes.
   */
  render() {
    return html`
      <div class="sidebar-content">
        <eui-base-v0-text-field
          fullwidth
          class="search-field"
          placeholder="Start typing model name &hellip;"
          labeltext="Search in Model List"
        >
          <eui-v0-icon slot="icon" name="search"></eui-v0-icon>
        </eui-base-v0-text-field>
        <div class="filters">
          <h4>Filter by status</h4>
          <eui-base-v0-checkbox name="checkbox-running">Running</eui-base-v0-checkbox>
          <eui-base-v0-checkbox name="checkbox-available">Available</eui-base-v0-checkbox>
        </div>
      </div>
    `;
  }
}

/**
 * Register the component as e-sidebar.
 * Registration can be done at a later time and with a different name
 */
Sidebar.register();
