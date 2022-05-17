import smartpy as sp

#FA2 = sp.io.import_script_from_url("https://smartpy.io/templates/FA2.py")
FA2 = sp.io.import_template("FA2.py")

class Auth_Token(FA2.FA2):
    def _init_(self, non_fungible = True, assume_consecutive_token_ids = True):
        pass
    
    
    @sp.entry_point
    def mint(self, params):
        sp.verify(sp.sender == params.address, 'you cannot mint for another address')
        sp.verify(params.amount == 1, 'NFT-asset: amount <> 1')
        sp.verify(~ (self.data.all_tokens.contains(params.token_id)), 'NFT-asset: cannot mint twice same token')
        sp.if self.data.ledger.contains((sp.set_type_expr(params.address, sp.TAddress), sp.set_type_expr(params.token_id, sp.TNat))):
            self.data.ledger[(sp.set_type_expr(params.address, sp.TAddress), sp.set_type_expr(params.token_id, sp.TNat))].balance += params.amount
        sp.else:
            self.data.ledger[(sp.set_type_expr(params.address, sp.TAddress), sp.set_type_expr(params.token_id, sp.TNat))] = sp.record(balance = params.amount)
        sp.if ~ (self.data.all_tokens.contains(params.token_id)):
            self.data.all_tokens.add(params.token_id)
            self.data.token_metadata[params.token_id] = sp.record(token_id = params.token_id, token_info = params.metadata)
            self.data.total_supply[params.token_id] = params.amount + self.data.total_supply.get(params.token_id, default_value = 0)
    



        
    




@sp.add_test(name = "Non Fungible Token")
def test():

    scenario = sp.test_scenario()

    # Creating test accounts.
    admin = sp.test_account("admin owns this account.")
    CFGZ1 = sp.test_account("CFGZ1 owns this account.")
    CFGZ2 = sp.test_account("CFGZ2 owns this account.")

    scenario.h1("minting test")
    auth_nft = Auth_Token(FA2.FA2_config(non_fungible = True, assume_consecutive_token_ids = False), admin = admin.address, metadata = sp.big_map({"": sp.utils.bytes_of_string("tezos-storage:content"),"content": sp.utils.bytes_of_string("""{"name" : "Auth Token", "description": "NFT contract for Auth"}""")}))

    scenario += auth_nft
    scenario += auth_nft.mint(address = CFGZ1.address,
                                amount = 1,
                                metadata = Auth_Token.make_metadata(
                                    decimals = 0,
                                    name = "NFT ServiceProvider",
                                    symbol = "CFGZ1"
                                ),
                                token_id = 1 ).run(sender = CFGZ1.address)



    scenario.h2("Balance of")
    consumer = FA2.View_consumer(auth_nft)
    scenario += consumer

    def arguments_for_balance_of(receiver, reqs):
        return (sp.record(
                        callback = sp.contract(
                            FA2.Balance_of.response_type(),
                            receiver.address,
                            entry_point = "receive_balances").open_some(),
                        requests = reqs
                        )
                )

    scenario += auth_nft.balance_of(arguments_for_balance_of(
        consumer, 
        [sp.record(owner = CFGZ1.address, token_id = 1)]
        )
    )



    scenario.h3("Transfer")
    scenario += auth_nft.transfer(
        [
            auth_nft.batch_transfer.item(
                from_ = CFGZ1.address,
                txs = [
                    sp.record(  to_ = CFGZ2.address,
                                amount = 1,
                                token_id = 1
                                )
                    ])
        ]).run(sender = CFGZ1)

