const express = require('express');
const patientRoutes = require('./Routers/patientroutes');
const hospitalRoutes  = require('./Routers/hospitalroutes')
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(express.json());
app.get('/',(req,resp)=>{
    resp.status(200).json({
        status:'success',
        message:"server is set"
    })
});
app.use('/medsolve/v1/patient',patientRoutes);
app.use('/medsolve/v1/hospital',hospitalRoutes);
module.exports = app;