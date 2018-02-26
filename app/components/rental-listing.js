import Component from '@ember/component';

export default Component.extend({
  isWide: false,
  itemsPerRow: 3,

  actions: {
    toggleImageSize() {
      this.toggleProperty('isWide');
    }
  }
});
