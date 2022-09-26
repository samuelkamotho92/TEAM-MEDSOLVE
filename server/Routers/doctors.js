//import controler
const doctorcontrol = 
require('../Controlers/Doctors');
const express = require('express');
const doctorRoute = express.Router();
doctorRoute
.route('/uploadDoctorsdetails')
.post(doctorcontrol.uploadDoctor)
doctorRoute
.route('/getDoctordetails')
.get(doctorcontrol.getDoctor)
doctorRoute
.route('/updateDoctordetails/:id')
.patch(hospitalauthcontrol.updateDoctordetails)
doctorRoute
.route('/deleteDoctorDetails/:id')
.delete(hospitalauthcontrol.deleteDoctor)
module.exports = doctorRoute;