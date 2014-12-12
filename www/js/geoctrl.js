/**
* Created with class-app.
* User: carterggg
* Date: 2014-12-09
* Time: 02:47 AM
* To change this template use Tools | Templates.
*/

module.controller('GeoCtrl', function($cordovaGeolocation) {

  $cordovaGeolocation
    .getCurrentPosition()
    .then(function (position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
    }, function(err) {
      // error
    });

  // begin a watch
  var options = {
    frequency : 1000,
    timeout : 3000,
    enableHighAccuracy: true
  };

  var watch = $cordovaGeolocation.watchPosition(options);
  watch.promise.then(function()  { /* Not  used */ },
    function(err) {
      // error
    }, function(position) {
      var lat  = position.coords.latitude
      var long = position.coords.longitude
  });

  // clear watch
  $cordovaGeolocation.clearWatch(watch.watchId)
});

