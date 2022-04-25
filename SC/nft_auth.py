
from operator import truediv
import smartpy as sp
FA2 = sp.io.import_script_from_url("https://smartpy.io/templates/FA2.py")

class Auth_Token(FA2.FA2):

    def __init__(self, single_asset = True, non_fungible = True):
        self.__init__(

        )





@sp.add_test(name = "Non Fungible Token")
def test():
    scenario = sp.test_scenario()
    # Creating test accounts.
    admin = sp.test_account("admin owns this account.")
    CFGZ1 = sp.test_account("CFGZ1 owns this account.")
    CFGZ2 = sp.test_account("CFGZ2 owns this account.")


    auth_nft = Auth_Token(FA2.FA2_config(single_asset = False, non_fungible = True), admin = admin.address, metadata = sp.big_map({"": sp.bytes_of_string("tezos-storage:content"),"content": sp.bytes_of_string("""{"name" : "Auth Token"}""")}))

    scenario += auth_nft
    scenario += auth_nft.mint(address = CFGZ.address,
                                amount = 1,
                                metadata = Auth_Token.make_metadata(
                                    decimals = 0,
                                    name = 'NFT ServiceProvider',
                                    symbol = 'CFGZ'
                                ),
                                token_id = 0).run(sender = admin)

    
    scenario += auth_nft.transfer(
        [
            auth_nft.batch_transfer.item(from_ = CFGZ1.address,
            txs = [
                    sp.record(to_ = CFGZ2.address,
                                      amount = 1,
                                      token_id = 0)
            ])
]).run(sender = mark)