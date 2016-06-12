import Ember from 'ember';

export default Ember.Controller.extend({
  newReminder: {
    name: ``,
    done: false,
  },

  saveReminder(list, attr) {
    const reminder = this.store.createRecord(`reminder`, attr);
    reminder.set(`list`, list);

    reminder.save().then(() => {
      this.set(`newReminder`, {
        name: ``,
        done: false,
      });
    });
  },

  checkDone(reminder, done) {
    reminder.set(`done`, !done);
    reminder.save();
  },

  deleteList(reminder) {
    reminder.destroyRecord();
    this.transitionToRoute(`lists`);
  },

  deleteModel(reminder) {
    reminder.destroyRecord();
  },
});
