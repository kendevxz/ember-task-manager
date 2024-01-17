import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TasksController extends Controller {
  @service store;

  @action
  deleteTask(task) {
    console.log('Deleting task:', task);
    task
      .destroyRecord()
      .then(() => console.log('Task deleted successfully'))
      .catch((error) => console.error('Error deleting task:', error.message));
  }

  @action
  async createTask(newTask) {
    try {
      await this.store.createRecord('task', newTask).save();
    } catch (error) {
      console.error('Error creating task:', error.message);
    }
  }

  @action
  async updateTask(task, updatedTask) {
    try {
      task.setProperties(updatedTask);
      await task.save();
    } catch (error) {
      console.error('Error updating task:', error.message);
    }
  }
}
