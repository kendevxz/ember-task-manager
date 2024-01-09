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
    // Create a new task using Ember Data
    const newTask = this.store.createRecord('task', {
      title: this.title,
      description: this.description,
      status: this.status,
      dueDate: this.dueDate,
    });

    // Save the task to the server
    await newTask.save();

    // Reset form fields
    this.resetForm();

    // Trigger an action to notify the parent component or route
    this.args.saveTask();
  }

  @action
  cancel() {
    // Reset form fields
    this.resetForm();

    // Trigger an action to notify the parent component or route
    this.args.cancel();
  }

  resetForm() {
    this.title = '';
    this.description = '';
    this.status = 'todo';
    this.dueDate = null;
  }
}
