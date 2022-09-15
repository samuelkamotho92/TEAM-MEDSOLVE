const hospitalRegmodel = 
require('../Models/hospitalauth');
const hospitalReg = async(req,resp)=>{
console.log(req.body);
const 
{name,
organisationName,  
email,location,password,passwordConfirm,role} = 
req.body;
const regHouse = 
await hospitalRegmodel.create({
    name,
    organisationName,
    email,
    location,
    password,
    passwordConfirm,role});
resp.status(200).json({
    status:'success',
    message:'hospital regestered succesfully'
})
console.log(regHouse);
}

const hospitalLogin = async (req,resp)=>{
    try{
        const {email,password} = req.body;
const getHospital = await hospitalRegmodel.login(email,password);
resp.status(200).json({
            status:'success',
            message:"logged in succesfully",
            data:getHospital
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
    const getHospital = 
    await hospitalRegmodel.findOne({email});
    console.log(getHospital,'my hospital');
    const getToken = await getHospital.resetToken();
    console.log(getToken);
    //save to database
    await getHospital.save({validateBeforeSave:false});
resp.status(200).json({
    status:'success',
    resetToken:getToken
})
    }catch(err){
resp.status(404).json({
    status:'error',
    err
})}
}
module.exports = 
{hospitalReg,hospitalLogin,forgottenPassword};