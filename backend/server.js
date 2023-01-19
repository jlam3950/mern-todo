const dotenv = require('dotenv')
dotenv.config({ path: '../.env' });
const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 8000;
const mongoose= require('mongoose');
const Task = require('./schema/Task');
const idNum = Math.floor(Math.random() * 100)

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
)

mongoose.connect(process.env.MONGO_URL,
() => {
    console.log('connected to server')
},
 e => console.error(e)
)

async function run(){
    try { 
        const firstTask = await Task.create({task:'jumpe rope', completed: 'true', id: idNum})
        await firstTask.save()
        console.log(firstTask)
    }catch(e){
        console.log(e)
} 
}
// run()

app.use('/', require('./routes/taskRoutes'))
app.listen(PORT, ()=> console.log(`app is running on ${PORT}`));