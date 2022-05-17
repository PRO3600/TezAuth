
/*
import {TezosToolkit} from '@taquito/taquito';
import { char2Bytes } from '@taquito/utils';
import {MichelsonMap} from "@taquito/taquito";

const bytes = char2Bytes('SP_TezAuth_nft');
console.log(bytes);
/*
const Tezos = new TezosToolkit(ithacanet.smartpy.io);

const getTokenid = async () => {
    const contract = await Tezos.contract.at(KT1VonNS58CrkusMMyGkjyDnisRXDa18fc6X);
    const storage = contract.storage;
    const token_id = storage.all_tokens;

    console.log(token_id);
    return token_id;
}

const metadata = MichelsonMap.fromLiteral({symbol: char2Bytes('SP_TezAuth_nft')});

async function mint() {
    Tezos.contract.at(KT1VonNS58CrkusMMyGkjyDnisRXDa18fc6X)
        .then(c => {
            const token_id = getTokenid();
            return c.methods.mint(tz1QE9ywavjQ6WCMtWL9GUksq4r7mThxv1Nh, 1, metadata, token_id).send(); // A compléter avec amount=1 et pour metadata à voir ce qu'on peut mettre de pertinent
        });
}
*/