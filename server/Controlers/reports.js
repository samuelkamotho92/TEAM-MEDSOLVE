const reportmodel = require('../Models/report');
const uploadReport = async(req,resp)=>{
    console.log(req.body);
try{
const getUploaded = await reportmodel.create(req.body);
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
const getReports = async(req,resp)=>{
    try
    {
const {patientEmail} = req.body;
console.log(patientEmail);
        //group them depending on the hospital
        const getAllreports  =
await reportmodel.find({patientEmail:patientEmail});
    resp.status(200).json({
        status:'success',
        data:getAllreports
    })
        }catch(err){
resp.status(404).json({
    status:'failure',
     message:'no data found',
     data:getAllservices
})
    }
}
const updateReport = async(req,resp)=>{
    try
    {
        const id = req.params.id;
        ///find by Id and update
        const updatedValue = 
        await reportmodel.findByIdAndUpdate(id,req.body,{
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

const deleteReport = async(req,resp)=>{
    try{
        const id = req.params.id;
        //find by id and Delete
    const deletedService =
     await reportmodel.findByIdAndDelete(id);
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
uploadReport,
getReports,
updateReport,
deleteReport}