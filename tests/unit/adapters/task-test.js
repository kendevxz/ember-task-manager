import { module, test } from 'qunit';

import { setupTest } from 'ember-task-manager/tests/helpers';

module('Unit | Adapter | task', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:task');
    assert.ok(adapter);
  });
});
