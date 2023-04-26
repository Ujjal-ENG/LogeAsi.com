/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-indent */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/routes/App.Routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <Toaster />
        <RouterProvider router={router} />
    </>
);
