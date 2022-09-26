const doctormodel = require('../Models/doctorsauth');
const uploadDoctor = async(req,resp)=>{
    console.log(req.body);
try{
const getUploaded = 
await doctormodel.create(req.body);
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
const getDoctor = async(req,resp)=>{
    try
    {
const {email} = req.body;
console.log(hospitalemail);
        //group them depending on the hospital
        const getAllservices  =
await doctormodel.find({email:email});
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
const updateDoctordetails = async(req,resp)=>{
    try
    {
        const id = req.params.id;
        ///find by Id and update
        const updatedValue = 
        await doctormodel.findByIdAndUpdate(id,req.body,{
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

const deleteDoctor = async(req,resp)=>{
    try{
        const id = req.params.id;
        //find by id and Delete
    const deleteDoctor = await doctormodel.findByIdAndDelete(id);
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
uploadDoctor,
getDoctor,
updateDoctordetails,
deleteDoctor}