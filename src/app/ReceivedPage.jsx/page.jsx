"use client"
import React from 'react';

const ReceivedPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center text-gray-800">
      <h1 className="text-2xl font-bold text-blue-500 mb-2">Thank You!</h1>
      <p className="text-gray-600 text-sm">Your response has been saved successfully.</p>
      <button
        className="mt-5 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={() => window.location.href = '/'}
      >
        Go to Home
      </button>
    </div>
  );
};

export default ReceivedPage;
