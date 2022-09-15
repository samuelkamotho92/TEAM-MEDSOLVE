const patientRegmodel = require('../Models/patientauth');
const sendEmail = require('../utilities/email');
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
    try{
    const {email} = req.body;
    const getPatient = await patientRegmodel.findOne({email});
    //generate token
    const getToken = await getPatient.resetToken();
    //save to database
    await getPatient.save({validateBeforeSave:false});

    const resetUrl = 
    `${req.protocol}://${req.get('host')}/medsolve/v1/patient/resetPassword/${getToken}`;
    const message = `sorry,we heard you lost your password, don't worry click on the link to reset it: ${resetUrl}`

    console.log(getPatient.email)
    await sendEmail({
        email:getPatient.email,
        subject:'your reset token ,expires in the next (10min)',
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
// await getPatient.save({validateBeforeSave:false});
resp.status(404).json({
    status:'error',
    err
})}
}

module.exports = {patientReg,patientLogin,forgottenPassword};