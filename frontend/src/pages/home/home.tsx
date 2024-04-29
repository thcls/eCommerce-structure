import React from "react";
import './home.css'
import Header from "../../components/header/header";
import HeaderBanner from "../../components/headerBaner/headerBaner";
import BrowseTheRange from "../../components/browseRange/browseRange";
import OurProducts from "../../components/ourProducts/ourProducts";
import Benefits from "../../components/benefits/benefits";
import Footer from "../../components/footer/footer";

export function HomePage(){
    return(
        <React.StrictMode>
            <Header></Header>
            <HeaderBanner></HeaderBanner>
            <BrowseTheRange></BrowseTheRange>
            <section id='our-products'>
                <h2>Our products</h2>
                <OurProducts productsInitialNum={8}></OurProducts>
            </section>
            <Benefits></Benefits>
            <Footer></Footer>
        </React.StrictMode>
    )
}
export default HomePage;