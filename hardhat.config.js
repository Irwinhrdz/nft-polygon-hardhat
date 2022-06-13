require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const MATIC_URL = process.env.MATIC_URL;

const MUMBAI_URL = process.env.MUMBAI_URL;

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
	defaultNetwork: "matic",
	networks: {
		hardhat: {},
		matic: {
			url: MATIC_URL,
			accounts: [PRIVATE_KEY],
		},
		mumbai: {
			url: MUMBAI_URL,
			accounts: [PRIVATE_KEY],
		},
	},
	solidity: {
		version: "0.8.7",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
	etherscan: {
		apiKey: {
			//polygon
			polygon: POLYGONSCAN_API_KEY,
			polygonMumbai: POLYGONSCAN_API_KEY,
		},
	},
};
