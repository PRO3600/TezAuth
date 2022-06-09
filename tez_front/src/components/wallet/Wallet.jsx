import React from 'react';
import * as WalletInteractions from '../../utils/WalletInteractions';
import './Wallet.css';



const Wallet = () => {
    if (WalletInteractions.wallet_connected()) {
        
        return(
        <div class="center-div">
            <button class="large" block onClick = {WalletInteractions.disconnectWallet}>
                Disconnect Wallet
            </button>
        </div>
    )}
    else {
        return(
            <div class="center-div">
                <button class="large" block onClick = {WalletInteractions.connectWallet}>
                    Connect Wallet
                </button>
            </div>
        )
    }
}

export default Wallet;