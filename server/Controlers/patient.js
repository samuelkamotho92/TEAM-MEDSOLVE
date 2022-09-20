const express = require('express');
const app = express();
const patientRegmodel = require('../Models/patientauth');
const sendEmail = require('../utilities/email');
const jwt = require('jsonwebtoken');
const cookieParser  = require("cookie-parser");
app.use(cookieParser());
const generateTk = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:  3*24*60*60
        });
}
const crypto = require('crypto');
const patientReg = async(req,resp)=>{
console.log(req.body);
const {name,email,password,passwordConfirm,role} = 
req.body;
const regPat = 
await patientRegmodel.create({name,email,password,
    passwordConfirm,role});
resp.status(200).json({
    status:'success',
    message:'user regestered succesfully'
})
console.log(regPat);
}
const patientLogin = async (req,resp)=>{
    try{
const {email,password} = req.body;
const getPatient = await patientRegmodel.login(email,password);
//pass the jwt
const jwtToken = generateTk(getPatient._id);
//pass it to the cookie
resp.cookie('patientCookie',jwtToken,{
    maxAge:process.env.COOKIE_EXPIRES*24*60*60*1000
})
resp.status(200).json({
            status:'success',
            message:"logged in succesfully",
            data:getPatient
        })
    }catch(err){
        resp.status(404).json({
            status:"error",
            err
        })
    }
}

const forgottenPassword  = async(req,resp)=>{
    let getPatient;
    try{
    const {email} = req.body;
    console.log(email);
    getPatient = await patientRegmodel.findOne({email});
    //generate token
    const getToken = await getPatient.resetToken();
    //save to database
    await getPatient.save({validateBeforeSave:false});
const resetUrl = 
`${req.protocol}://${req.get('host')}/medsolve/v1/patient/resetPassword/${getToken}`;
    const message = 
    `sorry,we heard you lost your password, don't worry click on the link to reset it: ${resetUrl}`
console.log('your email',getPatient.email)
    await sendEmail({
        email:getPatient.email,
        subject:'your reset token ,expires in the next 1hr (60min)',
        message:message
    })
    resp.status(200).json({
    status:'success',
    resetToken:getToken,
    message
})
    }catch(err){
// getPatient.passwordresetToken = undefined;
// getPatient.resetTokenexpires = undefined
await getPatient.save({validateBeforeSave:false});
resp.status(404).json({
    status:'error',
    err
})}
}

const resetPassword = async(req,resp)=>{
const tk = req.params.token
console.log(tk);
try{
    const hashToken = 
crypto.createHash('sha256').update(tk).digest('hex')
    const getPatient = 
   await patientRegmodel.findOne({
passwordresetToken:hashToken, 
resetTokenexpires:{$gt:Date.now()}});
console.log(getPatient);
if(getPatient){
    getPatient.password = req.body.password;
    getPatient.passwordConfirm = req.body.passwordConfirm;
    getPatient.resetTokenSetAt = Date.now();
    getPatient.passwordresetToken = undefined;
    getPatient.resetTokenexpires = undefined;
    await getPatient.save()
    resp.status(200).json({
    status:'success',
    message:'password updated succesfully'
})
}
}catch(err){
resp.status(404).json({
    status:"fail",
    err
})
}
}

const logOutpatient = (req,resp)=>{
resp.cookie("patientCookie","",{maxAge: 1 });
}

const getAllpatient = async (req,resp)=>{
    try{
        const allpatient = await patientRegmodel.find();
        resp.status(200).json({
            status:'success',
            message:'All patient regestered',
            data:allpatient
        })
    }catch(err){
resp.status(404).json({
    status:"failure",
  err
})
    }   
}

module.exports = 
{
patientReg,
patientLogin,
forgottenPassword,
resetPassword,
logOutpatient,
getAllpatient
};