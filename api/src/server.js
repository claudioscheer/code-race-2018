const app = require('./config/appConfig');
const usuarioRoute = require('./routes/usuarioRoute');
const insumosRoute = require('./routes/insumosRoute');
const proprietariosRoute = require('./routes/proprietariosRoute');
const lotesRoute = require('./routes/lotesRoute');

app.get('/', (req, res) => {
    res.end('API Code Race.');
});

// Definição das rotas.
app.use('/usuario', usuarioRoute);
app.use('/insumos', insumosRoute);
app.use('/proprietarios', proprietariosRoute);
app.use('/lotes', lotesRoute);
