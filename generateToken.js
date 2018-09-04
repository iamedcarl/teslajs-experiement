import tjs from 'teslajs';
import settings from './settings/local.json';

const generateToken = async () => {
  const {
    response,
    authToken,
    body
  } = await tjs.loginAsync(settings.username, settings.password);

  switch (response.statusCode) {
  case 200:
    console.log("Login Succesful!");
    return authToken;
  case 401:
    throw new Error('Login incorrect. Please double-check the e-mail and password.');
  default:
    throw new Error(`Unknown API response: ${response.statusCode} ${response.statusMessage}`);
  }
};

generateToken()
  .then(token => {
    console.log(token);
  })
  .catch(error => {
    console.log(error);
  });
