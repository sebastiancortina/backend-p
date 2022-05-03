const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
           // useCreateIndex: true,
            //useFindAndModify: false
        })
        console.log("Base de datos Conectada");

    } catch(e){
        console.log(e);
        throw new Error('Error en la base de datos');
    }
}

module.exports = {
    dbConnection
}