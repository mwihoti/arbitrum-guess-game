import React, { useState, useEffect } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount, usePublicClient, useWalletClient } from 'wagmi'
import { arbitrumSepolia } from 'wagmi/chains'
import { formatEther } from 'viem'
import { useRouter } from 'next/router'
import GuessGameABI from '../artifacts/contracts/GuessGame.sol/GuessGame.json'
import CelebrationModal from '../components/celebration-modal'
import TryAgainPopup from '../components/TryAgainPopup'

export default function Game() {
  const [guess, setGuess] = useState('')
  const [message, setMessage] = useState('')
  const [betAmount, setBetAmount] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [playerPoints, setPlayerPoints] = useState(null)
  const [showCelebration, setShowCelebration] = useState(false)
  const [showTryAgain, setShowTryAgain] = useState(false)
  const [correctNumber, setCorrectNumber] = useState(null)
  
  const { address, isConnected, chainId } = useAccount()
  const publicClient = usePublicClient()
  const { data: walletClient } = useWalletClient()
  const router = useRouter()
  
  const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS

  useEffect(() => {
    if (!isConnected) {
      router.push('/')
    }
  }, [isConnected, router])

  const updatePlayerPoints = async () => {
    if (!contractAddress || !address) return
    try {
      const points = await publicClient.readContract({
        address: contractAddress,
        abi: GuessGameABI.abi,
        functionName: 'getPoints',
        args: [address]
      })
      setPlayerPoints(points.toString())
    } catch (error) {
      console.error('Error getting player points:', error)
    }
  }

  useEffect(() => {
    const initContract = async () => {
      if (!isConnected || chainId !== arbitrumSepolia.id || !contractAddress) {
        return
      }

      try {
        const requiredBet = await publicClient.readContract({
          address: contractAddress,
          abi: GuessGameABI.abi,
          functionName: 'betAmount'
        })
        setBetAmount(requiredBet)
        await updatePlayerPoints()
      } catch (error) {
        console.error('Error getting contract values:', error)
        setMessage('Error loading contract values. Please try again.')
      }
    }

    initContract()
  }, [isConnected, chainId, publicClient, contractAddress, address])

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
      
      const logs = await publicClient.getContractEvents({
        address: contractAddress,
        abi: GuessGameABI.abi,
        eventName: 'NumberGuessed',
        fromBlock: receipt.blockNumber,
        toBlock: receipt.blockNumber
      })

      if (logs && logs.length > 0) {
        const event = logs[0]
        const { guessedNumber, won } = event.args
        
        await updatePlayerPoints()

        if (won) {
          setShowCelebration(true)
        } else {
          setCorrectNumber(guessedNumber.toString())
          setShowTryAgain(true)
        }
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
      setGuess('')
    }
  }

  const handleTryAgain = () => {
    setShowTryAgain(false)
    setGuess('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
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
                Your Points: {playerPoints !== null ? playerPoints : '0'}
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
      <CelebrationModal 
        isOpen={showCelebration}
        onClose={() => setShowCelebration(false)}
        points={playerPoints}
      />
      <TryAgainPopup
        isOpen={showTryAgain}
        onClose={() => setShowTryAgain(false)}
        onTryAgain={handleTryAgain}
      />
    </div>
  )
}