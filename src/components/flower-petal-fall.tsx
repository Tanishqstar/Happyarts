"use client";

import React, { useEffect, useState } from 'react';

const colors = [
  '#f97316', // orange-500
  '#ef4444', // red-500
  '#facc15', // yellow-400
  '#fbbf24', // amber-400
  '#ea580c', // orange-600
];

const FlowerPetalFall: React.FC = () => {
  const [petals, setPetals] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const createPetals = () => {
      const count = 40; // Number of petals
      const newPetals: React.CSSProperties[] = [];
      for (let i = 0; i < count; i++) {
        newPetals.push({
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 6 + 6}s`, // 6 to 12 seconds
          animationDelay: `${Math.random() * 5}s`,
          opacity: Math.random() * 0.4 + 0.4, // 0.4 to 0.8
          backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          width: `${Math.random() * 10 + 10}px`, // 10px to 20px
          height: `${Math.random() * 15 + 15}px`, // 15px to 30px
          borderRadius: '50% 0 50% 50%', // Petal shape
          transform: `rotate(${Math.random() * 360}deg)`,
        });
      }
      setPetals(newPetals);
    };

    createPetals();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {petals.map((style, index) => (
        <div key={index} className="absolute top-[-10%] petal-animate" style={style}></div>
      ))}
    </div>
  );
};

export default FlowerPetalFall;
