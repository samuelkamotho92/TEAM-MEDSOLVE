const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ServiceSchema = new Schema({
hospitalemail:{
type:String,
required:[true,'hospital name should be made available']
},
nameService:{
    type:String,
    required:[true,'please enter the service'],
},
typeService:{
    type:String,
    required:[true,'please enter the type of service'],
    enum:['primary','specialised','sexual','reproductive','mental','addiction'],
    default:'primary'
},
consultation:{
    type:String,
},
consultationDates:{
    type:Date,
    default:Date.now()
},
serviceCharges:{
    type:String,
    required:[true,'please enter the disease charges']
},
consultationfee:{
    type:String,
    required:[true,'please enter the consultation charges']
}
})

const servicemodel = mongoose.model('hospitalService',ServiceSchema);
module.exports = servicemodel;