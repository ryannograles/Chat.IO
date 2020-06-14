import React from 'react';
// main style css && scss
import './App.css';
// router
import { BrowserRouter as Router, Route } from 'react-router-dom';
// components
import ChatApp from './components/chat/ChatApp';
import RoomSelect from './components/chat/RoomSelect';

const App = () => (
  <Router>
    <Route exact path='/' component={RoomSelect}  />
    <Route path='/chat' component={ChatApp} />
  </Router>
);

export default App;