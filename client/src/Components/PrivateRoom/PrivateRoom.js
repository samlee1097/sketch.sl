import React from 'react';
import Players from './Players';
import Settings from './Settings';

function PrivateRoom() {
    return (
       <div>
           <div>
                <Settings/>
           </div>
           <div>
                <Players/>
           </div>
       </div>
    );
}

export default PrivateRoom;
