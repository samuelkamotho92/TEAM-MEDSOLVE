const superAdminmodel = require('../Models/superadmin')

const logAdmin = async(req,resp)=>{
    try
    {
        const {email,password} = req.body;
        const getAdmin = await superAdminmodel.login(email,password);
        resp.status(200).json({
            status:'success',
            getAdmin
        })
    }catch(err){
resp.status(404).json({
    status:'failure',
    err
})
    }

}

const forgottenPassword  = async(req,resp)=>{
    let getAdmin;
    try{
    const {email} = req.body;
    console.log(email);
    getAdmin = await superAdminmodel.findOne({email});
    //generate token
    const getToken = await getAdmin.resetToken();
    //save to database
    await getAdmin.save({validateBeforeSave:false});

    const resetUrl = 
    `${req.protocol}://${req.get('host')}/medsolve/v1/admin/resetPassword/${getToken}`;
    const message = `sorry,we heard you lost your password, don't worry click on the link to reset it: ${resetUrl}`

    console.log('your email',getAdmin.email);
    await sendEmail({
        email:getAdmin.email,
        subject:'your reset token ,expires in the next (10min)',
        message:message
    })


    resp.status(200).json({
    status:'success',
    resetToken:getToken,
    message
})
    }catch(err){
getAdmin.passwordresetToken = undefined;
getAdmin.resetTokenexpires = undefined;
await getAdmin.save({validateBeforeSave:false});
resp.status(404).json({
    status:'error',
    err
})}
}

const resetPassword = async(req,resp)=>{
    const tk = req.params.token;
    let getAdmin;
try{
const hashToken = 
crypto.createHash('sha256').update(tk).digest('hex')
    getAdmin = 
   await patientRegmodel.findOne({
passwordresetToken:hashToken, 
resetTokenexpires:{$gt:Date.now()}});
resp.status(200).json({
    status:'message'
})
if(getAdmin){
    getAdmin.password = req.body.password;
    getAdmin.passwordConfirm = req.body.passwordConfirm;
    getAdmin.passwordresetToken = undefined;
    getAdmin.resetTokenexpires = undefined;
    await getAdmin.save()
}
resp.status(200).json({
    status:'success',
    message:'password updated succesfully'
})
}catch(err){
resp.status(404).json({
    status:"fail",
    err
})
}
}

module.exports = {
    logAdmin,
    forgottenPassword,
    resetPassword
};