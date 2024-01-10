import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TaskFormComponent extends Component {
  @service store;

  title = '';
  description = '';
  status = 'todo';
  dueDate = null;

  @action
  async saveTask() {
    const newTask = this.store.createRecord('task', {
      title: this.title,
      description: this.description,
      status: this.status,
      dueDate: this.dueDate,
    });

    await newTask.save();

    this.resetForm();

    this.args.saveTask();
  }

  @action
  cancel() {
    this.resetForm();

    this.args.cancel();
  }

  resetForm() {
    this.title = '';
    this.description = '';
    this.status = 'todo';
    this.dueDate = null;
  }
}
