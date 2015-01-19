import Ember from 'ember';
var abstractMapMixin;

abstractMapMixin = Ember.Mixin.create({

  lat: (function() {
    return this.get("model." + (this.get('latAttr')));
  }).property(),
  setLat: function(value) {
    return this.get('model').set(this.get('latAttr'), value);
  },
  latAttr: (function() {
    return this.get("model." + (this.get('mapType')))[0];
  }).property(),
  long: (function() {
    return this.get("model." + (this.get('longAttr')));
  }).property(),
  longAttr: (function() {
    return this.get("model." + (this.get('mapType')))[1];
  }).property(),
  setLong: function(value) {
    return this.get('model').set(this.get('longAttr'), value);
  },
  zoom: (function() {
    return this.get("model." + (this.get('zoomAttr'))) || 8;
  }).property(),
  zoomAttr: (function() {
    return this.get("model." + (this.get('mapType')))[2];
  }).property(),
  setZoom: function(value) {
    return this.get('model').set(this.get('zoomAttr'), value);
  },
  centerCoords: function() {
    if (this.get('lat') && this.get('long')) {
      return [this.get('lat'), this.get('long')];
    } else {
      return ["50.44067063154785", "30.52654266357422"];
    }
  },
  setAttrs: function(lat, long) {
    this.setLat(lat);
    return this.setLong(long);
  }
});

export default abstractMapMixin;
