const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./app/config/db.config');

db.sequilize.sync({ force: true }).then(() => {
    console.log('Deleting and syncronizing tables');
});

require('./app/route/viajeros.route')(app);

const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Servidor en el ${host}, ${port}`)
});
