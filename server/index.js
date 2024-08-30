require('dotenv').config()
const { app, server } = require('./socket/index.js')

const express=require('express')
// const app=express()
const PORT=process.env.PORT || 3000

//for deploying
const path=require('path');
const __dirname=path.resolve();

//cors setup
const cors=require('cors')
app.use(cors(
    {
        origin: process.env.FRONTEND_URL,
        credentials: true
    }
))

//cookie parser
const cookiesParser=require('cookie-parser')
app.use(cookiesParser())


//enables parsing json response
app.use(express.json())


//api endpoints
const router=require('./routes/index.js')
app.use('/api',router)


//for deploying
app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});


//db connection
const connectDB=require('./config/connectDB.js')
connectDB().then(()=>{
    server.listen(PORT,()=>{
        console.log(`app running on http://localhost:${PORT}/`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
