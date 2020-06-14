// import dependecies
const express = require('express');
const socketio = require('socket.io');
const http = require('http');
require("dotenv").config(); 

// set app port
const PORT = process.env.PORT

// setting up the connection
// setting socket server
const app = express()
const server = http.createServer(app)
const io = socketio(server)

// set the server runnnig
server.listen(PORT, () => {
    console.log(`Server has started and running on PORT ${PORT}`)
});