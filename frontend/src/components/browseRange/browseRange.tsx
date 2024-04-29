import React from 'react';
import "./browseRange.css"
import dinnerImg from "./img/jantar.png";
import liveRoomImg from "./img/sala.png";
import roomImg from "./img/quarto.png";
import { RangeCard, RangeCardProps} from '../ui/rangeCard/rangeCard';
function BrowseTheRange() {
    const rangeCardList: RangeCardProps[] = [{img: dinnerImg, text: 'Dining'}, {img: liveRoomImg, text: 'Living'}, {img: roomImg, text: 'Bedroom'}] 
    return (
        <section id="browse-the-range">
            <h2>Browse The Range</h2>
            <div id="browse-the-range-cards">
                {rangeCardList.map((rangeCard, index) => (
                    <RangeCard key={index} {...rangeCard}></RangeCard>
                ))}
            </div>
        </section>
    );
}

export default BrowseTheRange;
