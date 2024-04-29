import React, { useState, useEffect } from "react";
import './singleProduct.css'
import Header from "../../components/header/header";
import SingleProductCard from "../../components/singleProductCard/singleProductCard";
import Description from "../../components/ui/description/description";
import Container from "../../components/ui/container/container";
import Product from "../../components/product/product";
import Products from "../../components/ui/products/products";
import Button from "../../components/ui/button/button";
import Footer from "../../components/footer/footer";
import arrow from './img/arrow.svg'
import { useParams } from "react-router-dom";
import { ProductProps } from "../../components/product/product";
import OurProducts from "../../components/ourProducts/ourProducts";
export function SingleProduct(){
    const { id } = useParams()
    const [product, setProduct] = useState<ProductProps | undefined>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    console.log(product)
    if(product === undefined){
        return null
    }
    return(
        <React.StrictMode>
            <Header></Header>
            <section>
                <div className="path-bar">
                    <a href="/">Home</a>
                    <img src={arrow} alt="" />
                    <a href="/shop">Shop</a>
                    <img src={arrow} alt="" />
                    <div className="divider"></div>
                    <p>{product.name}</p>
                </div>
            </section>
            <SingleProductCard {...product!}></SingleProductCard> 
            

            <Container>
                <div className="description-title">
                    <h3>Description</h3>
                    <p>Additional Information</p>
                </div>
                <div className="description-text">
                    <p>Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                    <p>Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                </div>
            </Container>
            <h2>Related Products</h2>
            <OurProducts productsInitialNum={4}></OurProducts>
            <hr />
            <Footer></Footer>
        </React.StrictMode>
    )
}
export default SingleProduct;