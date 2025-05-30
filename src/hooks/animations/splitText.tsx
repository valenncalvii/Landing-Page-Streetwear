import React, { useEffect, useState } from "react";

interface SplitTextProps {
  text: string;
}

const SplitText: React.FC<SplitTextProps> = ({ text }) => {
  const [animatedLetters, setAnimatedLetters] = useState<string[]>([]);

  useEffect(() => {
    let currentIndex = 0;
    const lettersArray = text.split("");
    const interval = setInterval(() => {
      setAnimatedLetters((prev) => [...prev, lettersArray[currentIndex]]);
      currentIndex++;
      if (currentIndex >= lettersArray.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="flex flex-row items-center gap-2">
      {animatedLetters.map((letter, index) => (
        <span
          key={index}
          className="text-primary font-bold text-[200px] tracking-tight"
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default SplitText;
