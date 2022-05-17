

/* début snippet pour faucet account */

import { TezosToolkit } from '@taquito/taquito';
import { importKey } from '@taquito/signer';

const FAUCET_KEY = {
	"pkh": "tz1hZpHynrQ6CMQN7pa21awkyBhMtRxUxWjH",
	"mnemonic": [
		"quarter",
		"market",
		"panic",
		"day",
		"cross",
		"unlock",
		"video",
		"afraid",
		"cause",
		"catch",
		"staff",
		"security",
		"alcohol",
		"bronze",
		"project"
	],
	"email": "dtwhtspd.equdqxbd@teztnets.xyz",
	"password": "uAHKGqNnJs",
	"amount": "26292741692",
	"activation_code": "7ed79b2793c447b53b909c191ef7ec5dd231d262"
};
  
  importKey(
    Tezos,
    FAUCET_KEY.email,
    FAUCET_KEY.password,
    FAUCET_KEY.mnemonic.join(' '),
    FAUCET_KEY.activation_code
  ).catch((e) => console.error(e));

  /* fin snippet pour faucet account */

