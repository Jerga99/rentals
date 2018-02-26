import Ember from 'ember';
import Controller from '@ember/controller';
const { service } = Ember.inject;

export default Controller.extend({
  session: service('session'),
  isLoading: false,

   actions: {
    save(user){
      this.set('isLoading', true);
      user.save().then(
        () => {
          this.set('isLoading', false);
          this.transitionToRoute('login', {
            queryParams: { registered: 'true' }
          });
          // this.set('successMessage', "Successfuly registered, proceed to login. ");
        }).catch(reason => {
          this.set('isLoading', false);
          this.set('errorMessage', reason.errors || reason);
        });
      },
      test() {
        this.transitionToRoute('login', {
            queryParams: { registered: 'true' }
          });
      }
    }
  });



