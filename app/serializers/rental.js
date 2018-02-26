import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  attrs: {
    user: { serialize: true }
  },

 // normalizeResponse(store, primaryModelClass, payload, id, requestType) {
 //    if (requestType === "findRecord" && payload.included && payload.included.length > 0) {
 //      payload.included.forEach((booking, index) => {
 //        payload.included[index].attributes.start_at = booking.attributes['start-at'];
 //        payload.included[index].attributes.end_at = booking.attributes['end-at'];
 //        delete payload.included[index].attributes['start-at'];
 //        delete payload.included[index].attributes['end-at'];
 //      });
 //    }

 //    return this._super(...arguments);
 //  },
});
