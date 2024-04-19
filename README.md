# Pragma Template 🧪

This contract has been taken from here - https://github.com/astraly-labs/pragma-hack

## Set up your environment

Follow [this](https://docs.starknet.io/documentation/quick_start/environment_setup/) guide to setup the environment for the project and install starkli

Make sure you have exported the following environment variables:

```bash
export STARKNET_RPC=YOUR_RPC_URL
export STARKNET_ACCOUNT=Path to your account
export STARKNET_KEYSTORE=Path to your keystore
```

## Declare the contract

```bash
make declare
```

This will return class hash. We will need this to deploy the contract.

## Deploy the contract

```bash
make CLASS_HASH=<Replace with class hash that you received above> deploy
```

This will return contract address. We will need this to interact with the contract.

## Interact with the contract

First initialise the contract with the oracle and summary stats contract addresses

```bash
make CONTRACT_ADDRESS=<Replace with the contract address that you received above> initialise-pragma
```

This will return the transaction hash. You can check the status of the transaction using the transaction hash on [starkscan](https://sepolia.starkscan.co/)

Play with other functions with the commands listed in the [Makefile](Makefile)

Note: the Pragma oracle contract addresses used in the Makefile are the ones deployed on the Sepolia testnet. You can replace them with the addresses of the contracts on mainnet if you want to interact with the mainnet contracts.

Find more details about the Pragma oracle [here](https://docs.pragma.build/Resources/Cairo%201/data-feeds/consuming-data)
