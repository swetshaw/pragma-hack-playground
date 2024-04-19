declare:
	starkli declare target/dev/hack_template_HackTemplate.contract_class.json --compiler-version=2.6.2

deploy:
	echo $(CLASS_HASH)
	starkli deploy $(CLASS_HASH) --max-fee-raw 6252182952212

initialise-pragma:
	echo $(CONTRACT_ADDRESS)
	starkli invoke $(CONTRACT_ADDRESS) initializer 0x36031daa264c24520b11d93af622c848b2499b66b41d611bac95e13cfca131a 0x54563a0537b3ae0ba91032d674a6d468f30a59dc4deb8f0dce4e642b94be15c --max-fee-raw 8775723752950

check-eth-threshold:
	starkli call $(CONTRACT_ADDRESS) check_eth_threshold 2

get-asset-price:
	starkli call $(CONTRACT_ADDRESS) get_asset_price $(ASSET_ID)

realized-volatility:
	starkli call $(CONTRACT_ADDRESS) realized_volatility $(DURATION_IN_SECONDS)
