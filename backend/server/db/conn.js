const express = require('express');
const { default: mongoose } = require('mongoose');


const db = process.env.DATABASE;

const mongodb = () =>{mongoose.connect(db).then(()=>{
    console.log('connection has been made');
}).catch((err)=>{
    console.log(err);
});
}
module.exports = mongodb;