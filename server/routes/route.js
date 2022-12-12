const express = require('express');
const user = require('../model/user');
const router = express.Router();

router.route("/register").post(async function (req,res) 
{
const {Age,Gender,Name,Email} = req.body ;

user.create({Age,Gender,Name,Email}).then((data) => {
    res.status(200).json({message : 'Success'});
}).catch((err) => {
    res.status(400).send(`${err.code}`)
})
})

router.route("/payment").post(async function (req,res) {
const {Email,Date,Batch} = req.body;
user.find({Email: Email},function(err,result){
    if(err)
    {
        console.log(err);
        res.status(400).json({message : err.message})
    }
    else
    {
        if(result.length == 0)
        {
            res.status(400).json({message : 'Email Not Registered'})
        }
        else
        {
            // Verify Month And Update
            if(result[0].PayMonth === Date) 
            {
                res.status(400).json({message : 'Fee Already Paid For This Month'})
            }
            else
            {
                user.findOneAndUpdate({Email:Email},{Batch:Batch,PayMonth : Date},function(err,result){
                    if(err)
                    {
                        res.status(400).json({message: err.message});
                    }
                    else
                    {
                        res.status(200).json({message:'Success'})
                    }
                })
            }
        
        }
        
    }
    
})

})
module.exports  = router;
