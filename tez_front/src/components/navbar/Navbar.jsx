import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
} from "./NavbarElements";
import logo from '../../tzauth.png';

const Navbar = () => {
    return (
        <>
           <Nav>
                <NavLink to="/">
                <a href="/"><img src={logo} alt="" width="90"/></a>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink 
                    to="/"
                    activestyle={{ color:'black' }}
                    >
                        Home
                    </NavLink>
                    <NavLink 
                    to="/mint" 
                    activestyle={{ color: 'black' }}
                    >
                        Mint
                    </NavLink>
                    <NavLink 
                    to="/wallet" 
                    activestyle={{ color: 'black' }}
                    >
                        Wallet
                    </NavLink>

                    <NavLink 
                    to="" 
                    activestyle={{ color: 'black' }}
                    >
                        Sign to connect on SP
                    </NavLink>

                </NavMenu> 
            </Nav> 
        </>
    );
};


export default Navbar;
