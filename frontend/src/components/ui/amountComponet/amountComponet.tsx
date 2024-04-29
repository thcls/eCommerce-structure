import React, { useState } from "react";
import './amountComponet.css'

export function AmountComponet(){
    let [ amount, setAmount] = useState(0)
    function decreaseAmount(){
        if(amount === 0){
            return
        }
        setAmount(--amount)
    }
    function increaseAmount(){
        setAmount(++amount)

    }
    return(
        <div className="amountContainer">
            <button className="amountButton" onClick={decreaseAmount}>-</button>
            <p>{amount}</p>
            <button className="amountButton" onClick={increaseAmount}>+</button>
        </div>
    )
}

export default AmountComponet;