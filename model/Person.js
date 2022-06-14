const {mongoose,model}=require( "mongoose")

const schemaPersona = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minlength:5
    },

    telefono:{
        type:String,
        required:true
    },
    image:{
        type:String
    },

    calle:{
        type:String,
        required:true
    },
    
    

})

const persona= model("Person",schemaPersona);
module.exports=persona;