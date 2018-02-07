var axios = require('axios');

const OPEN_WHEATER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=58996d7edf2b05eafc28b6b04104aea6&units=metric';


module.exports = {
    getTemp: function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WHEATER_MAP_URL}&q=${encodedLocation}`;

        
        return axios.get(requestUrl).then(function (res) {
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }
            else{
                return res.data.main.temp;
            }
        }, function (res) {
            console.log(res);
            throw new Error(res.data.message);
        });

    }
};