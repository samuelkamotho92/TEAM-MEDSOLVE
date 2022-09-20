const express = require('express');
const adminControl = require('../Controlers/superadmin')
const adminRoute = express.Router();
adminRoute
.route('/login')
.post(adminControl.logAdmin);

adminRoute
.route('/resetToken')
.post(adminControl.forgottenPassword)

adminRoute
.route('/resetPassword/:token')
.patch(adminControl.resetPassword)