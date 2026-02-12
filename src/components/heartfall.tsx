
"use client";

import React, { useEffect, useState } from 'react';

const Heartfall: React.FC = () => {
  const [hearts, setHearts] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const createHearts = () => {
      const count = 30; // Number of hearts
      const newHearts: React.CSSProperties[] = [];
      for (let i = 0; i < count; i++) {
        newHearts.push({
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 5 + 8}s`, // 8 to 13 seconds
          animationDelay: `${Math.random() * 7}s`,
          opacity: Math.random() * 0.5 + 0.3, // 0.3 to 0.8
          fontSize: `${Math.random() * 12 + 10}px`, // 10px to 22px
        });
      }
      setHearts(newHearts);
    };

    createHearts();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
      {hearts.map((style, index) => (
        <div key={index} className="heart" style={style}>
          ♥
        </div>
      ))}
    </div>
  );
};

export default Heartfall;
