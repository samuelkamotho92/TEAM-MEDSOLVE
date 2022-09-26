const express = require('express');
const cors = require('cors');
const patientRoutes = require('./Routers/patientroutes');
const hospitalRoutes  = require('./Routers/hospitalroutes');
const serviceRoutes = require('./Routers/services');
const reportsRoutes = require('./Routers/reports');
;

const bodyparser = require("body-parser");
const app = express();
app.use(cors({origin:'http://localhost:3000',credentials:true}))
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(express.json());
app.get('/regsetermember',(req,resp)=>{
    resp.status(200).json({
        status:'success',
        message:"server is set"
    })
});
app.use('/medsolve/v1/patient',patientRoutes);
app.use('/medsolve/v1/hospital',hospitalRoutes);
app.use('/medsolve/v1/services',serviceRoutes);
app.use('/medsolve/v1/reports/',reportsRoutes);
module.exports = app;