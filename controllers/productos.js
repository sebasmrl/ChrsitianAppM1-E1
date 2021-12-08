const { response } = require('express');
const { Producto } = require('../models')


const getProductos = async(req, res=response) =>{
    const {limite=5, desde=0}=req.query;
    const queryCondition = {};
    //const queryCondition = {disponible:true};

    
      //para colocar las promesas en un arreglo y que ambas se ejcuten simultaneamente
      //destructuracion de arreglos
    const [registrosEnTotal, productos]= await Promise.all([   
        Producto.countDocuments(queryCondition),
        Producto.find(queryCondition) //en find envio un objeto con la condicion
                                //.populate('usuario','nombre')
                                //.populate('categoria','nombre')
                                .skip(Number(desde))
                                .limit(Number(limite))
    ]);

    res.status(200).json({
        registrosEnTotal,
        productos
    });

    //res.status(200).json([{},{}])
}

const getProducto = async(req, res) =>{
    const {id}=req.params;
    //no es necesario validar si existe el id pues hay un middleware en validar-campos.js que ya lo hace
    const producto =await Producto.findOne({codigo:id});        
    res.json(producto)
    //res.status(200).json({})
}

module.exports = {
    getProducto,
    getProductos
}