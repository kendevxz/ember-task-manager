import EmberRouter from '@ember/routing/router';
import config from 'ember-task-manager/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');
  this.route('tasks');
  this.route('authors');
});
