import React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Mint from './components/mint/Mint.jsx';
import Home from './components/home/Home.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Wallet from './components/wallet/Wallet.jsx'

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact component={Mint} path="/mint" />
                    <Route exact component={Home} path="/" />
                    <Route exact component={Wallet} path ="/wallet" />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
