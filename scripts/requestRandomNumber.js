const hre = require("hardhat");

async function main() {
  const [signer] = await hre.ethers.getSigners();
  const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS"; // Replace with your actual deployed contract address

  const GuessGame = await hre.ethers.getContractFactory("GuessGame");
  const guessGame = GuessGame.attach(contractAddress);

  console.log("Requesting new random number...");
  const tx = await guessGame.connect(signer).requestNewRandomNumber();
  await tx.wait();
  console.log("Random number requested. Transaction hash:", tx.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });