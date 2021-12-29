import React, {useState, Fragment} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GameRoom from "./Components/GameRoom/GameRoom";
import PrivateRoom from "./Components/PrivateRoom/PrivateRoom";
import HomePage from './Components/HomePage/HomePage'
import './Styling/App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <Router>
      <Fragment>
        <Routes>
          <Route exact path="/private" element={<PrivateRoom/>}/>
          <Route exact path="/game" element={<GameRoom/>}/>
          <Route exact path="/" element={<HomePage setCurrentUser= {setCurrentUser}/>}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
