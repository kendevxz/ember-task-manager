import { module, test } from 'qunit';

import { setupTest } from 'ember-task-manager/tests/helpers';

module('Unit | Serializer | author', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let serializer = store.serializerFor('author');

    assert.ok(serializer);
  });

  test('it serializes records', function (assert) {
    let store = this.owner.lookup('service:store');
    let record = store.createRecord('author', {});

    let serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
