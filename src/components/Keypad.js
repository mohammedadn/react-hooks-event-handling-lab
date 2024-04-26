// Code Keypad Component Here
import React from 'react';


function Keypad (){
    function passWordChange(){
        console.log('Entering password...');
    }

    return (
        <div>

            <input type="password" onChange={passWordChange} />

        </div>
    )
}

export default Keypad;