import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MyComponent extends Component {
  @action
  deleteTask(task) {
    task.destroyRecord();
  }
}
