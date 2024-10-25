// const userModel = require("../../../../../ecom-youtube/Full-Stack-E-Commerce-MERN-APP-main/Full-Stack-E-Commerce-MERN-APP-main/backend/models/userModel")
const userModel = require('../../models/userModel')
async function userDetailsController(req,res){
    try{
        // console.log("userIdd",req.userId)
        const user = await userModel.findById(req.userId)
      

        res.status(200).json({
            data : user,
            error : false,
            success : true,
            message : "User details"
        })

        // console.log("user",user)

    }catch(err){
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = userDetailsController