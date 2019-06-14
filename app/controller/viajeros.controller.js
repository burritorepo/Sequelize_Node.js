const db = require('../config/db.config');
const Viajeros = db.Viajeros;
const AutobusesViajeros = db.Autobuses_Viajeros;

// POST a Viajeros

exports.create = (req, res) => {
    // guardar en Mysql
    let viajeros;
    Viajeros.create({
        nombre: req.body.nombre,
        apellidos: req.body.apellidos
    }).then(createdViajero => {
        viajeros = createdViajero;
        res.send('OK');
    });
};