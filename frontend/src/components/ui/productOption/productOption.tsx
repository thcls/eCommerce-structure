import React from "react";
import './productOption.css'

export interface ProductOptionProps {
    url: string;
    imgUrl: string;
    text: string;
}

export function ProductOption(props: ProductOptionProps){
    const {imgUrl, text, url} = props

    return(
        <a className="product-option" href={url}>
            <img src={imgUrl} alt="" />
            <p>{text}</p>
        </a>
    )
}

export default ProductOption