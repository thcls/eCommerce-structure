import React, { ReactNode, useState } from 'react';
import './footer.css';
import { FooterList, FooterListProps } from '../ui/footerList/footerList';

function Footer() {
    const footerlist1: FooterListProps = {title: 'Links', linksList: [{url:"/", text:'Home'}, {url:"/shop", text:'Shop'},{url:"#", text:'About'},{url:"#", text:'Contact'}]}
    const footerlist2: FooterListProps = {title: 'Help', linksList: [{url:"#", text:'Payment Options'}, {url:"#", text:'Returns'},{url:"#", text:'Privacy Policies'}]}
    
    return (
        <footer>
            <div id="footer-info">
                <div>
                    <p className="logo-name">Furniro.</p>
                    <address>
                        400 University Drive Suite 200 Coral<br /> Gables,<br />FL 33134 USA
                    </address>
                </div>
                <FooterList {...footerlist1}></FooterList>
                <FooterList {...footerlist2}></FooterList>
                <div id="newsletter">
                    <h3>Newsletter</h3>
                    <form action="">
                        <input type="email" id="email-text-field" placeholder="Enter Your Email Address" />
                        <button id="subscribe-button">SUBSCRIBE</button>
                    </form>
                </div>
            </div>
            <p>2023 furino. All rights reverved</p>
        </footer>
    );
}

export default Footer;