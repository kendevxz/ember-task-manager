import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class AuthorsController extends Controller {
  @service store;

  @action
  async deleteAuthor(author) {
    try {
      await author.destroyRecord();
    } catch (error) {
      console.error('Error deleting author:', error.message);
    }
  }

  @action
  async createAuthor(newAuthor) {
    try {
      await this.store.createRecord('author', newAuthor).save();
    } catch (error) {
      console.error('Error creating author:', error.message);
    }
  }

  @action
  async updateAuthor(author, updatedAuthor) {
    try {
      author.setProperties(updatedAuthor);
      await author.save();
    } catch (error) {
      console.error('Error updating author:', error.message);
    }
  }
}
