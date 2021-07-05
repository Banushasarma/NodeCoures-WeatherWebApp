const request = require('request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoic2hhcm1hdGVzdDAzIiwiYSI6ImNrcW5kZmUzMjAybHcyb3J3NzBlbjlidjIifQ.1C1g2RY0qOhFQSzy23cb9A&limit=1`
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect location service.', undefined);
        } else if (body.features.length == 0) {
            callback('Unable to find the location. Try again.', undefined);
        }
        else {
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode