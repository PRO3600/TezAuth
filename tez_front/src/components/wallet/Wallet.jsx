import React from 'react';
import * as WalletInteractions from '../../utils/WalletInteractions';

const wellStyles = { maxWidth: 400, margin: '0 auto 10px' };

const wallet = WalletInteractions.getBeaconInstance();
const wallet_connected = wallet.client.getActiveAccount();

const Wallet = () => {
    if (wallet_connected) {
        
        return(
        <div className="well" style={wellStyles}>
            <button bsStyle="primary" bsSize="large" block onClick = {WalletInteractions.disconnectWallet}>
                Disconnect Wallet
            </button>
        </div>
    )}
    else {
        return(
            <div className="well" style={wellStyles}>
                <button bsStyle="primary" bsSize="large" block onClick = {WalletInteractions.connectWallet}>
                    Connect Wallet
                </button>
            </div>
        )
    }
}

export default Wallet;