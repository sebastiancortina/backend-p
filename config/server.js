require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');
const { routersBanner, 
    routersFooter, 
    routersItemBanner, 
    routersPage,  
    routersPageContent, 
    routersPost, 
    routersRol, 
    routersProfile, 
    routersUser, 
    routersRolPermission,
    routersPermissions,
    routersSite } = require('../routes/index.routes');


class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.Path = {
            site:'/api/site',
            bannersPath: '/api/banner',
            footerPath: '/api/footer',
            itembanner : '/api/itembanner',
            page:'/api/page',
            pageContent:'/api/pageContent',
            post:'/api/post',
            //--------- usuarios --------//
            rol:'/api/rol',
            profile:'/api/profile',
            user:'/api/user',
            rolPermission: '/api/rolPermission',
            permissions: '/api/permissions'
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
        //site
        this.app.use(this.Path.site ,  routersSite );

        //page
        this.app.use(this.Path.page ,  routersPage);

        //footer
        this.app.use(this.Path.footerPath , routersFooter);

        //pageContent
        this.app.use(this.Path.pageContent ,   routersPageContent);

        //post
        this.app.use(this.Path.post , routersPost);

        // banner
        this.app.use(this.Path.bannersPath , routersBanner);

        //itembanner
        this.app.use(this.Path.itembanner , routersItemBanner);

        //-----------------------------------------------------------//

        //Rol
        this.app.use(this.Path.rol, routersRol);

        //profile
        this.app.use(this.Path.profile, routersProfile);

        //user
        this.app.use(this.Path.user, routersUser);

        //rolPermission
        this.app.use(this.Path.rolPermission, routersRolPermission );

        //permissions
        this.app.use(this.Path.permissions, routersPermissions );


        


    }

    listen(){
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en puerto',  this.port);
        });
    }
}

module.exports = Server;

