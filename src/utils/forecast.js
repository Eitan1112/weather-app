const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/c29e3308edc11129b775d224ad17bc7d/" +
    latitude +
    "," +
    longitude +
    "?units=si";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("No connection to weather services!", undefined);
    } else if (body.error) {
      callback("Unable to find location!", undefined);
    } else {
      callback(undefined, {
        summary: body.daily.data[0].summary,
        temperature: body.currently.temperature,
        rain: body.currently.precipProbability
      });
    }
  });
};

module.exports = forecast;
