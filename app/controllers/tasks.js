// app/controllers/tasks.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TasksController extends Controller {
  @service store;

  @action
  async deleteTask(task) {
    try {
      // Delete the task using Ember Data
      await task.destroyRecord();
    } catch (error) {
      console.error('Error deleting task:', error.message);
    }
  }

  @action
  async createTask(newTask) {
    try {
      // Create a new task using Ember Data
      await this.store.createRecord('task', newTask).save();
    } catch (error) {
      console.error('Error creating task:', error.message);
    }
  }

  @action
  async updateTask(task, updatedTask) {
    try {
      // Update the task using Ember Data
      task.setProperties(updatedTask);
      await task.save();
    } catch (error) {
      console.error('Error updating task:', error.message);
    }
  }
}
