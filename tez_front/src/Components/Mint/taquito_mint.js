
import { char2Bytes } from @taquito/tzip16;
import {MichelsonMap} from @taquito/taquito;

Tezos.contract.at("CONTRACT_ADDRESS")
.then(contract => {
    return contract.storage();
})
.then(storage => {
    const nbre_token = storage.all_tokens; //nbre_token à exporter pour lire dans le composant React
})
.catch(error => console.log(error));


const metadata = MichelsonMap.fromLiteral({symbol: char2Bytes('SP_tezauth_nft')});

Tezos.contract.at("<CONTRACT_ADDRESS>") // A compléter
.then(c => {
    return c.methods.mint(address, amount, metadata, nbre_token).send(); // A compléter avec amount=1 et pour metadata à voir ce qu'on peut mettre de pertinent
})
.then(operation => {
    console.log("Mint operation sent.")
    console.log(`Awaiting for ${operation.hash} to be confirmed...`);
    return operation.confirmation(3).then(() => operation.hash);
})
.then(hash => console.log(`Operation injected: {hash}`))
.catch(error => console.log(error));


