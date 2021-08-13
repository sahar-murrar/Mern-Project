const express = require('express');
// const app1 = require('express')()
// const server = require('http').createServer(app1)
// const io = require('socket.io')(server,{
//     cors:{
//         origin:'*',
//     }
// })

const cors = require('cors');
const app = express();
require('./server/config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./server/routs/routs')(app);

// io.on('connection', socket =>{
//     console.log('connection made successfully')
//     socket.on('message',payload => {
//         console.log('Message received on server: ', payload)
//         io.emit('message',payload)
//     })
// })

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})