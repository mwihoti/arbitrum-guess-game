import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import GuessGameABI from '../artifacts/contracts/GuessGame.sol/GuessGame.json'

export default function Home() {

    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');
    const [contract, setContract] = useState(null);
    const [signer, setSigner] = useState(null);

    useEffect(() => {
        const init = async () => {
            if (typeof window.ethereum !== 'undefined') {
                try {
                    await window.ethereum.request({ method: 'eth_requestAccounts' });
                    const provider = new ethers.providers.Web3Provider(window.ethereum); // Corrected here
                    const signer = provider.getSigner();
                    setSigner(signer);
    
                    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS; // Assuming you stored the address in .env
                    const guessGameContract = new ethers.Contract(contractAddress, GuessGameABI.abi, signer);
                    setContract(guessGameContract);
                } catch (error) {
                    console.error('Failed to connect to wallet:', error);
                    setMessage('Failed to connect to wallet. Please make sure you have MetaMask installed and connected to the Arbitrum network.');
                }
            } else {
                setMessage('Please install MetaMask to use this dApp.');
            }
        };
        init();
    }, []);

    const handleGuess = async (e) => {
        e.preventDefault()
        if (!contract || !signer) {
            setMessage('Please connect your wallet first')
            return
        }

        try {
            const tx = await contract.guess(guess, { value: ethers.utils.parseEther('0.01')})
            await tx.wait()
            const event = tx.events.find(event => event.event === "NumberGuessed"  ) 
            const [player, guessedNumber, won] = event.args

            if (won) {
                setMessage('Congratulations! You guessed correctly and won the  prize!')
            } else {
                setMessage('Sorry, your guess was incorrect. Try again!')
            }
 
        } catch (error) {
            console.error('Error making guess:', error)
            setMessage('Error making guess. Please try again!')
        }
    }

    return (
        <div className="miin-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold text-center mb-6">Guess the number</h1>
                <form onSumit={handleGuess} className="space-y-4">
                    <div>
                        <label htmlFor="guess" className="block text-sm fot-medium text-gray-700">
                            Enter your guess (1-10):
                        </label>

                        <input 
                        type="number"
                        id="guess"
                        min="1"
                        max="10"
                        value={guess}
                        onChange={e => setGuess(e.target.value)}
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
        {message && (
          <div className="mt-4 text-center text-sm text-gray-600">
            {message}
          </div>
        )}
            </div>
        </div>
    )
}