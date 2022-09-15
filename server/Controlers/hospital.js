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

module.exports = 
{hospitalReg,hospitalLogin};