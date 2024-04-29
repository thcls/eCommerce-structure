import React, {  ReactEventHandler, useState, useEffect } from 'react';
import './pagination.css'
import Products from '../products/products';
import Product from '../../product/product';

export function Pagination(){
    
    const [pageButtons, setPagination] = useState({currentPage: 1, buttons: [1, 2, 3], productsCoverNum: 0});
    const [products, setProducts] = useState([]);
    const [productsCoverNum, setproductsCoverNum] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            console.log(pageButtons.productsCoverNum)
            try {
                const response = await fetch(`http://localhost:3001/products/next-16/${pageButtons.productsCoverNum}`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [pageButtons]);
    const pagesNumber = 4
    
    function buttonClick(event: React.MouseEvent<HTMLButtonElement>){
        const key = parseInt(event.currentTarget.getAttribute('data-key') || '1');
        if(key === pageButtons.currentPage){
            return
        }
        pageButtons.productsCoverNum = 16 * (key - 1)
        setPagination({...pageButtons});
        pageButtons.currentPage = key
        if(key === pagesNumber){
            pageButtons.buttons = [pagesNumber-2,pagesNumber-1,pagesNumber]
        }else if(key === 1){
            pageButtons.buttons = [1, 2, 3]
        }else{
            pageButtons.buttons = [pageButtons.currentPage-1, pageButtons.currentPage, pageButtons.currentPage+1]
        }
        console.log(pageButtons.buttons)
        setPagination({...pageButtons});
    }
    function nextClick(){
        if(pageButtons.currentPage === 1){
            pageButtons.currentPage += 1;
            pageButtons.productsCoverNum += 16
            setPagination({...pageButtons});
        }else if(pageButtons.currentPage < pagesNumber-1){
            
            pageButtons.currentPage += 1;
            pageButtons.buttons = [pageButtons.currentPage-1,pageButtons.currentPage,pageButtons.currentPage+1]
            pageButtons.productsCoverNum += 16
            setPagination({...pageButtons});
        } else if(pagesNumber-1 === pageButtons.currentPage){
            pageButtons.currentPage += 1;
            pageButtons.productsCoverNum += 16
            setPagination({...pageButtons});
        }
    }
    function previousClick(){
        if(pageButtons.currentPage-1 === 1){
            pageButtons.currentPage -= 1;
            pageButtons.productsCoverNum -= 16
            setPagination({...pageButtons});
        }
        else if(pageButtons.currentPage > 1 ){
            pageButtons.currentPage -= 1;
            pageButtons.productsCoverNum -= 16
            pageButtons.buttons = [pageButtons.currentPage-1,pageButtons.currentPage,pageButtons.currentPage+1] 
            setPagination({...pageButtons});
        }
    }
    return(
        <div>
            <Products>
                {
                    products.map((product:any, index)  =>
                        <Product key={index} {...product}></Product>
                    )
                }
            </Products>
            <div className="buttonsPages">
                {pageButtons.currentPage > 1 &&  <button onClick={previousClick} className='paginationButton'>Previous</button>}
                {
                    pageButtons.buttons.map(num =>(
                        
                        pageButtons.currentPage === num ? <button key={num} data-key={num} className='paginationButton currentPaginationButton pageButton'>{num}</button>
                        :<button onClick={buttonClick} key={num} data-key={num} className='pageButton paginationButton'>{num}</button>
                    ))
                }
                {pageButtons.currentPage < pagesNumber && <button onClick={nextClick} className="paginationButton">Next</button>}
            </div>
        </div>

    )

}

export default Pagination;