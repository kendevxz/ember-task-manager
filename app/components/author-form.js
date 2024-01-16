import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorFormComponent extends Component {
  @service store;

  name = '';

  @action
  handleNameChange(event) {
    this.name = event.target.value;
  }

  @action
  async saveAuthor(event) {
    event.preventDefault();

    const newAuthor = this.store.createRecord('author', {
      name: this.name,
    });

    await newAuthor.save();

    this.resetForm();

    if (typeof this.args.saveAuthor === 'function') {
      this.args.saveAuthor();
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
    this.name = '';
  }
}
