
import {TezosToolkit, MichelsonMap} from '@taquito/taquito';
import {BeaconWallet} from '@taquito/beacon-wallet';
import * as config from '../config/config';
import {bytes2Char, char2Bytes} from '@taquito/utils';
import axios from 'axios';


// configuring the beacon wallet options and setting the wallet provider
const Tezos = new TezosToolkit(config.RPC_URL);
print(Tezos._rpc); // prints the network you're connected to.


const options = {
  name: config.NAME,
  iconUrl: 'https://tezostaquito.io/img/favicon.png',
  preferredNetwork: config.NETWORK,
};

const wallet = new BeaconWallet(options);
Tezos.setWalletProvider(wallet);


// connect the wallet (requesting the user permission) and disconnect the wallet
const connectWallet = async () => {
    await wallet.requestPermissions({
      network: {
        type: config.NETWORK,
      },
    });
    return wallet;
};
  
const disconnectWallet = async () => {
    await wallet.clearActiveAccount();
};



// get the Public Key Hash (pkh) of the user and get the contract will use the following functions
const getPKH = async () => {
    const pkh = await wallet.getPKH();
    return pkh;
};
  
const getContract = async () => {
    const contract = await Tezos.wallet.at(config.CONTRACT_ADDRESS);
    return contract;
};


// to mint NFTs we need the user to connect his wallet and then sign the mint method
const mintNFT = async (address, url, token_id) => {
    await disconnectWallet();
    await connectWallet();
    const amount = 1;
    const contract = await getContract();
    url = char2Bytes(url);
    const op = await contract.methods.mint(address, amount, MichelsonMap.fromLiteral({'': url}), token_id).send();
    return await op.confirmation(3);
};


// using the tzkt api to get all the token_metadata (relevant for MarketPlace)
const getNFTs = async () => {
    const response = await axios.get(
      `https://api.granadanet.tzkt.io/v1/contracts/${config.CONTRACT_ADDRESS}/bigmaps/token_metadata/keys`
    );
    const data = response.data;
    let tokens = [];
    for (let i = 0; i < data.length; i++) {
      let url = data[i].value.token_info[''];
      if (url) {
        url = bytes2Char(url);
      }
      const token = {
        token_id: data[i].value.token_id,
        url,
      };
      tokens.push(token);
    }
    return tokens;
};


export {connectWallet, disconnectWallet, getPKH, getContract, mintNFT, getNFTs};
