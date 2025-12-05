
"use client";

import React, { useEffect, useState } from 'react';

const Snowfall: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const createSnowflakes = () => {
      const count = 100; // Number of snowflakes
      const newSnowflakes: React.CSSProperties[] = [];
      for (let i = 0; i < count; i++) {
        const size = Math.random() * 3 + 1; // 1px to 4px
        newSnowflakes.push({
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 8 + 7}s`, // 7 to 15 seconds
          animationDelay: `${Math.random() * 10}s`,
          opacity: Math.random() * 0.7 + 0.3, // 0.3 to 1.0
          width: `${size}px`,
          height: `${size}px`,
        });
      }
      setSnowflakes(newSnowflakes);
    };

    createSnowflakes();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]">
      {snowflakes.map((style, index) => (
        <div key={index} className="snowflake" style={style} />
      ))}
    </div>
  );
};

export default Snowfall;
