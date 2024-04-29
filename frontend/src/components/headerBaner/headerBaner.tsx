import React from 'react';
import './headerBunner.css';
import interior from './img/scandinavian-interior-mockup-wall-decal-background 1.png'

function HeaderBanner() {
    const styleSheet: React.CSSProperties = {
        backgroundImage: `url('${interior}')`
    };
    
    return (
        <div style={styleSheet} id="header-banner">
            <div id="header-banner-card">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut<br /> elit tellus, luctus nec ullamcorper mattis.</p>
            </div>
        </div>
    );
}

export default HeaderBanner;
