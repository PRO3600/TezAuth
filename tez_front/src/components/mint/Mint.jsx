import React from 'react';
import * as WalletInteractions from '../../utils/WalletInteractions';
import './Mint.css';


const Mint = () => {
    return (
        <div className="center-div">
            <button className="large" block onClick = {WalletInteractions.mint()}>
                Mint
            </button>
        </div>
    );
};

export default Mint;