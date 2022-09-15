const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const Patientregschema = new Schema({
    name:{
        type:String,
        required:[true,'please enter your name']
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
        required:[true,"please enter a password"],
        minlength:[8,"please enter 8 or more character"]
    },
    passwordConfirm:{
        type:String,
        required:[true,"please enter password confirm"],
        validate:{
            validator:function(el){
                return el === this.password
            },
            message:`Enter the correct password confirmation`
        }
    },
    role:{
        type:String,
        enum:["patient","admin","hospital"],
        default:"patient"
    }
})
Patientregschema.pre("save",async function(next){
    if(!this.isModified("password")){
next()
    }
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    this.passwordConfirm = undefined;
    next();
})
Patientregschema.statics.login = async function (email,password) {
    const patient = await this.findOne({email}); 
    if(patient)
    {
  const auth = await bcrypt.compare(password,patient.password);
  if(auth){
 return patient;
  }
  throw Error("incorrect password");
    }
    throw Error("incorrect email");
  }
const patientmodel = 
mongoose.model("patientregistration",Patientregschema);
module.exports = patientmodel;