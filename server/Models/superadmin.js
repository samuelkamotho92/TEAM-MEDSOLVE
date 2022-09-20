const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const Schema = mongoose.Schema;
const Adminschema = new Schema({
    name:{
        type:String,
        required:[true,'enter your username']
    },
    email:{
        type:String,
        required:[true,"please enter an email"],
        unique:[true,"please enter a unique email"],
        lowercase:true,
        validate:[isEmail,"Please enter a valid email"]  
    },
    password:{
        type:String,
        minlength:[8,'enter a minimum of 8 charcters']
    },
    role:{
        type:String,
        enum:["patient","admin","hospital"],
        default:"admin"
    },
})

const superAdminmodel = mongoose.model("superadmin",Adminschema);
module.exports = superAdminmodel;