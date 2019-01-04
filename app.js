const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async(direccion) => {

    try {
        let ubicacion = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(ubicacion.lat, ubicacion.lng);

        return `El temperatura en ${ubicacion.direccion} es ${temperatura.clima}`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }

}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));