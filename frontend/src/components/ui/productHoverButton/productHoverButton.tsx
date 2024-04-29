import React from "react";
import './productHoverButton.css'
export interface ProductHoverButtonProps {
    text: string;
    url: string;
  }
  
export function ProductHoverButton(props: ProductHoverButtonProps){
    const {text, url} = props;

    const handleClick = () => {
    };
    return (
        <a href={url} id='show-more-product-button'>{text}</a>
    )
}
export default ProductHoverButton;