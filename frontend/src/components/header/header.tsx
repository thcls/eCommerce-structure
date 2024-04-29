import React from 'react';
import './header.css';
import {HeaderList, HeaderListProps} from '../ui/headerList/headerList';
import {IconList, IconListProps} from '../ui/iconList/iconLis';
import logo from "./img/logo.svg"
import icon from './img/Vector.svg'
import searchIcon from './img/search-icon.svg'
import heartIcon from './img/heart-icon.svg'
import marketCarIcon from './img/market-car-icon.svg'

function Header() {
    
    const iconList:IconListProps = {iconList: [{iconUrl: icon, url: '#'},{iconUrl: searchIcon, url: '#'},{iconUrl: heartIcon, url: '#'},{iconUrl: marketCarIcon, url: '#'}]}
    const headerlist: HeaderListProps = {itensList:[{text: 'Home', url: '/'}, {text: 'Shop', url: '/shop'}, {text: 'About', url: '#'}, {text: 'Contact', url: '#'}]}
    return (
        <header>
            <nav>
                <div className="logo-card">
                    <img className="logo" src={logo} alt="" />
                    <p className="logo-name">Furniro</p>
                </div>
                <HeaderList {...headerlist}></HeaderList>
                <IconList {...iconList}></IconList>
            </nav>
        </header>
    );
}

export default Header;