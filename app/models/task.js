import Model from '@ember-data/model';
import { attr, belongsTo } from '@ember-data/model';

export default class TaskModel extends Model {
  @attr('string') title;
  @belongsTo('author', { async: false, inverse: null, foreignKey: 'authorId' }) author;
  @attr('string') description;
  @attr('string') status;
  @attr('date') dueDate;
}
