// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";


contract GuessGame is Ownable {
    uint256 private number = 5;
    uint256 public betAmount = 0.00000001 ether;
    //uint256 public prize = 0.0000005 ether;


    // mapping to track each player's points
    mapping(address => uint256) public playerPoints;


    event NumberGuessed(address player, uint256 guessedNumber, bool won);
    event PointsAwarded(address player, uint256 points);

    // constructor to set the owner of the contract

    constructor(address initialOwner) Ownable(initialOwner) {}

    function setNumber(uint256 _number) external onlyOwner {

        require(_number > 0 && _number <= 10, "Number must be between 1 and 10");
        number = _number;
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
        }

        emit NumberGuessed(msg.sender, _guess, won);
        emit PointsAwarded(msg.sender, playerPoints[msg.sender]);
    }

    function getPoints(address _player) external view returns (uint256) {
        return playerPoints[_player];
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}