
'use strict'


const{ makeExecutableSchema} = require('@graphql-tools/schema')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')// Middleware de graphql

const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')
const app = express()
const port = process.env.port || 4000
const db=require('./db.js')

const {ApolloServer,gpl}=require("apollo-server-express")


  const type = gpl `
    type Query{
      saludo:String
    }
    type Mutacion{
      singleUpñoad(file: upload): String
    }
  `

  const resol ={
    Query:{
      saludo:()=>{
        return "saludo"
      }
    },
    Mutacion: {
      singleUpñoad:()=>{
        return "single"
      }
    }
  }
  
const server=new ApolloServer({typeDefs: type, resolvers:resol});

server.applyMiddleware({app})
app.listen({port: 4000}, ()=>{
  console.log('Servidor graphql en esl puerto 4000 ${server.gra}')
})

//import persona from './model/persona.js'
// definiendo el esquema

const cors =require("cors");
const corsOptions={
  origin:'*',
  Credential: true,
  optionSuccessStatus:200,
}
const typeDefs = readFileSync(
 
  join(__dirname, 'lib', 'schema.graphql'),
  'utf-8'
)



//* Incorpora el schema desde donde se encuentra
//* Configura los resolvers para que la query sí regrese información
const schema = makeExecutableSchema({ typeDefs, resolvers })
app.use('/api', graphqlHTTP({
  schema,
  rootValue: resolvers,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`Server running on port ${port}/api`);
});