import React from "react";
import './filterBar.css'
import cardIcon from './img/Vector (13).svg'
import filterIcon from './img/Vector (12).svg'
import listIcon from './img/Vector (14).svg'
import NumberInput from "../numberInput/numberInput";
import ShortBySelect from "../sortBy/shortBy";

export function FilterBar(){
    return(
        <section className="filterBar">
            <div className="filter-button-conteider">
                <ul className="filter-button-list">
                    <li><button><img src={filterIcon} alt="" /> Filter</button></li>
                    <li><button><img src={cardIcon} alt="" /></button></li>
                    <li><button><img src={listIcon} alt="" /></button></li>
                </ul>
                <p>Showing {}-{} of {} results</p>
            </div>
            <div className="filter-button-conteider">
                <div>
                    
                    <NumberInput></NumberInput>
                </div>
                <div>
                    <ShortBySelect></ShortBySelect>
                </div>
            </div>
        </section>
    )
}

export default FilterBar;