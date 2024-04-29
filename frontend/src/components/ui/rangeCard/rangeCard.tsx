import React from "react";
import './rangeCard.css'

export interface RangeCardProps {
    img: string;
    text: string;
}
export function RangeCard(props: RangeCardProps){
    const {img, text} = props
    return(
        <a key={text} className="range-card" href= ''>
            <img src={img} alt="" />
            <h3>{text}</h3>
        </a>
    )
}
export default RangeCard