const servicemodel = require('../Models/services');
const uploadServices = async(req,resp)=>{
    console.log(req.body);
try{
const getUploaded = await servicemodel.create(req.body);
console.log(getUploaded);
resp.status(200).json({
    status:'success',
    data:getUploaded
})
}catch(err){
resp.status(404).json({
    status:'error',
    err
})
}
}
const getServices = async(req,resp)=>{
    try
    {
const {hospitalemail} = req.body;
console.log(hospitalemail);
        //group them depending on the hospital
        const getAllservices  =
await servicemodel.find({hospitalemail:hospitalemail});
    resp.status(200).json({
        status:'success',
        data:getAllservices
    })
        }catch(err){
resp.status(404).json({
    status:'failure',
     message:'no data found',
     data:getAllservices
})
    }
}
module.exports =
 {uploadServices,getServices}