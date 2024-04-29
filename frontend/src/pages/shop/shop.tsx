import React, { useEffect, useState } from "react";
import './shop.css'
import Header from "../../components/header/header";
import Products from "../../components/ui/products/products";
import Product from "../../components/product/product";
import Pagination from "../../components/ui/pagination/pagination";
import Benefits from "../../components/benefits/benefits";
import Footer from "../../components/footer/footer";
import ShopCard from "../../components/shopCard/shopCard";
import FilterBar from "../../components/ui/filterBar/filterBar";
export function ShopPage(){
    
    return(
        <React.StrictMode>
            <Header></Header>
            <ShopCard></ShopCard>
            <FilterBar></FilterBar>
            
            <Pagination></Pagination>
            <Benefits></Benefits>
            <Footer></Footer>
        </React.StrictMode>
    )
}
export default ShopPage;