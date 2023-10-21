import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import AddProduct from "../Pages/AddProduct";
import UpdateProduct from "../Pages/UpdateProduct";
import Login from "../Components/JoinusComponents/Login";
import Register from "../Components/JoinusComponents/Register";
import JoinUs from "../Pages/JoinUs";
import ShoppingCart from "../Pages/ShoppingCart";
import PricingPlans from "../Pages/PricingPlans";
import AboutUs from "../Pages/AboutUs";
import Contact from "../Pages/Contact";
import BrandDetails from "../Pages/BrandDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ProductDetails from "../Pages/ProductDetails";
import UserProfile from "../Pages/UserProfile";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/products',
                element: <Products></Products>,
                loader: () => fetch('https://green-diva-server-byb33mxas-ruksanas-projects.vercel.app/products')
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/updateProduct/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://green-diva-server-byb33mxas-ruksanas-projects.vercel.app/products/${params.id}`)
            },
            {
                path: '/brandDetails/:id',
                element: <PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://green-diva-server-byb33mxas-ruksanas-projects.vercel.app/brands/${params.id}`)
            },
            {
                path:'/joinUs',
                element: <JoinUs></JoinUs>,
              
            },
            {
                path: '/Login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/shoppingCart',
                element: <PrivateRoute><ShoppingCart></ShoppingCart></PrivateRoute>,
                loader:() => fetch('https://green-diva-server-byb33mxas-ruksanas-projects.vercel.app/addToCart')
            },
            {
                path: '/pricingPlans',
                element: <PricingPlans></PricingPlans>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/productDetails/:id',
                element:<PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://green-diva-server-byb33mxas-ruksanas-projects.vercel.app/products/${params.id}`)
            },
            {
                path:'/userProfile',
                element:<UserProfile></UserProfile>
            }
        ]
    }
])

export default Router;