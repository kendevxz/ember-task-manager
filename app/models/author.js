import Model from '@ember-data/model';
import { attr, hasMany } from '@ember-data/model';

export default class AuthorModel extends Model {
  @attr('string') name;
  @hasMany('task', { async: false, inverse: null, foreignKey: 'authorId' }) tasks;
}
