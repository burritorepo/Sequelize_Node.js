module.exports = function (app) {
    const viajeros = require('../controller/viajeros.controller');

    // Crear un nuevo Viajero
    app.post('/api/viajeros', viajeros.create);
};