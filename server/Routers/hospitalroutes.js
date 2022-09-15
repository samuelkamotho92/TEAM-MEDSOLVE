//import controler
const hospitalauthcontrol = 
require('../Controlers/hospital');
const express = require('express');
const hospitalRoute = express.Router();
hospitalRoute
.route('/signup')
.post(hospitalauthcontrol.hospitalReg)

hospitalRoute
.route('/login')
.post(hospitalauthcontrol.hospitalLogin)

hospitalRoute
.route('/resetToken')
.post(hospitalauthcontrol.forgottenPassword)
module.exports = hospitalRoute;