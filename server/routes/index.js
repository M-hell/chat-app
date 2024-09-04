const express=require('express')
const router=express.Router()

const registerUser=require('../controllers/registerUser.js')
const checkEmail = require('../controllers/checkEmail.js')
const checkPassword=require('../controllers/checkPassword.js')
const userDetails=require('../controllers/userDetails.js')
const logout=require('../controllers/logout.js')
const updateUserDetails=require('../controllers/updateUserDetails.js')
const searchUser=require('../controllers/searchUser')
const getGroupConv=require('../controllers/getGroupConv.js')
const deleteAllGroupMessages=require('../controllers/deleteallgrpmsg.js')

//user registering
router.post('/register',registerUser)

//email confirming
router.post('/email',checkEmail)

//password checking ,creating cookie
router.post('/password',checkPassword)

//give user details
router.get('/user-details',userDetails)

//logout ,clearing cookie
router.get('/logout',logout)

//updating details after verifying the cookie is right
router.post('/update-user',updateUserDetails)

//search user
router.post("/search-user",searchUser)

//group conversation
router.post("/get-grp-msgs",getGroupConv)

//delete grp msgs
router.post("/delete-all-grp-msg",deleteAllGroupMessages)



module.exports=router