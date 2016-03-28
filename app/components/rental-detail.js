import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    update(rental, params) {
      this.sendAction('update', rental, params);
    },
    delete(rental) {
      if (confirm('Are you sure you wanna delete this rental?')) {
        this.sendAction('delete', rental);
      }
    }
  }
});
