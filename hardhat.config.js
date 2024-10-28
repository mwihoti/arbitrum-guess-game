require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "";


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    arbitrumSepolia: {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      chainId: 421614,
      accounts: [PRIVATE_KEY]
    }
  }
};
