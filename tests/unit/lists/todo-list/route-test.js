import { moduleFor, test } from 'ember-qunit';

moduleFor('route:lists/todo-list', 'Unit | Route | lists/todo list', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
