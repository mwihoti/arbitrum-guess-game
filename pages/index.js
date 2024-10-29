import React, { useState, useEffect } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, usePublicClient, useWalletClient } from 'wagmi'
import { arbitrumSepolia } from 'wagmi/chains'
import { formatEther } from 'viem'
import GuessGameABI from '../artifacts/contracts/GuessGame.sol/GuessGame.json'

export default function Home() {
  const [guess, setGuess] = useState('')
  const [message, setMessage] = useState('')
  const [betAmount, setBetAmount] = useState(null)
  const [prize, setPrize] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [contractBalance, setContractBalance] = useState('0')
  
  const { address, isConnected, chainId } = useAccount()
  const publicClient = usePublicClient()
  const { data: walletClient } = useWalletClient()
  
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS

  const updateContractBalance = async () => {
    if (!contractAddress) return
    try {
      const balance = await publicClient.getBalance({
        address: contractAddress
      })
      setContractBalance(balance.toString())
    } catch (error) {
      console.error('Error getting contract balance:', error)
    }
  }

  useEffect(() => {
    const initContract = async () => {
      if (!isConnected || chainId !== arbitrumSepolia.id || !contractAddress) {
        return
      }

      try {
        // Get contract values
        const [requiredBet, prizeAmount] = await Promise.all([
          publicClient.readContract({
            address: contractAddress,
            abi: GuessGameABI.abi,
            functionName: 'betAmount'
          }),
          publicClient.readContract({
            address: contractAddress,
            abi: GuessGameABI.abi,
            functionName: 'prize'
          })
        ])

        setBetAmount(requiredBet)
        setPrize(prizeAmount)
        
        // Get contract balance
        await updateContractBalance()
      } catch (error) {
        console.error('Error getting contract values:', error)
        setMessage('Error loading contract values. Please try again.')
      }
    }

    initContract()
    
    // Set up interval to update contract balance
    const intervalId = setInterval(updateContractBalance, 10000)
    return () => clearInterval(intervalId)
  }, [isConnected, chainId, publicClient, contractAddress])

  const handleGuess = async (e) => {
    e.preventDefault()
    
    if (!isConnected) {
      setMessage('Please connect your wallet first')
      return
    }

    if (chainId !== arbitrumSepolia.id) {
      setMessage('Please switch to Arbitrum Sepolia network')
      return
    }

    if (!guess || parseInt(guess) < 1 || parseInt(guess) > 10) {
      setMessage('Please enter a number between 1 and 10')
      return
    }

    if (!walletClient || !contractAddress || !betAmount) {
      setMessage('Wallet not connected properly or contract values not loaded')
      return
    }

    setIsLoading(true)
    try {
      const { request } = await publicClient.simulateContract({
        address: contractAddress,
        abi: GuessGameABI.abi,
        functionName: 'guess',
        args: [BigInt(guess)],
        value: betAmount,
        account: address,
      })

      const hash = await walletClient.writeContract(request)
      
      setMessage('Transaction sent! Waiting for confirmation...')
      
      const receipt = await publicClient.waitForTransactionReceipt({ hash })
      
      // Look for NumberGuessed event
      const logs = await publicClient.getContractEvents({
        address: contractAddress,
        abi: GuessGameABI.abi,
        eventName: 'NumberGuessed',
        fromBlock: receipt.blockNumber,
        toBlock: receipt.blockNumber
      })

      if (logs && logs.length > 0) {
        const event = logs[0]
        const { player, guessedNumber, won } = event.args
        
        if (won) {
          setMessage(`🎉 Congratulations! You guessed correctly and won ${prize ? formatEther(prize) : '0'} ETH!`)
        } else {
          setMessage('😔 Sorry, your guess was incorrect. Try again!')
        }

        // Update contract balance after guess
        await updateContractBalance()
      } else {
        setMessage('No event found. Please check the transaction on the block explorer.')
      }
    } catch (error) {
      console.error('Error making guess:', error)
      
      if (error instanceof Error) {
        if (error.message.includes('user rejected')) {
          setMessage('Transaction cancelled')
        } else if (error.message.includes('insufficient funds')) {
          setMessage('Error: Insufficient funds in your wallet')
        } else if (error.message.includes('Incorrect bet amount')) {
          setMessage(`Please send exactly ${betAmount ? formatEther(betAmount) : '0'} ETH as bet amount`)
        } else {
          setMessage('Error making guess. Please try again.')
        }
      } else {
        setMessage('An unknown error occurred. Please try again.')
      }
    } finally {
      setIsLoading(false)
      setGuess('')  // Reset guess input after attempt
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
          <>
            <div className="space-y-2 mb-4 text-sm text-center">
              <div className="text-gray-600">
                Bet amount: {betAmount ? formatEther(betAmount) : '0'} ETH
              </div>
              <div className="text-green-600 font-medium">
                Prize pool: {prize ? formatEther(prize) : '0'} ETH
              </div>
              <div className="text-blue-600">
                Contract balance: {contractBalance ? formatEther(contractBalance) : '0'} ETH
              </div>
            </div>
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
                disabled={isLoading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Submitting...' : 'Submit Guess'}
              </button>
            </form>
          </>
        )}
        {message && (
          <div className={`mt-4 text-center text-sm ${
            message.includes('Congratulations')
              ? 'text-green-600'
              : message.includes('Error')
                ? 'text-red-600'
                : 'text-gray-600'
          }`}>
            {message}
          </div>
        )}
      </div>
    </div>
  )
}