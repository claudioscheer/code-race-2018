const app = require('./config/appConfig');
const usuarioRoute = require('./routes/usuarioRoute');

app.get('/', (req, res) => {
    res.end('API Code Race.');
});

// Definição das rotas.
app.use('/usuario', usuarioRoute);
