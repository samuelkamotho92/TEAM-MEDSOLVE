const hospitalRegmodel = 
require('../Models/hospitalauth');
const sendEmail = require('../utilities/email');
const jwt = require('jsonwebtoken');
const express = require('express');
const crypto = require('crypto');
const app = express();
const cookieParser  = require("cookie-parser");
app.use(cookieParser());
const generateTk = (id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:  3*24*60*60
        });
}
const hospitalReg = async(req,resp)=>{
console.log(req.body);
const 
{name,
organisationName,  
email,location,password,passwordConfirm,role} = 
req.body;
const regHosp = 
await hospitalRegmodel.create({
    name,
    organisationName,
    email,
    location,
    password,
    passwordConfirm,role});
const jwtToken = generateTk(regHosp._id);
//pass it to the cookie
resp.cookie('hospitalCookie',jwtToken,{
maxAge:process.env.COOKIE_EXPIRES*24*60*60*1000
})
resp.status(200).json({
    status:'success',
    message:'hospital regestered succesfully',
    token:jwtToken
})
console.log(regHosp);
}

const hospitalLogin = async (req,resp)=>{
    try{
        const {email,password} = req.body;
const getHospital = await hospitalRegmodel.login(email,password);
const jwtToken = generateTk(getHospital._id);
//pass it to the cookie
resp.cookie('hospitalCookie',jwtToken,{
maxAge:process.env.COOKIE_EXPIRES*24*60*60*1000
})

resp.status(200).json({
            status:'success',
            message:"logged in succesfully",
            data:getHospital,
            token:jwtToken
        })
    }catch(err){
        resp.status(404).json({
            status:"error",
            err
        })
    }
}
const forgottenPassword  = async(req,resp)=>{
    let getHospital;
    try{
    const {email} = req.body;
    getHospital = 
    await hospitalRegmodel.findOne({email});
    console.log(getHospital,'my hospital');
    const getToken = await getHospital.resetToken();
    console.log(getToken);
    //save to database
    await getHospital.save({validateBeforeSave:false});
    const resetUrl = 
`${req.protocol}://${req.get('host')}/medsolve/v1/hospital/resetPassword/${getToken}`;
    const message = `sorry,we heard you lost your password, don't worry click on the link to reset it: ${resetUrl}`
    await sendEmail({
        email:getHospital.email,
        subject:'your reset token ,expires in the next 1hr (10min)',
        message:message
    })

    resp.status(200).json({
    status:'success',
    message:message,
    resetToken:getToken
})
    }catch(err){
        getHospital.passwordresetToken = undefined;
        getHospital.resetTokenexpires = undefined
    await getHospital.save({validateBeforeSave:false});
resp.status(404).json({
    status:'error',
    err
})}
}

const  resetPassword = async(req,resp)=>{
    const tk = req.params.token;
    console.log(tk);
try{
    const hashToken = crypto.createHash('sha256').update(tk).digest('hex');
    console.log(hashToken);
    const getHospital = 
   await hospitalRegmodel.findOne({
passwordresetToken:hashToken, 
resetTokenexpires:{$gt:Date.now()}});
console.log(getHospital)
if(getHospital){
    getHospital.password = req.body.password;
    getHospital.passwordConfirm = req.body.passwordConfirm;
    getHospital.resetTokenSetAt = Date.now();
    getHospital.passwordresetToken = undefined;
    getHospital.resetTokenexpires = undefined;
    await getHospital.save();
    const jwtToken = generateTk(getHospital._id);
//pass it to the cookie
resp.cookie('hospitalCookie',jwtToken,{
maxAge:process.env.COOKIE_EXPIRES*24*60*60*1000
})
    resp.status(200).json({
        status:'success',
        message:'password updated succesfully',
        jwtToken
    })
}
}catch(err){
resp.status(404).json({
status:"fail",
err
})
}
}
const logOuthospital = (req,resp)=>{
resp.cookie("hospitalCookie","",{maxAge: 1 });
}

const getAllhospital = async (req,resp)=>{
    try{
        const allHospital = await hospitalRegmodel.find();
        resp.status(200).json({
            status:'success',
            message:'All hospital regestered',
            data:allHospital
        })
    }catch(err){
resp.status(404).json({
    status:"failure",
  err
})
}   
}

//filter all hospital depending with location
const getMyhospital = async(req,resp)=>{
    const {location} = req.body;
    try
    {
const getnearHospital =  await hospitalRegmodel.find({location:location});
console.log(getnearHospital);
resp.status(200).json({
    status:'success',
    message:'hospital located near you include',
    hospitals:getnearHospital
})
    }catch(err){
resp.status(404).json({
    status:'error',
    message:"no hospital found",
    err
})
    }
console.log(req.query);
}
//group hospital depending with location 

//add services and connect it with the already set hospital id
const uploadServices = async(req,resp)=>{
console.log(req.body);

}


module.exports = 
{hospitalReg,
hospitalLogin,
forgottenPassword,
resetPassword,
logOuthospital,
getAllhospital,
getMyhospital
};