import Model from '@ember-data/model';
import { attr } from '@ember-data/model';

export default class AuthorModel extends Model {
  @attr('string') name;
}
