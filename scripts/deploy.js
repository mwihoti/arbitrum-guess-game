const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const GuessGame = await hre.ethers.getContractFactory("GuessGame");
    
    // Deploy without parameters first to debug
    const guessGame = await GuessGame.deploy(deployer.address);

    // Wait for the deployment to complete
    await guessGame.waitForDeployment();

    const gameAddress = await guessGame.getAddress();
    console.log("GuessGame deployed to:", gameAddress);
    console.log("Contract owner:", deployer.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });