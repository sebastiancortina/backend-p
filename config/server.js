require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
const { routersBanner, routersFooter, routersItemBanner, routersPage,  routersPageContent } = require('../routes/routers/index.routes');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.Path = {
           // bannersPath : '/api/banner',
            menusPath : '/api/menu',
            WebpagesPath : '/api/webpages',
            WebsitesPath : '/api/websites',
            ItembannersPath : '/api/itembanner',
            //-------- new rutas -----------
            bannersPath: '/api/banner',
            footerPath: '/api/footer',
            itembanner : '/api/itembanner',
            page:'/api/page',
            pageContent:'/api/pageContent'
        }

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
        //this.app.use(this.Path.bannersPath , routersBanner);

        // menu
        //this.app.use(this.Path.menusPath , routersMenu);

        //webpages
        //this.app.use(this.Path.WebpagesPath , routersWebpages);
        
        //websites
        //this.app.use(this.Path.WebsitesPath , routerWebsites);
        //itembanner
        //this.app.use(this.Path.ItembannersPath, routerItembanner);

        //---------------------------------------------------------------
        
        // banner
        this.app.use(this.Path.bannersPath , routersBanner);

        //footer
        this.app.use(this.Path.footerPath , routersFooter);

        //itembanner
        this.app.use(this.Path.itembanner , routersItemBanner);

        //page
        this.app.use(this.Path.page ,  routersPage);

        //pageContent
        this.app.use(this.Path.pageContent ,   routersPageContent);

        
    }

    listen(){
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en puerto',  this.port);
        });
    }
}

module.exports = Server;

