require("dotenv").config();
require("@nomiclabs/hardhat-truffle5");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-web3");
require("@openzeppelin/hardhat-upgrades");
const tdly = require("@tenderly/hardhat-tenderly");
const TENDERLY_RPC_URL = process.env.TENDERLY_RPC_URL;
const TENDERLY_USERNAME = process.env.TENDERLY_USERNAME;
const TENDERLY_PROJECT_NAME = process.env.TENDERLY_PROJECT_NAME;

tdly.setup({ automaticVerifications: false });

module.exports = {
  networks: {
    hardhat: {
      forking: {
        url: "https://polygon-rpc.com/",
        blockNumber: 51853456,
      },
    },
    tenderly: {
      url: TENDERLY_RPC_URL,
      chainId: 137,
    },
    local: {
      url: "https://polygon-rpc.com/",
    },
  },

  tenderly: {
    username: TENDERLY_USERNAME,
    project: TENDERLY_PROJECT_NAME,
  },

  etherscan: {},
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  mocha: {
    timeout: 240000,
  },
};
