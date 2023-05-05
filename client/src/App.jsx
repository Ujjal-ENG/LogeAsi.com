/* eslint-disable react/jsx-indent */
import { Outlet } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';
import AuthProvider from './context/AuthProvider';
import CartProvider from './context/CartProvider';
import SearchProvider from './context/SearchProvider';

function App() {
    return (
        <SearchProvider>
            <AuthProvider>
                <CartProvider>
                    <Navbar />
                    <main className="min-h-[86.2vh]">
                        <Outlet />
                    </main>
                </CartProvider>
                <Footer />
            </AuthProvider>
        </SearchProvider>
    );
}

export default App;
