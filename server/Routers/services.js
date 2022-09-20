const express = require('express');
const serviceCont = require('../Controlers/services');
const serviceRoute = express.Router();
serviceRoute
.route('/createService')
.post(serviceCont.uploadServices);

serviceRoute
.route('/getServices')
.post(serviceCont.getServices)


module.exports = serviceRoute;