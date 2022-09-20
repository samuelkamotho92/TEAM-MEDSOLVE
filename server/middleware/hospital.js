const hospitalmodel = require('../Models/hospitalauth');
const jwt = require('jsonwebtoken');
const jwtverification = async(req,resp,next)=>{
    const token = await req.cookies.jwt;
    if(token){
        jwt.verify(token,"hospitalCookie",
        (err,decodedToken)=>{
    if(err){
        console.log(err.message)
        resp.redirect("/login");
    }else{
      const currenthospital = 
      hospitalmodel.findById(decodedToken._id);
      console.log(currenthospital.role,
        "from decodeed")
     req.newuser = currenthospital;
     next();
    }
        })
    }else{
        //redirect if no token
        resp.redirect("/hospitallogin");
    }
     // GRANT ACCESS TO PROTECTED ROUTE
    }
        const gethospitalinfo = async(req,resp,next)=>{s
            //check for jwt in the cookie  //name of cookie
            const token = req.cookies.jwt;
            if(token){
                jwt.verify(token,"hospitalCookie",async (err,decodedToken)=>{
                    if(err){
                        resp.locals.user = null;
                        next()
                    }else{
                        //no err we proceed with the route 
                     let hospital = await hospitalmodel.findById(decodedToken.id);
                     console.log(hospital.role)
                    
     
                     resp.locals.hospital = hospital;
                     //2nd option call the restricto at this point with the role
                    //  restrictTo(user.role,"admin")
            
                     next();
                    }
                })
            }else{
                resp.locals.user = null;
                next();
            }
            }

    module.exports = {jwtverification,
        restrictto,
        gethospitalinfo};