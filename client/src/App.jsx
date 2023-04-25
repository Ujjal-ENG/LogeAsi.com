/* eslint-disable react/jsx-indent */
import { Outlet } from 'react-router-dom';
import Footer from './components/layouts/Footer';
import Navbar from './components/layouts/Navbar';

function App() {
    return (
        <div>
            <Navbar />
            <main className="min-h-[90vh]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default App;
