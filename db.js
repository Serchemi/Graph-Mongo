

const mongoose=require('mongoose')

const MONGODB_URI='mongodb+srv://sergio:1234@cluster0.cqy3p.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,    
})

.then(()=>{
    console.log('conectado')
}).catch(error =>{
   console.log('error', error.message, "asdsa")
})