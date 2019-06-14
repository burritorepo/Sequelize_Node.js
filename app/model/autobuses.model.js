module.exports = (sequelize, Sequelize) => {

    const Autobuses = sequelize.define('Autobuses', {

        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        ciudad_origen: {
            type: Sequelize.STRING
        },
        ciudad_destino: {
            type: Sequelize.STRING
        },
    });

    return Autobuses;
};