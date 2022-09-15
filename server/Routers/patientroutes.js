//import controler
const patientauthcontrol = require('../Controlers/patient');
const express = require('express');
const patientRoute = express.Router();
patientRoute
.route('/signup')
.post(patientauthcontrol.patientReg)

patientRoute
.route('/login')
.post(patientauthcontrol.patientLogin)
module.exports = patientRoute;