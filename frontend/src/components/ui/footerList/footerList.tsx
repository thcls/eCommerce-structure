import React from "react";

export interface Links {
    url: string;
    text: string;
}

export interface FooterListProps {
    linksList: Links[];
    title: string;
}

export function FooterList(props:FooterListProps){
    const {linksList, title} = props
    return(
        <ul>
            <h3>{title}</h3>
            {linksList.map((link, index) => (
                <li key={index}><a href={link.url}>{link.text}</a></li>
            ))}
        </ul>
    )
}
export default FooterList