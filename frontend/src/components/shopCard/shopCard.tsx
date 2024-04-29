import React from "react";
import './shopCard.css'
import headerImg from './img/Rectangle 1.png'
import arrow from './img/dashicons_arrow-down-alt2.svg'

export function ShopCard(){
    const styleSheet: React.CSSProperties = {
        backgroundImage: `url('${headerImg}')`
    };
    
    return(
        <section style={styleSheet} className="shopCard">
            <h2>Shop</h2>
            <div className="navigationPath">
                <a href="/" className="navigationPathHome">Home</a>
                <img src={arrow} alt="" />
                <a href="/shop" className="navigationPathShop">Shop</a>
            </div>
        </section>
    )
}
export default ShopCard;