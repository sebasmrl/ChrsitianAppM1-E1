const { Schema, model } =require('mongoose');


const ProductoSchema =Schema({
    codigo: {
        type: Number,
        required: [true, 'El codigo es obligatorio'],
        unique:true
    },
    nombre:{
        type: String,
        default:'No name',
        required:true
    },
    stock:{
        type: Number,
        ref: 'Usuario',
        required: true
    },
    disponible:{ type: Boolean, default:true },
    precio:{
        type:Number,
        default:0
    },
   

});

//sobreescribir toJson
ProductoSchema.methods.toJSON =function(){
    const{__v, ...data} = this.toObject(); //genera mi instancia con sus valores respectivos como si fuera un objeto lteral
    return data;
}




module.exports= model('Producto', ProductoSchema);