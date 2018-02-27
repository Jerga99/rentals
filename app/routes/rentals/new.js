import Route from '@ember/routing/route';
import AuthenticatedRoute from '../authenticated';

export default AuthenticatedRoute.extend({
  model() {
    const user = this.get('store').createRecord('user');
    return this.get('store').createRecord('rental', {user: user});
  }
});
