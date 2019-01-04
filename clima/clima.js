const axios = require('axios');

const getClima = async(latitud, longitud) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=d4ea414d892c087df2a9ec59167d6595&units=metric`);

    let clima = resp.data.main.temp;

    return {
        clima: clima
    }
}

module.exports = {
    getClima
}