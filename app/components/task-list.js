import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MyComponent extends Component {
  @tracked taskToEdit = null;

  @action
  deleteTask(task) {
    task.destroyRecord();
  }

  @action
  editTask(task) {
    this.taskToEdit = task;
  }

  @action
  async saveTask(event) {
    event.preventDefault();

    try {
      await this.taskToEdit.save();
      this.taskToEdit = null;
    } catch (error) {
      // Handle the error
      console.error(error);
    }
  }

  @action
  handleTitleChange(event) {
    this.taskToEdit.title = event.target.value;
  }

  @action
  handleAuthorChange(event) {
    // Assuming this.taskToEdit.author is an object with an 'id' property
    this.taskToEdit.author.id = event.target.value;
  }

  @action
  handleDescriptionChange(event) {
    this.taskToEdit.description = event.target.value;
  }

  @action
  handleStatusChange(event) {
    this.taskToEdit.status = event.target.value;
  }

  @action
  handleDueDateChange(event) {
    this.taskToEdit.dueDate = event.target.value;
  }

  @action
  cancel() {
    this.taskToEdit = null;
  }
}
