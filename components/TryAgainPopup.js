import React from 'react';

import  { X } from 'lucide-react';

export default function TryAgainPopup({ isOpen, onClose, onTryAgain}) {
    if (!isOpen)  return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    <X size={24} />
                </button>

                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Oops! Not quite right.
                    </h2>
                    <p className="text-lg mb-4">
                        The correct number was <span className='font-bold text-red-500'>...Loading</span> .
                        </p>

                        <p className="text-gray-600 mb-6">Don't worry, you still earned 5 points for trying!</p>

                        <button onClick={onTryAgain} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 font-bold transition duration-300 ease-in-out transform hover:scale-105" >
                            Try Again
                            </button>
                </div>
            </div>

        </div>
    )
}