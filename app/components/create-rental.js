import Component from '@ember/component';
const { service } = Ember.inject;
import { task } from 'ember-concurrency';

const { get, set } = Ember;

export default Component.extend({
  session: service('session'),
  selectedOption: null,
  imageName: "",

  communityPropertyTypes: [
  'Condo',
  'Townhouse',
  'Apartment'
  ],

   uploadPhoto: task(function * (file, newRental) {
    this.set('imageName', get(file, 'name'));
    file.readAsDataURL().then(function (url) {
      newRental.set('image', url);
    });
  }).maxConcurrency(3).enqueue(),

  actions: {
   setSelection: function(selected) {
      this.set('selectedOption', selected);
    },

    uploadImage(newRental, file) {
      get(this, 'uploadPhoto').perform(file, newRental);
    },

    createRental: function (newRental) {
      newRental.category = this.selectedOption;
      newRental.save().then(rental => {
        this.attrs.showRentalDetailsAction(rental.get('id'));
      }).catch(reason => this.set('errorMessage', reason.errors || reason));
    }
  }
});
