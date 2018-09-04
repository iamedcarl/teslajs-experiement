import tjs from 'teslajs';
import settings from './settings/local.json';

const username = settings.username;
const password = settings.password;

tjs.login(username, password, function(err, result) {
  if (result.error) {
    console.log(JSON.stringify(result.error));
    process.exit(1);
  }

  const token = JSON.stringify(result.authToken);

  if (token) {
    console.log("Login Succesful!");
  }
});
