const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    const GuessGame = await hre.ethers.getContractFactory("GuessGame");
    const guessGame = await GuessGame.deploy(deployer.address);

    await guessGame.deployed();

    console.log("GuessGame deployed to:", guessGame.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });