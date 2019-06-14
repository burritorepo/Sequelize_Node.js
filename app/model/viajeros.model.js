
module.exports = (sequelize, Sequelize) => {

    const Viajeros = sequelize.define('Viajeros', {

        uuid: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV1,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        apellidos: {
            type: Sequelize.STRING
        },
        edad: {
            type: Sequelize.INTEGER
        }
    });

    return Viajeros;
};
