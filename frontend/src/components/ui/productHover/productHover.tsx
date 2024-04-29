import React from "react";
import ProductHoverButton from "../productHoverButton/productHoverButton";
import './productHover.css'
import {ProductOption} from "../productOption/productOption";
import heartIcon from "./img/heart-icon.svg"
import compareIcon from './img/compare-icon.svg'
import shareIcon from './img/share-icon.svg'

interface ProductHoverProps{
    productId: number | undefined;
}
export function ProductHover(props:ProductHoverProps){
    const productOptionList = [{url: '#', imgUrl: heartIcon, text: 'Share'},{url: '#', imgUrl: compareIcon, text: 'Compare'},{url: '#', imgUrl: shareIcon, text: 'Like'}]
    const { productId } = props

    return(
        <div className='product-hover'>
            <ProductHoverButton text="See Details" url={ `../product/${productId}`}></ProductHoverButton>
            <div className='product-options'>
                {
                    productOptionList.map((option, index) =>(
                    <ProductOption key={index} {...option}></ProductOption>
                ))}
                
            </div>
        </div>
    )
}
export default ProductHover;