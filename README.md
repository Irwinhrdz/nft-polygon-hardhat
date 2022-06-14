# Basic Smart Contract Hardhat Project

This project was created to research about smart contracts on Solidity to be deployed and executed in Mumbai testnet and Polygon mainet.

It uses Hardhat, OpenZeppelin, Alchemy... etc.

Assumes you have installed nodejs and npm

## Getting Started

### Start Hardhat Project

Create a new directory and install hardhat

```
mkdir NFTutorial
cd NFTutorial
npm install --save-dev hardhat
```

We recommend reviewing the [hardhat documentation and tutorial](https://hardhat.org).

Next, start a hardhat project

```
npx hardhat
```

Select "Create a sample hardhat project". You can say yes to everything.

Now you have a hardhat project ready to go!

### Write NFT Contract Code or copy ThreeDigitals.sol and rename de Collection

First, install Open Zeppelin contracts

```
npm install @openzeppelin/contracts
```

Install waffle, ethers dependencies

```
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
```

Install EtherScan

```
npm install --save-dev @nomiclabs/hardhat-etherscan
```

Install dotenv
```
npm install dotenv --save
```
You can delete Greeter.sol and use ThreeDigitals.sol ( rename de Collection )

Try customizing the solidity code with the name of your NFT if you want.

### Compile the contract

To compile the contract, just go

```
npx hardhat compile
```

### Set up .env file

Copy the `.env.example` file in this directory to `.env` (which will be ignored by Git)

```shell
cp .env.example .env
```

Then set each variable on `.env`:

- `MUMBAI_URL`: The Alchemy URL to mumbai testnet got from your account.
- `MATIC_URL`: The Alchemy URL to Polygon mainet (MATIC) got from your account.
- `PRIVATE_KEY`: Private key of the account being used to deploy contract in polygon mainet.
- `POLYGONSCAN_API_KEY`: Polygon API Key got from https://polygonscan.com/ website.

Use https://alchemy.com, blockchain developer platform.

## Deploy to testnet or mainet

To deploy smart contract to mumbai (Polygon testnet):

```shell
npx hardhat  run --network mumbai scripts/deploy.js
```

To deploy smart contract to Polygon mainet (MATIC):

```shell
npx hardhat  run --network matic scripts/deploy.js
```

### Deploy on localhost

First need create a virtual enviroment

```
npx hardhat node
```

Deploy smart contract on localhost

```
npx hardhat  run --network localhost scripts/deploy.js
```

## Verify

When you deploy you can verify your smart contract in polygonscan
Chance DEPLOYED_YOUR_NFT_CONTRACT by the smart contract code followed by the fields that the constructor initializes

to Polygon mainet

`npx hardhat verify --network matic <DEPLOYED_YOUR_NFT_CONTRACT>`

to Polygon mumbai testnet

`npx hardhat verify --network mumbai <DEPLOYED_YOUR_NFT_CONTRACT>`

## Interact with the smart contract (network and local)

Use the Hardhat console

```
npx hardhat console
```

## Steps to release contract (outdated)

1. contracts > Run test on smart contract
2. generate > Generate X number of NFT images
3. ipfs > Upload these images to ipfs using Pinata. Get CID (i.e. QmTiEQ4LLmaMFpsUTbDJthgnCoPygXmiaXRFU8DvsZvUD2)
4. ipfs > Upload json metadata to Pinata. Get CID
5. contracts > Update `deploy.js` to set X as max supply and `https://ipfs.io/ipfs/<CID>` as baseURL
6. contracts > Deploy smart contract
7. polygonscan > Complete form

## Join our Community

![Navbar](http://adigitalab.com/wp-content/uploads/2022/06/Adigitalab-logo.png)

https://adigitalab.com/

[Discord](https://discord.gg/g75Tzt9X)

[Instagram](https://www.instagram.com/adigitalab)

[OpenSea](https://opensea.io/collection/three-digitals) ThreeDigitals collection
