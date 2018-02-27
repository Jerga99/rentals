import RentalsController from '../rentals'

export default RentalsController.extend({
  actions: {
    submit(id) {
      debugger;
      this.transitionToRoute('rentals.show', id);
    }
  }
});
