import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
});

Router.map(function () {
  this.route('lists', { path: '/' }, function () {
    this.route('new-list');

    this.route('todo-list', { path: '/lists/:list_id' });
  });
});

export default Router;
