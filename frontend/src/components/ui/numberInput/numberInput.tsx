import React, { ReactEventHandler, useState } from 'react';
import './numberInput.css'

const NumberInput = () => {
    let [amount, setAmount]= useState(16)
    function handleFocus(){

    }
    return (
        <div className='number-input'>
            <p>Show</p>
            <input type="number" onFocus={handleFocus} placeholder='16'/>
        </div>

    );
};

export default NumberInput;
