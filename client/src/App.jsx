/* eslint-disable react/jsx-indent */
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import AuthProvider from './context/AuthProvider';

function App({ title, description, keywords }) {
    return (
        <AuthProvider>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={description || 'Daily uses products'} />
                <meta name="keywords" content={keywords || 'e-commerce,products,product'} />
                <meta name="author" content="Ujjal Kumar Roy" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{title || 'LogeAsi'}</title>
            </Helmet>
            <Navbar />
            <main className="min-h-[86.2vh]">
                <Outlet />
            </main>
            <Footer />
        </AuthProvider>
    );
}

export default App;
