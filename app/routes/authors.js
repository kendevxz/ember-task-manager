import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class TasksRoute extends Route {
  @service store;

  model() {
    console.log('Checking store:', this.store);

    if (this.store) {
      return this.store.findAll('author');
    } else {
      console.error('Store is undefined!');
      return [];
    }
  }
}
