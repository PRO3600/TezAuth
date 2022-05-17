
/*import {MichelsonMap} from '@taquito/taquito';

Tezos.contract
  .at('') // ajouter addresse du contrat
  .then((myStorage) => {
        //When called on a bigMap, the get method returns a promise
        return myStorage['Ledger'].get({
          0: '10', //nat
          1: 'tz3WXYtyDUNL91qfiCJtVUX746QpNv5i5ve5', //address
        });
      })
      .then((valueBigMap) => {
        println(`The value associated with the specified key of the bigMap is ${valueBigMap}.`);
      });
  })
  .catch((error) => println(`Error: ${JSON.stringify(error, null, 2)}`));

  */

  /* using the tzkt api to get all the token_metadata (relevant for MarketPlace)
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
*/