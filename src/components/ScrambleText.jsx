import { useState, useEffect, useRef } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789§±!@#$%^&*()_+-=[]{}|;:,.<>?';

const ScrambleText = ({ text, className = "" }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef(null);

  const startScramble = () => {
    let iteration = 0;
    
    clearInterval(intervalRef.current);
    
    intervalRef.current = setInterval(() => {
      setDisplayText(text
        .split('')
        .map((letter, index) => {
          if (index < iteration) {
            return text[index];
          }
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join('')
      );
      
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }
      
      iteration += 1 / 3; 
    }, 30);
  };

  useEffect(() => {
    startScramble();
    
    return () => clearInterval(intervalRef.current);
  }, [text]);

  const handleMouseEnter = () => {
    setIsHovering(true);
    startScramble();
  };

  return (
    <span 
      className={`font-mono inline-block cursor-crosshair transition-colors duration-300 ${isHovering ? 'text-rose-500 dark:text-amber-100' : ''} ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
    </span>
  );
};

export default ScrambleText;
