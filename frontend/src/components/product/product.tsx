import React, { ReactNode, useState } from 'react';
import './product.css';
import ProductHover from '../ui/productHover/productHover';
import ProductTag from '../ui/productTag/productTag';

export interface ProductProps {
  id?: number;
  name: string;
  sku: string;
  category_id: number;
  description: string;
  large_description: string;
  price: number;
  discount_price?: number;
  discount_percent?: number;
  is_new: boolean;
  image_link?: string;
  create_date: Date;
  update_date: Date;
}
export function toRupias(num:number | undefined) {
  if(num === undefined) return
  const rp = num.toString().slice(0, -2).split('.');

  rp[0] = rp[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  rp.join('.')
  return rp;
}
function Product(product: ProductProps){
  const [hover, setHover] = useState(false);
  function productClick(){

  }
  function handleMouseEnter(){
    setHover(true);
  }
  function handleMouseLeave(){
    setHover(false);
  }

  let currentPrice:number | undefined = 0
  product.discount_percent === null ? currentPrice = product.price: currentPrice = product.discount_price
  return (
    <div className="product-card" onClick={productClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <ProductTag isNew={product.is_new} discount_percent={product.discount_percent}></ProductTag>
      <img src={product.image_link} alt=""></img>
      
      <div className="products-description">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-prices">
          <p className="current-price">Rp {toRupias(currentPrice)}</p>
          {product.discount_percent !== null && <p className="old-prices">Rp {toRupias(product.price)}</p>}
        </div>
      </div>
      
      {hover && <ProductHover productId={product.id}></ProductHover>}
    </div>
  )
}
export default Product