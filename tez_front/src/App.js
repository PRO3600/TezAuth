import React from 'react';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Mint from './components/mint/Mint.jsx';
import Home from './components/home/Home.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Wallet from './components/wallet/Wallet.jsx'

const App = () => {
    return (
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path ="/wallet" element={<Wallet/>} />
                    <Route exact path="/mint" element={<Mint/>} />
                </Routes>
            </Router>
    );
};

export default App;
