const dotenv = require('dotenv')
dotenv.config({ path: '../.env' });
const express = require('express');
const app = express();
const PORT = 8000;
const mongoose= require('mongoose');
const Task = require('./schema/Task');

mongoose.connect(process.env.MONGO_URL,
() => {
    console.log('connected to server')
},
 e => console.error(e)
)

async function run(){
    const firstTask = await Task.create({task:'jumpe rope'})
    await firstTask.save()
    console.log(firstTask)
}
run()
//schema defines what the struct of data looks like  

app.get('/', (req,res) => {
    res.send('server is up');
    console.log('server is working')
})

// app.use('/', require('./routes/taskRoutes'))

app.listen(PORT, ()=> console.log(`app is running on ${PORT}`));