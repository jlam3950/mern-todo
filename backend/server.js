const dotenv = require('dotenv')
dotenv.config({ path: '../.env' });
const express = require('express');
const cors = require("cors");
const app = express();
const PORT = 8000;
const idNum = Math.floor(Math.random() * 1000)
const mongoose= require('mongoose');
const Task = require('./model/Task');
app.use(express.json()); //need to parse the json(to convert into an object for the request, use this for post/body)

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true
    })
)

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL,
() => {
    console.log('connected to server')
},
 e => console.error(e)
)

app.use('/', require('./routes/taskRoutes'))

// const run = async () => {
//     try{ 
//         const firstTask = await Task.create({task:'jumpe rope', completed: 'false', id: idNum})
//         await firstTask.save()
//         console.log(firstTask)
//     }catch(e){
//         console.log(e)
//     } 
// }

app.listen(PORT, ()=> console.log(`app is running on ${PORT}`));