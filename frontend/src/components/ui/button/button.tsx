import React from "react";
import './button.css'
export interface ButtonProps {
    text: string;
    border: boolean;
  }
  
export function Button(props: ButtonProps){
    const {text, border} = props;
    const styleSheet: React.CSSProperties = {}
    if (border){
        styleSheet.border = '1px solid #B88E2F';
    }
    const handleClick = () => {
    };
    return (
        <button style={styleSheet} onClick={handleClick} id='show-more-button'>{text}</button>
    )
}
export default Button;