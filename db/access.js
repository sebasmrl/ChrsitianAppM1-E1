const mongoose =require('mongoose');



const dbConenection = async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_ATLAS,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
           // useCreateIndex:true,
            //useFindAndModify: false //false
        });
        console.log('------Base de datos online');
    }catch(error){
        console.error(error);
        throw new Error('Error a la hora de iniciar la base de datos')
    }
}//dbConnection end




module.exports={
    dbConenection
}