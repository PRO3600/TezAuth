import React, {useState} from 'react';
import * as WalletInteractions from '../../utils/WalletInteractions';


const [message, setMessage] = useState('');

const closeMessage = () => {
    setMessage('');
};

const Mint = () => {
    return (
        <div className="container">
            {message && (
                <div className="position-fixed top-0 end-0 p-3" style={{zIndex: 11}}>
                    <div
                        id="liveToast"
                        className="toast fade show d-flex"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                    >
                        <div className="toast-body">{message}</div>
                        <button type="button" className="btn-close me-2 m-auto" onClick={closeMessage}></button>
                    </div>
                </div>
            )}
            <form onSubmit={WalletInteractions.mint}>
                <div className="mb-3">
                    <label htmlFor="tokenID" className="form-label">
                        Token ID
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="tokenID"
                        aria-describedby="tokenID"
                        required
                        value={0}
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <input type="text" className="form-control" id="address" aria-describedby="address" required />
                </div>
                <button type="submit" className="btn btn-primary">
                    Mint
                </button>
            </form>
        </div>
    );
};

export default Mint;
