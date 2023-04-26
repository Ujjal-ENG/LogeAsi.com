/* eslint-disable react/jsx-indent */
/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AdminDashboard from '../components/pages/Admin/AdminDashboard';
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
                path: 'admin-dashboard',
                element: (
                    <PrivateAdminRoute>
                        <AdminDashboard />
                    </PrivateAdminRoute>
                )
            },
            {
                path: '/dashboard/*',
                element: <PrivateRoutes />,
                children: [
                    {
                        path: 'user',
                        element: <Dashbroad />
                    }
                ]
            }
        ]
    }
]);
