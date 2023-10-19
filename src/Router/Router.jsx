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
                loader: () => fetch('http://localhost:5000/products')
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/updateProduct/:id',
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'/joinUs',
                element: <JoinUs></JoinUs>
            },
            {
                path: '/Login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default Router;