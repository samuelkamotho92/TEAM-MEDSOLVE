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

hospitalRoute
.route('/resetPassword/:token')
.patch(hospitalauthcontrol.resetPassword)

hospitalRoute
.route('/getAllhospital')
.get(hospitalauthcontrol.getAllhospital)

hospitalRoute
.route('/getmyhospital')
.post(hospitalauthcontrol.getMyhospital)

module.exports = hospitalRoute;