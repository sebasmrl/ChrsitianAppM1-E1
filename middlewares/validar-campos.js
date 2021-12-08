const { validationResult } = require('express-validator'); //validar el correoy demas


//Middleware personalizado
const validarCampos= (req, res, next)=>{
    const errors =validationResult(req);//acumula los errore de express-validator
    if(!errors.isEmpty()) return res.status(400).json(errors);

    next();
}

module.exports={
    validarCampos,
}