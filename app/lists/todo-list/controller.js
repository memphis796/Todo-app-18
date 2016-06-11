import Ember from 'ember';

export default Ember.Controller.extend({
  newReminder: {
    name: ``,
    done: false,
  },

  saveReminder(item, attr) {
    const reminder = this.store.createRecord(`reminder`, attr);
    reminder.set(`list`, item);

    reminder.save().then(() => {
      this.set(`newReminder`, {
        name: ``,
        done: false,
      });
    });
  },

  checkDone(reminder) {
    reminder.set(`done`);
    reminder.save();
  },

  deleteList(list) {
    list.destroyRecord();
    this.transitionToRoute(`lists`);
  },
});
