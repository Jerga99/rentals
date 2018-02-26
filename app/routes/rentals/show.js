import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.get('store').findRecord('rental', params.rental_id, {include: 'user,bookings'});
  },

  setupController: function(controller, model) {
    this._super(controller, model);
      controller.set('model', model);
  }
});
