import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class TaskFormComponent extends Component {
  @service store;

  @tracked title = '';
  @tracked author = null;
  @tracked description = '';
  @tracked status = 'to-do';
  @tracked dueDate = null;
  @tracked authors = [];

  constructor() {
    super(...arguments);
    this.loadAuthors();
  }

  async loadAuthors() {
    this.authors = await this.store.findAll('author');
  }
  @action
  handleTitleChange(event) {
    this.title = event.target.value;
  }

  @action
  handleAuthorChange(event) {
    const authorId = event.target.value;
    const author = this.store.peekRecord('author', authorId);

    this.author = author;
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
    this.dueDate = event.target.value ? new Date(event.target.value) : null;
  }

  @action
  async saveTask(event) {
    event.preventDefault();

    try {
      // Save the author first
      await this.author.save();

      // Create and save the task
      const newTask = this.store.createRecord('task', {
        title: this.title,
        author: this.author,
        description: this.description,
        status: this.status,
        dueDate: this.dueDate,
      });

      await newTask.save();

      this.resetForm();

      if (typeof this.args.saveTask === 'function') {
        this.args.saveTask();
      }
    } catch (error) {
      console.error('Error saving task:', error);
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
    console.log('Resetting form...');
    this.title = '';
    this.author = null;
    this.description = '';
    this.status = 'to-do';
    this.dueDate = null;
  }
}
