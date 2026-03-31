'use client';

import React, { useState } from 'react';

const FrogCalc: React.FC = () => {
  const [display, setDisplay] = useState<string>('0');

  const addToDisplay = (val: string) => {
    setDisplay((prev) => (prev === '0' ? val : prev + val));
  };

  const calculate = () => {
    try {
      const result = new Function(`return ${display}`)();
      setDisplay(String(result));
    } catch {
      setDisplay('Erreur');
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="relative mx-auto mt-12 w-full max-w-[300px]">
      <div className="absolute -top-6 left-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-md">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <div className="w-5 h-5 bg-black rounded-full" />
        </div>
      </div>
      <div className="absolute -top-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-md">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <div className="w-5 h-5 bg-black rounded-full" />
        </div>
      </div>

      <div className="frog bg-green-500 p-6 pt-10 rounded-[50px_50px_40px_40px] shadow-[0_10px_0_#2e7d32] w-full">
        
        <input 
          readOnly 
          role="textbox"
          value={display} 
          className="w-full h-16 bg-green-100 rounded-2xl mb-6 text-right px-4 text-3xl text-green-900 font-mono border-b-4 border-green-200"
        />

        <div className="grid grid-cols-4 gap-2">
          <button 
            onClick={() => setDisplay('0')} 
            className="col-span-4 bg-red-400 hover:bg-red-500 p-3 rounded-xl text-white font-black shadow-sm active:translate-y-1 transition-all mb-2"
          >
            EFFACER (C)
          </button>

          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => btn === '=' ? calculate() : addToDisplay(btn)}
              className={`
                p-4 rounded-xl text-white font-bold text-xl shadow-sm active:translate-y-1 transition-all
                ${btn === '=' ? 'bg-orange-500 hover:bg-orange-600' : 
                  ['/', '*', '-', '+'].includes(btn) ? 'bg-green-700 hover:bg-green-800' : 'bg-green-400 hover:bg-green-300'}
              `}
            >
              {btn}
            </button>
          ))}
        </div>
        
        <p className="text-center mt-4 text-green-900 font-bold opacity-50 text-sm italic">
          Coâ-lculatrice v1.0
        </p>
      </div>
    </div>
  );
};

export default FrogCalc;