const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=cee8893665bcc1814ed0daaacbbad2dd&query=${longitude},${latitude}`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect weather service.', undefined);
        }
        else if (body.error) {
            callback('Unable to find location.', undefined);
        }
        else {
            callback(undefined, `${body.current.weather_descriptions}. It is curently ${body.current.temperature} degrees out. There is a ${body.current.precip} chance of rain.`)
        }
    })
}

module.exports = forecast