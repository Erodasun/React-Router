import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './layout/Nav';
import Services from './pages/Services';
import Products from './pages/Products';
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import FAQ from './pages/FAQ';
import Contacts from './pages/Contacts';
import MakeRequest from './pages/MakeRequest';
import Calculation from './pages/Calculation';

function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/services" element={<Services />} />
                <Route path="/products" element={<Products />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/make-request" element={<MakeRequest />} />
                <Route path="/calculation" element={<Calculation />} />
            </Routes>
        </Router>
    );
}

export default App;
