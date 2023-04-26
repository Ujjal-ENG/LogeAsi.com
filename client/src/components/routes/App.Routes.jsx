/* eslint-disable import/prefer-default-export */
/* eslint-disable comma-dangle */
import { createBrowserRouter } from 'react-router-dom';
import App from '../../App';
import ErrorPage from '../pages/ErrorPage';
import About from '../pages/FooterPage/About';
import Contact from '../pages/FooterPage/Contact';
import Policy from '../pages/FooterPage/Policy';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';

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
            }
        ]
    }
]);
