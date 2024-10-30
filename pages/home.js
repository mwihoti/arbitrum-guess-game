import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Trophy, Dice, Coins } from 'lucide-react'


export default function Home() {
    const { isConnected } = useAccount()
    const router = useRouter()

    useEffect(() => {
        if  (isConnected) {
            router.push('/index')

        } 
    }, [isConnected, router])


    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-800 text-white">
            <div className="container mxauto px-4 py-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-8">Number Guessing Game</h1>
                    <p className="text-xl mb-12 text-gray-300">
                        Test your luck and earn points  by guessing the contract number!
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-gray-800 p-6 rounded-lg">
                            <div className='flex justify-center mb-4'>
                                <Dice className="w-12 h-12 text-blue-400"/>
                            </div>
                            <h3 className="text-xl font-semibold mb-2"> Simple GamePlay</h3>
                            <p className="text-gray-400">Guess a number between 1 and 10</p>
                        </div>

                        <div className="bg-gray-800 p-6 rounded-lg">
                            <div className='flex justify-center mb-4'>
                                <Trophy className="w-12 h-12 text-yellow-400"/>

                            </div>
                            <h3 className="text-xl font-semibold mb-2">Earn Points</h3>
                            <p className="text-gray-400">Earn points for correct guesses</p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg">
                        <div className='flex justify-center mb-4'>
                            <Coins className="w-12 h-12 text-green-400"/>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Small Bet</h3>
                        <p className="text-gray-400">Minimal ETH required toplay</p>
                    </div>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-lg mb-12">
                        <h2 className="text-2xl font-bold mb-4">How to Play</h2>
                        <ol className="text-left text-gray-300 space-y-2">
                            <li>1. Connect your wallet using the button below</li>
                            <li>2. Place a small bet in Eth</li>
                            <li>3. Guess a number between 1 and 10</li>
                            <li>4. Win points for correct guesses!</li>
                        </ol>
                    </div>

                    <div className="inline-block">
                        <ConnectButton />
                    </div>
                </div>
            </div>

        </div>
    )
 }