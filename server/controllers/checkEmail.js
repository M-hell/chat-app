const UserModel = require("../models/UserModel")

async function checkEmail(request,response){
    try {
        console.log("email checking endpoint hit")
        const { email } = request.body

        const checkEmail = await UserModel.findOne({email}).select("-password")

        if(!checkEmail){
            return response.status(400).json({
                message : "user not exit",
                error : true
            })
        }

        return response.status(200).json({
            message : "email verified",
            success : true,
            data : checkEmail
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = checkEmail