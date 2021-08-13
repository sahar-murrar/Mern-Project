const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app)
const io = require('socket.io')(server,{
    cors:{
        origin:'*',
    }
})

require('./server/config/mongoose.config'); // This is new
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true })); // This is new
require('./server/routs/routs')(app);

io.on('connection', socket =>{
    console.log('connection made successfully')
    socket.on('message',payload => {
        console.log('Message received on server: ', payload)
        io.emit('message',payload)
    })
})

server.listen(7000, () => {
    console.log("Listening at Port 8000")
})
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})