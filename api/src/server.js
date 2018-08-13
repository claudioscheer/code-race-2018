const app = require('./config/appConfig');

app.get('/',function(request,response){
    response.end('API Code Race');
})

const userRoute = require('./routes/userRoute');

//Routes
app.use('/users',userRoute);