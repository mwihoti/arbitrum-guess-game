import React, { useState, useEffect } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { ethers } from 'ethers'
import { arbitrumSepolia } from 'wagmi/chains'
//import { createPublicClient, http, parseEther } from 'viem'
import GuessGameABI from '../artifacts/contracts/GuessGame.sol/GuessGame.json'

export default function Home() {
  const [guess, setGuess] = useState('')
  const [message, setMessage] = useState('')
  const [contract, setContract] = useState(null)
  
  const { address, isConnected, chainId} = useAccount()


  useEffect(() => {
    const initContract = async () => {
      if (typeof window.ethereum !== 'undefined' && isConnected && chainId === arbitrumSepolia.id) {
        try {
        const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS

        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        const guessGameContract = new ethers.Contract(contractAddress, GuessGameABI.abi, signer)
        setContract(guessGameContract)
      } catch (error) {
        console.error('Failed to initialize contract:', error)
        setMessage('Failed to initialize contract. Please make sure you are connected to the correct network.')
      }
    } else {
      setContract(null)
    }
  }

  initContract()
}, [isConnected, chainId])

const handleGuess = async (e) => {
  e.preventDefault()
  if (!contract || !isConnected) {
    setMessage('Please connect your wallet first')
    return
  }

  if (chainId !== arbitrumSepolia.id) {
    setMessage('Please switch to Arbitrum Sepolia network')
    return
  }

  try {
    const tx = await contract.guess(guess, { value: ethers.parseEther('0.001') })
   const receipt = await tx.wait()

   const event = receipt.logs.find(log => {
    try {
      const parsedLog = contract.interface.parseLog(log)
      return parsedLog.name === "NumberGuessed"
    } catch {
      return false
    }
   })

    if (won) {
      setMessage('Congratulations! You guessed correctly and won the prize!')
    } else {
      setMessage('Sorry, your guess was incorrect. Try again!')
    }
  } catch (error) {
    console.error('Error making guess:', error)
    setMessage('Error making guess. Please try again.')
  }
}

return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-96">
      <h1 className="text-2xl font-bold mb-6 text-center">Guess the Number</h1>
      <div className="mb-4">
        <ConnectButton />
      </div>
      {isConnected && (
        <form onSubmit={handleGuess} className="space-y-4">
          <div>
            <label htmlFor="guess" className="block text-sm font-medium text-gray-700">
              Enter your guess (1-10):
            </label>
            <input
              type="number"
              id="guess"
              min="1"
              max="10"
              value={guess}
              onChange={(e) => setGuess(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit Guess
          </button>
        </form>
      )}
      {message && (
        <div className="mt-4 text-center text-sm text-gray-600">
          {message}
        </div>
      )}
    </div>
  </div>
)
}