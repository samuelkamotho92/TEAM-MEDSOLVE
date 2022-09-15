const mongoose = require('mongoose');
const app = require('./index');
const dotenv = require("dotenv");
//create a path
dotenv.config({ path: './config.env' });
//create connection to our database
const port = process.env.PORT || 8080;
mongoose.connect(process.env.DBURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    //runn server
    app.listen(port,()=>console.log(`server running succesfully on port:${port}`))
}).catch(err=>console.log(err));