module.exports = (sequelize, Sequelize) => {

    const Autobuses_Viajeros = sequelize.define('Autobuses_Viajeros', {

        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        id_bus: {
            type: Sequelize.INTEGER
        },
        id_viajero: {
            type: Sequelize.INTEGER
        },
        fecha: {
            type: Sequelize.STRING
        },
    });

    return Autobuses_Viajeros;
};