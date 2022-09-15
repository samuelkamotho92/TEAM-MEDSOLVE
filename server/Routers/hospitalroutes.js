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

module.exports = hospitalRoute;