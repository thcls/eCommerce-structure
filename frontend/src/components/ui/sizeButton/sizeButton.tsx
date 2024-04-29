import React, { useState } from "react";
import './sizeButton.css'

export function SizeButton(){
    const sizes = ['L', 'XL', 'XS']
    const [selectedSize, setSelectedSize] = useState('')
    const styleSheet: React.CSSProperties = {}
    styleSheet.backgroundColor = '#B88E2F'
    styleSheet.color = '#FFFFFF'
    function buttonSizeClick(event:React.MouseEvent<HTMLButtonElement>){
        const key = event.currentTarget.getAttribute('data-key') || '';
        setSelectedSize(key)
    }
    return(
        <div className="size-buttons">
            <p>Size</p>
            <ul>
                {
                    sizes.map((size, index) => (
                        <li key={index}>
                            {
                                selectedSize !== size? <button className="size-button" data-key={size} onClick={buttonSizeClick}>{size}</button>
                                : <button style={styleSheet} data-key={size} className="size-button" onClick={buttonSizeClick}>{size}</button>
                            }
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}
export default SizeButton;