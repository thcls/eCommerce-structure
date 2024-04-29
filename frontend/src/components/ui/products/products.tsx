import React, { ReactNode } from "react";
import './products.css'
interface ContainerProps {
    children: ReactNode; // Accept children as ReactNode
}
const Products:React.FC<ContainerProps> =  ({ children } ) => {
    return(
        <div id='products'>
            {children}
        </div>
    )
}

export default Products;