const mongoose = require('mongoose');
const {isEmail} = require('validator');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const Hospitalregschema = new Schema({
    name:{
        type:String,
        required:[true,'please enter your name']
    },
  organisationName:{
  type:String,
  required:[true,'please enter organisation name']
    },
    email:{
        type:String,
        required:[true,"please enter your organisation email"],
        unique:[true,"please enter a unique email"],
        lowercase:true,
        validate:[isEmail,"Please enter a valid email"]
    },
    location:{
        type:String,
        required:[true,"where is your hospital situated"]
    },
    password:{
        type:String,
        required:[true,'please enter your password'],
        minlength:[6,'please enter a minmum of 6 characters']
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
        default:"hospital"
    }
})

Hospitalregschema.pre("save",async function(next){
    if(!this.isModified("password")){
next()
    }
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password,salt);
    this.passwordConfirm = undefined;
    next();
})

Hospitalregschema.statics.login =
 async function (email,password) {
    const hospital = 
    await this.findOne({email}); 
    if(hospital)
    {
  const auth = await bcrypt.compare(password,hospital.password);
  if(auth){
 return hospital;
  }
  throw Error("incorrect password");
    }
    throw Error("incorrect email");
  }

const hospitalmodel = 
mongoose.model("hospitalregistration",Hospitalregschema);
module.exports = hospitalmodel;