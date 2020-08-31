import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class TodoAppComponent extends Component {
  @tracked
  text = "";

  @action
  onChange(e) {
    this.text = e.target.value;
  }
}
