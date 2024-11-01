// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract GuessGame is Ownable {
    using Strings for uint256;

    uint256 private number;
    uint256 public betAmount = 0.00000001 ether;
    //uint256 public prize = 0.0000005 ether;
    // implementing number randomness
    uint256 private nonce;

    // mapping to track each player's points
    mapping(address => uint256) public playerPoints;

    

    event NumberGuessed(address player, uint256 guessedNumber, bool won);
    event PointsAwarded(address player, uint256 points);


    // constructor to set the owner of the contract

    constructor(address initialOwner) Ownable(initialOwner) {
        generateNumber();

    }

    function generateNumber() private {
        // Combine multiple sources of randomness

        uint256 randomNumber = uint256(
            keccak256(
                abi.encodePacked(
                    block.timestamp,
                    block.prevrandao,
                    msg.sender,
                    nonce,
                    blockhash(block.number -1)
                )
            )
        );

        // Get a number between 1 and 10
        number = (randomNumber % 10) + 1;

        // Increment nonce for next random number

        nonce++;

        


    }
    
    function guess(uint256 _guess) external payable {
        require(msg.value == betAmount, "Incorrect bet amount");
        require(_guess > 0 && _guess <= 10, "Number must be between 1 and 10");

        // Award 5 points for making a guess
        playerPoints[msg.sender] += 5;

        bool won = (_guess == number);

        if (won) {
            // Award an addittional 15 points for a correct guess 
            playerPoints[msg.sender] += 15;
            // Generate a new number after correct guess
            
        }

        emit NumberGuessed(msg.sender, _guess, won);
        emit PointsAwarded(msg.sender, playerPoints[msg.sender]);
    }

    function getPoints(address _player) external view returns (uint256) {
        return playerPoints[_player];
    }
    //Add funtion to manually trigger new number generation
    function forcedNewNumber() external onlyOwner {
        generateNumber();
    }

    //Add function to get the current block information 
    function getBlockInfo() external view returns (uint256 timestamp, uint256 blockNumber, bytes32 prevHash) {
       return (
        block.timestamp,
        block.number,
        blockhash(block.number - 1)
       );
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}