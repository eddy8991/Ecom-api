const mongoose =require('mongoose');

const productSchema = new mongoose.Schema({
title:{
  type:String,
  required:true,
  unique:true
},
description:{
  type:String,
  required:true,
  unique:true
},
img:{
  type:String,
  required:true
},
category:{
  type:Array
},
size:{
  type:string
},
color:{
type:string
},
price:{
  type:Number,
  required:true
},
  timestamps:true
});

module.exports = mongoose.model('product', productSchema)