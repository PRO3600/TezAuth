
import {TezosToolkit} from '@taquito/taquito';
import { getPKH } from './wallet';

const Tezos = new TezosToolkit(config.RPC_URL);

const getTokenid = async () => {
  const contract = await Tezos.wallet.at(config.CONTRACT_ADDRESS);
  const storage = contract.storage;
  const token_id = storage.all_tokens;

  return token_id;
}

/*contract.methods.transfer([
    {
      from_: "tz1YLnvKy2ycBZ9TpTCv9ngXd1eUw2uxzhDd",
      txs: [{ to_: "tz1Q654L2qnt5mDM1Lbi4rMSTtnE5JHvD8M7", token_id: 0, amount: 2 }]
    }
  ]).send()
  */