import React from "react";
import './rate.css'
import star from './img/star.svg'
import halfStar from "./img/halfStar.svg";

interface RateProps{
    numRate: number;
    customerReview: number;
}
export function Rate(props:RateProps){
    const { numRate, customerReview } = props
    const starsNumInt = Math.floor(numRate);
    let halfStars = false
    starsNumInt - numRate > 0.4? halfStars = false : halfStars = true
    return(
        <div className="rate-stars">
            {
                [...Array(starsNumInt)].map((_, index) => (
                    <img key={index} src={star} alt="" />
                ))
            }
            {halfStars && <img src={halfStar} alt="" />}
            <div className="divider"></div>
            <p>{customerReview} Customer Review</p>
        </div>
    )

}