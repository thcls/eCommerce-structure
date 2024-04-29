import React from "react";
import './headerList.css'

export interface itemList{
    text: string;
    url: string;
}
export interface HeaderListProps{
    itensList: itemList[];
}

export function HeaderList(props:HeaderListProps){
    const {itensList} = props
    return(
        <ul>
            {
                itensList.map((item, index) =>(
                    <li key={index}><a href={item.url}>{item.text}</a></li>
                ))
            }
        </ul>
    )
}

export default HeaderList;