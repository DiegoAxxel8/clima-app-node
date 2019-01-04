const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedAddres = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddres}&key=AIzaSyD926EAYIETDGuBkH1Op8FLS8DMQjdqmek`)

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad  ${ direccion}`);
    }

    let location = resp.data.results[0];

    return {
        direccion: location.formatted_address,
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
    }
}

module.exports = {
    getLugarLatLng
}