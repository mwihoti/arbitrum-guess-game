// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";


contract GuessGame is Ownable {
    uint256 private number = 5;
    uint256 public betAmount = 0.00001 ether;
    uint256 public prize = 0.0005 ether;


    event NumberGuessed(address player, uint256 guessedNumber, bool won);

    // constructor to set the owner of the contract

    constructor(address initialOwner) Ownable(initialOwner) {}

    function setNumber(uint256 _number) external onlyOwner {

        require(_number > 0 && _number <= 10, "Number must be between 1 and 10");
        number = _number;
    }
    function guess(uint256 _guess) external payable {
        require(msg.value == betAmount, "Incorrect bet amount");
        require(_guess > 0 && _guess <= 10, "Number must be between 1 and 10");

        bool won = (_guess == number);

        if (won) {
            payable(msg.sender).transfer(prize);
        }

        emit NumberGuessed(msg.sender, _guess, won);
    }

    function withdraw() external onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}