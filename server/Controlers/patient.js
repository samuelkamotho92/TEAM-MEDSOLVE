const patientRegmodel = require('../Models/patientauth')
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

module.exports = {patientReg,patientLogin};