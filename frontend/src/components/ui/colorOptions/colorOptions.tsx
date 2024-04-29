import React, { useState } from "react";
import './colorOptions.css'

export function ColorOptions(){
    const colors = ['#816DFA', '#000000', '#B88E2F']
    const [selectedColor, setSelectedColor] = useState('')
    function buttonColorClick(event:React.MouseEvent<HTMLButtonElement>){
        const key = event.currentTarget.getAttribute('data-key') || '';
        setSelectedColor(key)
    }
    return(
        <div className="color-buttons">
            <p>Color</p>
            <ul>
                {
                    colors.map(color => (
                        
                        <li key={color} style={ selectedColor === color ? { border: '2px solid #B88E2F' } : {} }>
                            {
                                <button style={{backgroundColor: color}} className="color-button" data-key={color} onClick={buttonColorClick}></button>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}
export default ColorOptions;