import React, { ReactNode } from "react";
import './productTag.css'
interface ProductTagProps{
  isNew: boolean;
  discount_percent?: number;
}
export function ProductTag(props:ProductTagProps){
  const {isNew, discount_percent} = props
    let productCircle: ReactNode
    if(isNew){
      productCircle = <div className="circle circle-green">
        <p>New</p>
      </div>
    }else if(discount_percent !== null){
      productCircle = <div className="circle circle-red">
        <p>-{discount_percent}%</p>
      </div>
    }else{
      productCircle = null
    }

    return(
        productCircle
    )
}

export default ProductTag;