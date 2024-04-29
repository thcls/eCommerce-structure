import React from "react";
import './paginationButton.css'
export interface PaginationButtonProps {
    text: number | string;
  }
  
export function PaginationButton(props: PaginationButtonProps){
    const {text} = props;
    const styleSheet: React.CSSProperties = {}
    return (
        <button style={styleSheet} className='paginationButton'>{text}</button>
    )
}
export default PaginationButton;