const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const  DoctorsSchema = new Schema({
name:{
type:String,
required:[true,'Doctors name']
},
specialisation:{
    type:String,
    required:[true,'please enter your specialization'],
},
status:{
    type:String,
    enum:['available','not available'],
    default:'available'
},
email:{
    type:String,
    required:[true,'please enter your  email']
},
phoneNumber:{
    type:Number,
    required:[true,'please enter your phoneNumber']
}
})

const doctormodel = 
mongoose.model('doctorsauth',DoctorsSchema);
module.exports = doctormodel;