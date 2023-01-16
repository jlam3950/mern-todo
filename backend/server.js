const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', (req,res) => {
    res.send('server is up');
    console.log('server is working')
})

app.listen(PORT, ()=> console.log(`app is running on ${PORT}`));