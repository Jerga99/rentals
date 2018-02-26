import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const user = this.get('store').createRecord('user');
    return this.get('store').createRecord('rental', {user: user});
  }
});
