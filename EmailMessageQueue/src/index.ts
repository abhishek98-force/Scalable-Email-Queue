import {Queue} from 'bullmq'
import {emailBody} from './emailModule'
const express = require('express')

const {addUserToCourse} = require('./addCourse')
const {sendEmail} = require('./emailModule')

const app = express();
const port = process.env.PORT || 8000;
const messageQueue = new Queue('mssgQueue', { connection: {
        host: process.env.REDIS_HOST_NAME,
        port: Number(process.env.REDIS_PORT),
        password : process.env.REDIS_PASSWORD,
        username : process.env.REDIS_USERNAME
  }})

app.use(express.json());

app.get("/", (req:any, res:any) => {
    res.json({data : "This is an api to add a user to the course"});
})      

app.post("/add-user", async (req:any, res:any) => {
    console.log(req)
    const data : emailBody = req.body;
    await addUserToCourse();
    await messageQueue.add(`${Date.now()}`, data);
    
    res.json({status : 200, data : {message : 'Successfully added user'}})
})

app.listen(port, () => {
    console.log("listening on port 8000");
})