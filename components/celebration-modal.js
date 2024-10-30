import { useEffect } from "react";
import  confetti  from "canvas-confetti";

export default function CelebrationModal({ isOpen, onClose, points}) {

    useEffect(() => {
        if (isOpen) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            })

            const timer = setTimeout(() => {
                onClose()

            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [isOpen, onClose])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 transform animate-bounce">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">🎉 Congratulations! 🎉</h2>
            <p className="text-xl mb-4">You guessed the correct number!</p>
            <p className="text-2xl font-bold text-green-600 mb-4">
              +15 Points Earned!
            </p>
            <p className="text-gray-600 text-sm">
              Total Points: {points}
            </p>
            <p className="text-gray-500 text-sm mt-4">
              The game will reset in 5 seconds...
            </p>
          </div>
        </div>
        </div>
    )
}