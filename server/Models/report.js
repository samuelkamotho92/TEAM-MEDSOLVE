const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const  ReportsSchema = new Schema({
name:{
type:String,
required:[true,'enter name of your report']
},
date:{
    type:Date,
    required:[true,'please enter date of submission'],
},
status:{
    type:String,
    enum:['read','approved'],
    default:'pending'
}
})

const reportmodel = 
mongoose.model('reports',ReportsSchema);
module.exports = reportmodel;