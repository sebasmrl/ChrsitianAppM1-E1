const express = require('express');
const cors = require('cors');
const { dbConenection } = require('../db/access');

class Server{

    constructor(){
        this.app=express();
        this.port= process.env.PORT;
        this.paths = {
            productos:  '/api/productos',
        };

        this.conectarDB();
        this.middlewares();
        this.routes();
    }
    
    
    async conectarDB(){
        await dbConenection();
    }
    

    middlewares(){
        
        // habilitar el CORS para todo servidor
        this.app.use(cors());

        //parseo del body
        this.app.use(express.json());

       
    }

    routes(){
        this.app.use(this.paths.productos, require('../routes/productos'));

        this.app.use(function(req, res, next) {
            res.status(404).send('Lo sentimos esta URL no es valida en este servicio');
          });
    }




    listen(){
        this.app.listen(this.port, () =>{ 
            console.log('listening on port '+this.port);
        })
    }

}


module.exports = Server;