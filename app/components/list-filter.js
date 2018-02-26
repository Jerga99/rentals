import Component from '@ember/component';
const { service } = Ember.inject;

export default Component.extend({
  classNames: ['list-filter'],
  value: '',
  utils: service('booking-utils'),

  init() {
    this._super(...arguments);
    this.get('filter')('').then((allResults) =>
      this.set('results', this.get('utils').orderResults(allResults.results)));
  },

  actions: {
    handleFilterEntry() {
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => {
        if (filterResults.query === this.get('value')) {
         this.set('results', this.get('utils').orderResults(filterResults.results));
        }
      });
    }
  }
});
