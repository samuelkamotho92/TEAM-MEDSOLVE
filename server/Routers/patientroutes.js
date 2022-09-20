//import controler
const patientauthcontrol = require('../Controlers/patient');
const express = require('express');
const patientRoute = express.Router();
patientRoute
.route('/signup')
.post(patientauthcontrol.patientReg);

patientRoute
.route('/login')
.post(patientauthcontrol.patientLogin);

patientRoute
.route('/resetToken')
.post(patientauthcontrol.forgottenPassword);

patientRoute
.route('/resetPassword/:token')
.patch(patientauthcontrol.resetPassword);

patientRoute
.route('/getAllpatient')
.get(patientauthcontrol.getAllpatient);



module.exports = patientRoute;