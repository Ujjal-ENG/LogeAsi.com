/* eslint-disable react/jsx-indent */
/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AdminDashboard from '../components/pages/Admin/AdminDashboard';
import CreateCategory from '../components/pages/Admin/CreateCategory';
import CreateProduct from '../components/pages/Admin/CreateProduct';
import Products from '../components/pages/Admin/Products';
import UpdateProduct from '../components/pages/Admin/UpdateProduct';
import Users from '../components/pages/Admin/Users';
import Category from '../components/pages/Category';
import ErrorPage from '../components/pages/ErrorPage';
import About from '../components/pages/FooterPage/About';
import Contact from '../components/pages/FooterPage/Contact';
import Policy from '../components/pages/FooterPage/Policy';
import ForgotPassword from '../components/pages/ForgotPassword';
import Home from '../components/pages/Home';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';
import Dashbroad from '../components/pages/user/Dashbroad';
import Orders from '../components/pages/user/Orders';
import Profile from '../components/pages/user/Profile';
import PrivateAdminRoute from './PrivateAdminRoute';
import PrivateRoutes from './PrivateRoutes';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'category',
                element: <Category />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'policy',
                element: <Policy />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'forgot-password',
                element: <ForgotPassword />
            },
            {
                path: '/dashboard/*',
                element: <PrivateRoutes />,
                children: [
                    {
                        path: 'user',
                        element: <Dashbroad />,
                        children: [
                            {
                                path: 'profile',
                                element: <Profile />
                            },
                            {
                                path: 'orders',
                                element: <Orders />
                            }
                        ]
                    }
                ]
            },
            {
                element: <PrivateAdminRoute />,
                children: [
                    {
                        path: 'dashboard/admin',
                        element: <AdminDashboard />,
                        children: [
                            {
                                path: 'create-category',
                                element: <CreateCategory />
                            },
                            {
                                path: 'create-product',
                                element: <CreateProduct />
                            },
                            {
                                path: 'users',
                                element: <Users />
                            },
                            {
                                path: 'products',
                                element: <Products />
                            },
                            {
                                path: 'update-products',
                                element: <UpdateProduct />
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);
