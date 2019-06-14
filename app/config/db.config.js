const env = require('./env');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    //Desactivar el alias de objeto de base de datos por seguridad y evitar inyección
    operatorsAliases: false,
    pool: {
        max: env.pool.max,
        min: env.pool.min
        //acquire: env.pool.acquire,
        //idle: env.pool.idle
    }
});

// 
const db = {};

// Setear la DB con el modulo Sequelizee
db.Sequilize = Sequelize;
// Setear la db con los pametros de onexion de nuestro  env = entorno de conexión
db.sequilize = sequelize;
// Setear con el modelo de Viajeros
db.Viajeros = require('../model/viajeros.model')(sequelize, Sequelize);
// Setear con el modelo de Autobuses_Viajeros
db.Autobuses_Viajeros = require('../model/autobuses-viajeros.model')(sequelize, Sequelize);

// Relaciones entre los modelos
db.Autobuses_Viajeros.belongsTo(db.Viajeros,{foreignKey : 'fk_viajerosId', targetKey: 'uuid'});
db.Viajeros.hasOne

module.exports = db;