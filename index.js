import tjs from 'teslajs';

tjs.logoutAsync(<INSERT TOKEN HERE>)
  .done(result => {
    console.log("Logged out!");
  });
// tjs.vehiclesAsync(options).done(function(vehicle) {
//   console.log("[Vehicle] ", vehicle);
//   options['vehicleID'] = vehicle.id;
//
//   tjs.vehicleDataAsync(options).done(function(vehicleData) {
//     console.log("[Vehicle Data] ", vehicleData);
//   });
// });
