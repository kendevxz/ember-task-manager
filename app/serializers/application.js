import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    const normalized = super.normalizeResponse(
      store,
      primaryModelClass,
      payload,
      id,
      requestType,
    );
    return normalized;
  }
}
