const patientmodel = require('../Models/patientauth');
const jwt = require('jsonwebtoken');
const jwtverification = async(req,resp,next)=>{
    const token = await req.cookies.jwt;
    if(token){
        jwt.verify(token,"patientCookie",
        (err,decodedToken)=>{
    if(err){
        console.log(err.message)
        resp.redirect("/login");
    }else{
      const currenPatient = 
      patientmodel.findById(decodedToken._id);
      console.log(currentPatient.role,
        "from decodeed")
     req.newuser = currentPatient;
     next();
    }
        })
    }else{
        //redirect if no token
        resp.redirect("/patientlogin");
    }
     // GRANT ACCESS TO PROTECTED ROUTE
    }
        const getpatientinfo = async(req,resp,next)=>{
            //check for jwt in the cookie  //name of cookie
            const token = req.cookies.jwt;
            if(token){
                jwt.verify(token,"patientCookie",async (err,decodedToken)=>{
                    if(err){
                        resp.locals.user = null;
                        next()
                    }else{
                        //no err we proceed with the route 
                     let patient = await patientmodel.findById(decodedToken.id);
                     console.log(patient.role)
                    
     
                     resp.locals.patient = patient;
                     //2nd option call the restricto at this point with the role
                    //  restrictTo(user.role,"admin")
            
                     next();
                    }
                })
            }
            else{
                resp.locals.user = null;
                next();
            }
            }

    module.exports = {jwtverification,restrictto,getpatientinfo};