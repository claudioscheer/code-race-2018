const app = require('./config/appConfig');
const userRoute = require('./routes/userRoute');

app.get('/', (req, res) => {
    res.end('API Code Race.');
});

// Definição das rotas.
app.use('/users', userRoute);
