import React from 'react';
import './benefits.css';
import checkIcon from './img/check-icon.svg'
import deliveryIcon from './img/delivery-icon.svg'
import serviceIcon from './img/service-icon.svg'
import trophyIcon from './img/trophy-icon.svg'
import {Benefit, BenefitProps} from '../ui/benefit/benefit';

function Benefits() {
    const benefitList: BenefitProps[] = [{imgUrl: trophyIcon,title: 'High Quality', text: 'crafted from top materials'}, {imgUrl: checkIcon,title: 'Warranty Protection', text: 'Over 2 years'}, {imgUrl: deliveryIcon,title: 'Free Shipping', text: 'Order over 150 $'},{imgUrl: serviceIcon,title: '24 / 7 Support', text: 'Dedicated support'}]
    return (
        <section id="benefits">
            {benefitList.map(( (benefit, index) => (
                <Benefit key={index} {...benefit}></Benefit>
            )))}
        </section>
    );
}

export default Benefits;
