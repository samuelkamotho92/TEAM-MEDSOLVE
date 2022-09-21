const express = require('express');
const serviceCont = require('../Controlers/services');
const serviceRoute = express.Router();
serviceRoute
.route('/createService')
.post(serviceCont.uploadServices);

serviceRoute
.route('/getServices')
.post(serviceCont.getServices)

serviceRoute
.route('/updateService/:id')
.patch(serviceCont.updateService)

serviceRoute
.route('/deleteService/:id')
.delete(serviceCont.deleteService)

module.exports = serviceRoute;