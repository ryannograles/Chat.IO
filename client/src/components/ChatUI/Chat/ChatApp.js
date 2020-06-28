import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

// * declaire constants 
let socket;
let ENDPOINT = 'localhost:5000'

const ChatApp = ({ location }) => {

    // * Create a state data for user who joins the chat app
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    
    useEffect(() => {
        const { name , room } = queryString.parse(location.search);

        // * create socket
        socket = io(ENDPOINT);

        // * set the user name and room
        setName(name);
        setRoom(room);

        console.log(socket)
    }, []);

    return (
        <div>
            <h1>{`Hi ${name}!`}</h1>    
        </div>
    )
}

export default ChatApp