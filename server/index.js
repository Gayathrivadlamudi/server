const express=require("express");
const app=express();
const port=process.env.PORT || 3000;
const apikey="hjysgt87e-andcommparent-84376-mcb-dt34986tj";
const schoolName="NLP SCHOOL";
const Class="4th";
const rollNo="2345B45";
const { v4: uuidv4 } = require("uuid");
app.use(express.json());


    function api_check(req,res,next){
    const api_key=req.headers['x-api-key'] || req.body.api_key;
    if (api_key!=apikey){
    return res.status(401).json(
    {
        status:"failed",
        message:"Invalid api_key",
    }
         );
    }
    next();
    }

    app.get("/",(req,res)=>{
        res.send("server is running");
    })

    app.post("/login",api_check,async(req,res)=>{
    try{
        const{
            userName
            ,password,
            device_id,
            api_key,
        }=req.body;

    if(userName=="GayathriChowdaryVadlamudi" && password=="514233241"){
    return res.json({
    status:1,
    response:{
    userData:{
            username:userName,
            Password:password,
            userID:device_id ,
            ClassName:Class,
            RollNumber:rollNo,
            SchoolName:schoolName

            },
            AccessToken:"12345", //used to acess api's,Sent with every request,  Checked by backend
            IdentityToken:"i_12345",
            RefreshToken:"r_12345", //Used to get new access token


    }
    });
    }
    else{
    return res.json({
    status:0,
    message:"Invalid username or password",
    });
    }
    }
    catch(e){
    console.log(e);
    return res.status(500).json({
    status:"failed",
    message:"server error",
    })

    }

    });
    app.listen(port,"0.0.0.0",()=>{
    console.log(`Server is running at ${port}`)})