import React from "react";
import './benefit.css'

export interface BenefitProps{
    imgUrl: string;
    title: string;
    text: string;
}

export function Benefit(props: BenefitProps){
    const {imgUrl, title, text} = props
    return(
        <div key={text}>
            <img src={imgUrl} alt="" />
            <div className="benefit">
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Benefit;