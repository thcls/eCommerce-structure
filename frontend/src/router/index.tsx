import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/home/home';
import ShopPage from '../pages/shop/shop';
import SingleProduct from '../pages/singleProduct/singleProduct';

const router = createBrowserRouter([
    {
    path: "/",
    element: <HomePage></HomePage>,
    },
    {
        path: "/shop",
        element: <ShopPage></ShopPage>
    },
    {
        path: "/product/:id",
        element: <SingleProduct></SingleProduct>,
    }
]
)
export default router;