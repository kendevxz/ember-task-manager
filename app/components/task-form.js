import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TaskFormComponent extends Component {
  @service store;

  title = '';
  description = '';
  status = 'to-do';
  dueDate = null;

  @action
  handleTitleChange(event) {
    this.title = event.target.value;
  }

  @action
  handleDescriptionChange(event) {
    this.description = event.target.value;
  }

  @action
  handleStatusChange(event) {
    this.status = event.target.value;
  }

  @action
  handleDueDateChange(event) {
    // Parse the date value from the input
    this.dueDate = event.target.value ? new Date(event.target.value) : null;
  }

  @action
  async saveTask(event) {
    event.preventDefault();

    const newTask = this.store.createRecord('task', {
      title: this.title,
      description: this.description,
      status: this.status,
      dueDate: this.dueDate,
    });

    await newTask.save();

    this.resetForm();

    if (typeof this.args.saveTask === 'function') {
      this.args.saveTask();
    }
  }

  @action
  cancel() {
    this.resetForm();

    if (typeof this.args.cancel === 'function') {
      this.args.cancel();
    }
  }

  resetForm() {
    this.title = '';
    this.description = '';
    this.status = 'to-do';
    this.dueDate = null;
  }
}
