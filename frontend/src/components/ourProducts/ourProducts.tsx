import React, { useEffect, useState } from 'react';
import './ourProducts.css';
import Product from '../product/product';
import Products from '../ui/products/products';
import { useNavigate }  from 'react-router-dom';
interface OurProductsProps{
    productsInitialNum: number;
}
export function OurProducts(props: OurProductsProps){
    const {productsInitialNum} = props
    const [products, setProducts] = useState([]);
    const [productsNum, setProductsNum] = useState(productsInitialNum);
    const navigate  = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/products?limit=${productsNum}` );
                const data = await response.json();

                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [productsNum]);
    function showMoreProducts(){
        if(productsNum < productsInitialNum*2){
            setProductsNum(productsNum+productsNum)
        }else{
            navigate('/shop');
        }
    }
    return(
        <div id='our-products'>
            <Products>
                {
                    products.map((product:any, index) =>(
                        <Product key={index} {...product}></Product>
                    ))
                }

            </Products>
            <button onClick={showMoreProducts} id='show-more-button'>Show more</button>
        </div>
    )
}

export default OurProducts