import React, { ReactNode } from "react";
import './container.css'
interface ContainerProps {
    children: ReactNode; // Accept children as ReactNode
}
const Container:React.FC<ContainerProps> =  ({ children } ) => {
    return(
        <div className='container'>
            {children}
        </div>
    )
}

export default Container;