import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

const ChatApp = ({ location }) => {

    // * Create a state data for user who joins the chat app
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    useEffect(() => {
        const { name , room } = queryString.parse(location.search);
        // * set the user name and room
        setName(name);
        setRoom(room);
    });

    return (
        <div>
            <h1>{`Hi ${name}!`}</h1>
        </div>
    )
}

export default ChatApp