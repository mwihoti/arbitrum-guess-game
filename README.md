# Guess Game
Guess the Number - Arbitrum Sepolia dApp Adventure

# OverView

Guess the Number is a decentralized application (dApp) that allows users to play a number guessing game on the Arbitrum Sepolia network. Players connect their wallets, place small bets using testnet ETH, and guess a number between 1 and 10. Correct guesses earn points, creating an engaging and educational blockchain gaming experience.

* This project addresses several challenges:

- It provides a low-stakes, accessible entry point for users new to blockchain technology and dApps.
- It demonstrates the benefits of Layer 2 solutions like Arbitrum for faster, cheaper transactions compared to the         Ethereum mainnet.
- It offers a fun, interactive way for users to learn about smart contract interactions and blockchain transactions.

* "Guess the Number: Arbitrum Adventure" brings several key values to its audience:

- Education: Users learn about wallet connections, transactions, and smart contract interactions in a low-risk environment.
- Experience: Players gain hands-on experience with Layer 2 solutions, understanding their benefits firsthand.
- Entertainment: The game provides a fun, engaging way to interact with blockchain technology.
- Community: As players compete for points, it can foster a sense of community among blockchain enthusiasts.
- Innovation Showcase: For developers and crypto enthusiasts, it demonstrates how traditional games can be reimagined on the blockchain.

## Features

Connect your wallet using RainbowKit
- Place bets using Arbitrum Sepolia testnet ETH
- Earn points for correct guesses
- Responsive design for both desktop and mobile
- Celebratory animations for winning guesses

## Technologies Used

- Next.js
- React
- Wagmi
- RainbowKit
- Ethers.js
- Solidity (for smart contracts)
- Tailwind CSS

### Prerequisites
Before you begin,ensure you have met the following requirements:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)
- MetaMask or another Ethereum wallet that supports Arbitrum Sepolia
- Some Arbitrum Sepolia testnet ETH (you can get this from a faucet)

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/mwihoti/arbitrum-guess-game.git]
   cd arbitrum-guess-game

   ```bash
2. Install the dependencies:

   ```bash
   npm install or npm install--legacy-peer-deps

   ```bash

3. Create a `.env.local` file in the root directory and add your environment variables:
   ```bash
   NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address_here
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_wallet_connect_project_id_here
   ```bash

4. Run the development server:
   ```bash
   npm run dev
   ```bash

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1. Connect your wallet using the "Connect Wallet" button on the home page.
2. Ensure you're connected to the Arbitrum Sepolia network in your wallet.
3. Once connected, you'll be redirected to the game page.
4. Enter your guess (a number between 1 and 10) and submit.
5. If your guess is correct, you'll see a celebration animation and earn points!
6. Keep playing to earn more points and climb the leaderboard.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/mwihoti/arbitrum-guess-game.git).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements

- [Arbitrum](https://arbitrum.io/) for providing the Layer 2 scaling solution
- [RainbowKit](https://www.rainbowkit.com/) for the wallet connection UI
- [Wagmi](https://wagmi.sh/) for React Hooks for Ethereum
- [Next.js](https://nextjs.org/) for the React framework
- [Tailwind CSS](https://tailwindcss.com/) for styling

## Contact

If you have any questions, feel free to reach out to [Your Name] at [danielmwihoti@gmail.com].

Happy guessing! Enjoy!
