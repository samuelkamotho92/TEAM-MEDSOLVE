//import controler
const reportsControler = 
require('../Controlers/reports');
const express = require('express');
const doctorRoute = express.Router();
doctorRoute
.route('/uploadDoctorsdetails')
.post(reportsControler.uploadReport)
doctorRoute
.route('/getDoctordetails')
.get(reportsControler.getReports)
doctorRoute
.route('/updateDoctordetails/:id')
.patch(reportsControler.updateReport)
doctorRoute
.route('/deleteDoctorDetails/:id')
.delete(reportsControler.deleteReport)

module.exports = doctorRoute;