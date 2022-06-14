



'use strict'
const multer =require('multer')
const {multerConfig}=require('../utils/multerConfig')
const { type } = require("express/lib/response")
const { Query } = require("mongoose")
//const persona = require("../model/Person")
const person=require('../model/Person')
const req = require('express/lib/request')


const upload =multer(multerConfig).single('image')



exports.fileUpload=(req,res,next)=>{
  upload(req,res,function(error){
    if(error){
      res.json({message: error})
    }
    return next
  })

}


module.exports = {
 

    Query:{
      getPersona1:()=>{
        
        return person.find({})
      },
      getPersona:(root,args)=>{
        const {id}=args
        console.log(id)
        return person.findById(id)
        
      },
      getDelete:(root,args)=>{
        const {id}=args
        console.log(id)
        return person.findByIdAndDelete(id)
          
      }
    },
  
    Mutation:{ 
      addPerson: (root,args)=>{
        const persona=new person({...args})
        persona.image=args.file.filename
        return persona.save()
  
      }
    }
  }

  



