import React from "react";
import './iconList.css'

export interface Icon{
    url: string;
    iconUrl: string;
}
export interface IconListProps{
    iconList: Icon[];
}
export function IconList(props: IconListProps){
    const {iconList} = props

    return(
        <ul className="icon-list">
            {iconList.map((icon, index) =>(
                <li key={index}>
                    <a href={icon.url}>
                        <img className="icon" src={icon.iconUrl} alt="" />
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default IconList;