require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config')


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/banner';

        // Conectar a base de datos
        this.conectarDB();

        // middlewares
        this.middlewares();
        
        // Rutas de mi aplicacion 
        this.route();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Parseo y lectura del body
        this.app.use(express.json());

        //Directorio publico
        this.app.use(express.static('public'));
    }

    route(){

        // banner
        this.app.use(this.usuariosPath, require('../routes/banner'));
        

    }

    listen(){
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en puerto',  this.port);
        });
    }
}

module.exports = Server;
