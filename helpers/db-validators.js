const {Producto }= require('../models')


const existeProductoPorId= async(id)=>{
  
    let productoExiste;
    try {
      productoExiste= await Producto.findOne({codigo:id}); //va a buscar uno que tenga esta caracteristica
    } catch (error) {
        console.error("Error de casteo Producto")
      }
    //console.log('existeCategoria',categoriaExiste)
    if(!productoExiste){
        throw new Error(`El id: '${id}' no existe en la DB`); //asi funciona el express validator para lanzar un error personalizado
      }
  }

  module.exports = {
      existeProductoPorId
  }