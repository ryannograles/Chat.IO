const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const router = require('./router/router');
require("dotenv").config(); 

// set app port
const PORT = process.env.PORT
/**
 * ! This is important in running the backend with socketio
 * @desc SERVER CONSTANTS
 * * DESCRIPTION declaration for using express and http server with socket io
 */
const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
    /**
     * TODO : establish new connection
     */
    console.log('New connection established!');
    socket.on('disconnect', () => {
        /**
         * ! Turncate connection
         */
        console.log('Connection disconnet!');
    })
});

app.use(router);
// set the server runnnig
server.listen(PORT, () => {
    console.log(`Server has started and running on PORT ${PORT}`)
});