import React, { useState } from 'react';

type Sparkle = {
  id: number
  top: string
  left: string
  size: string
  color: string
  delay: string
};

const getRandomSparkle = (id: number): Sparkle => {
  return {
    id,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 0.1 + 0.3}rem`, // 0.5rem to 1rem
    color: ['#a0a0a0', '#909090', '#808080'][Math.floor(Math.random() * 3)], // white, yellow, blue
    delay: `${Math.floor(Math.random() * 300)}ms`,
  }
}

const SparkleText: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  const handleMouseEnter = () => {
    const newSparkles = Array.from({ length: 4 }).map((_, i) => getRandomSparkle(i))
    setSparkles(newSparkles)
  }

  const handleMouseLeave = () => {
    setSparkles([])
  }

  return (
    <span
      className="relative inline-block cursor-pointer group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="relative z-0">{children}</span>
      <span className="absolute inset-0 z-10 pointer-events-none">
        {sparkles.map((sparkle) => (
          <span
            key={sparkle.id}
            className="sparkle absolute rounded-full"
            style={{
              top: sparkle.top,
              left: sparkle.left,
              width: sparkle.size,
              height: sparkle.size,
              backgroundColor: sparkle.color,
              animationDelay: sparkle.delay,
            }}
          />
        ))}
      </span>
    </span>
  )
}

export default SparkleText
