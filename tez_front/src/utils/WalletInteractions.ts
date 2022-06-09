
import {TezosToolkit} from '@taquito/taquito';
import {BeaconWallet} from '@taquito/beacon-wallet';
import { char2Bytes } from '@taquito/utils';
import {MichelsonMap} from "@taquito/taquito";

import { RequestSignPayloadInput, SigningType } from '@airgap/beacon-sdk';

import * as config from '../config/config';


// configuring the beacon wallet options and setting the wallet provider
const Tezos = new TezosToolkit(config.RPC_URL);
//console.log(Tezos._rpc); prints the network you're connected to.



const getBeaconInstance = async () => {

    const options:any = {
        name: config.NAME,
        iconUrl: 'https://tezostaquito.io/img/favicon.svg', // mettre notre logo
        preferredNetwork: config.NETWORK,
      };

    const wallet = new BeaconWallet(options);

    // Setting the wallet as the wallet provider for Taquito.
    Tezos.setWalletProvider(wallet);

    return wallet;

}

const wallet = getBeaconInstance();



// get the Public Key Hash (pkh) (=useraddress on tezos) of the user
const getPKH = async () => {
  const pkh = await (await wallet).getPKH();
  return pkh;
};

const pkh = getPKH();



const signMessage = async () => {
  // The data to format
  const dappUrl = 'TezAuth.app'; // A modifier
  const ISO8601formatedTimestamp = new Date().toISOString();
  const input = 'CFGZ_TezAuth_nft'; // CFGZ est le nom du service provider
  
  // The full string
  const formattedInput: string = [
    'Tezos Signed Message:',
    dappUrl,
    ISO8601formatedTimestamp,
    input,
  ].join(' ');
  
  // The bytes to sign
  const bytes = char2Bytes(formattedInput);
  const payloadBytes = '05' + '0100' + char2Bytes(bytes.length.toString()) + bytes;
  
  
  // The payload to send to the wallet
  const payload: RequestSignPayloadInput = {
    signingType: SigningType.MICHELINE,
    payload: payloadBytes,
    sourceAddress: await pkh,
  };
  
  // The signing
  const signedPayload = await (await wallet).client.requestSignPayload(payload);
  
  // The signature
  const { signature } = signedPayload;
  
  }




// connect the wallet (requesting the user permission) and disconnect the wallet
const connectWallet = async () => {

    console.log('CONNECTING TO BEACON');
    if (await (await wallet).client.getActiveAccount()) {
        // Check if we already have an account connected, so we can skip requestPermissions.
        return wallet;
      }
    await (await wallet).requestPermissions({
      network: {
        type: config.NETWORK,
      },
    });
    return wallet;

};

const wallet_connected = async () => {
  return await (await wallet).client.getActiveAccount() ; 
}


const disconnectWallet = async () => {

    await (await wallet).clearActiveAccount();
};





const getTokenid = async () => {
    const contract = await Tezos.contract.at(config.CONTRACT_ADDRESS);
    const storage:any = await contract.storage();
    const token_id = storage.all_tokens;

    return token_id;
}
  



const metadata = MichelsonMap.fromLiteral({symbol: char2Bytes('SP_TezAuth_nft')});

const mint = async () => {
    Tezos.contract.at(config.CONTRACT_ADDRESS)
    .then(c => {
    const token_id = getTokenid();
    const pkh = getPKH();
    return c.methods.mint(pkh, 1, metadata, token_id).send(); // A compléter avec amount=1 et pour metadata à voir ce qu'on peut mettre de pertinent
})
.then(async operation => {
    console.log("Mint operation sent.")
    console.log(`Awaiting for ${operation.hash} to be confirmed...`);
    await operation.confirmation(3);
    return operation.hash;
})
.then(hash => console.log(`Operation injected: https://tzkt.io/${hash}`))
.catch(error => console.log(error));
}



export {connectWallet, disconnectWallet, mint, pkh, getBeaconInstance, wallet_connected};
