# Guess Game

# OverView

GuessGame is a smart contract-based game deployed on the Ethereum blockchain. Players participate
by guessing a number, and if they guess correctly, they win a prize. The game is owned and managed
by a single owner who sets the target number and manages the funds.


## Features

- **Play the Game**: Players can guess a number between 1 and 10.
- **Betting**: A small fee (0.01 ether) is required to play.
- **Winning**: Correct guesses win a prize of 0.05 ether.
- **Owner Management**: The contract owner can set the target number and withdraw the contract balance.


## Getting Started

### Prerequisites

- Node.js (v12 or later)
- Hardhat
- Ethers.js
- OpenZeppelin Contracts

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd guess-game


```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
