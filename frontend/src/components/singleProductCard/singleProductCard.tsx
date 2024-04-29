import React from "react";
import SizeButton from "../../components/ui/sizeButton/sizeButton";
import ColorOptions from "../../components/ui/colorOptions/colorOptions";
import AmountComponet from "../../components/ui/amountComponet/amountComponet";
import './singleProductCard.css'
import { Rate } from "../ui/rate/rate";
import facebook from './img/facebook.svg'
import linkedin from './img/linkedin-box-fill.svg'
import twitter from './img/twitter.svg'
import IconList, {IconListProps} from "../ui/iconList/iconLis";
import { ProductProps, toRupias } from "../product/product";

export function SingleProductCard(product:ProductProps){
    const iconList:IconListProps = {iconList: [{iconUrl: facebook, url: '#'},{iconUrl: linkedin, url: '#'},{iconUrl: twitter, url: '#'}]}

    return(
        <section className="single-product-card">
            <div className="single-product-imgs">
                <ul>
                    <li><img src={product.image_link} alt="" /></li>
                    <li><img src={product.image_link} alt="" /></li>
                    <li><img src={product.image_link} alt="" /></li>
                    <li><img src={product.image_link} alt="" /></li>
                </ul>
                <div className="single-product-img">
                    <img src={product.image_link} alt="" />
                </div>
            </div>
            <div className="product-info">
                <div>
                    <h2 className="product-title">{product.name}</h2>
                    <div className="prices">
                        {
                        product.discount_percent !== null? <p className="price">{toRupias(product.discount_price)}</p> : <p className="price">{toRupias(product.price)}</p>
                        }
                        {product.discount_percent !== null && <p className="old-prices">Rp {toRupias(product.price)}</p>}

                    </div>
                    <Rate numRate={3.5} customerReview={129}></Rate>
                    <p className="description">{product.large_description}</p>
                </div>
                <div>
                    <SizeButton></SizeButton>
                    <ColorOptions></ColorOptions>
                </div>
                <div className="product-buy-buttons">
                    <AmountComponet></AmountComponet>
                    <button className="product-buy">Add To Cart</button>
                    <button className="product-buy">+ Compare</button>
                </div>
                <div className="sku">
                    <dl>
                        <div>
                            <dt>SKU</dt>
                            <dt>Category</dt>
                            <dt>Tags</dt>
                            <dt>Share</dt>
                        </div>
                        <div>
                            <dd>:<div className="sku-info">{product.sku}</div></dd>
                            <dd>:<div className="sku-info">Sofas</div></dd>
                            <dd>:<div className="sku-info">Sofa, Chair, Home, Shop</div></dd>
                            <dd className="social-list">:<div className="sku-info"><IconList {...iconList}></IconList></div></dd>
                        </div>
                    </dl>
                </div>
            </div>
            
        </section>

    )
}
export default SingleProductCard;