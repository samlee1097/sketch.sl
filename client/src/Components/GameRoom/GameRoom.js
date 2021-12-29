import React from 'react';
import Chat from './Chat';
import DrawingBoard from './DrawingBoard';
import ScoreBoard from './Scoreboard';
import Timer from './Timer';

function GameRoom() {
    return (
       <div>
           <div>
               <Timer/>
           </div>
           <div>
                <DrawingBoard/>
           </div>
           <div>
                <ScoreBoard/>
           </div>
           <div>
                <Chat/>
           </div>
       </div>
    );
}

export default GameRoom;
