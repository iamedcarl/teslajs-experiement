import tjs from 'teslajs';
import settings from './settings/local.json';

let options = {};

// const generateToken = () => {
//
// };

tjs.login(settings.username, settings.password, (err , result) => {
  if (result.error) {
    console.log(JSON.stringify(result.error));
    return false;
  }

  const token = JSON.stringify(result.authToken);

  if (token) {
    console.log("Login Succesful!");
    options['authToken'] = result.authToken;

    tjs.vehiclesAsync(options).done(function(vehicle) {
      console.log("[Vehicle] ", vehicle);
      options['vehicleID'] = vehicle.id;

      tjs.vehicleDataAsync(options).done(function(vehicleData) {
        console.log("[Vehicle Data] ", vehicleData);
      });
    });
  }
});
