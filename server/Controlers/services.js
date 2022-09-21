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
const updateService = async(req,resp)=>{
    try
    {
        const id = req.params.id;
        ///find by Id and update
        const updatedValue = 
        await servicemodel.findByIdAndUpdate(id,req.body,{
            runValidators:true,
            new : true
        });
        resp.status(200).json({
            status:'success',
           data:updatedValue
        })
    }catch(err){
resp.status(404).json({
    status:'failure',
    err
})
    }
}

const deleteService = async(req,resp)=>{
    try{
        const id = req.params.id;
        //find by id and Delete
    const deletedService = await findByIdAndDelete(id);
    resp.status(200).json({
        status:'success',
        message:'deleted succefully',
    })
    }catch(err){
resp.status(404).json({
    status:'failure',
})
    }

}
module.exports =
 {
uploadServices,
getServices,
updateService,
deleteService}