import { useState, useEffect } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [shouldUnmount, setShouldUnmount] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const interval = 30;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const t = currentStep / steps;
      const easedTime = t * (2 - t); 
      const newProgress = Math.min(Math.round(easedTime * 100), 100);
      
      setProgress(newProgress);

      if (newProgress === 100) {
        clearInterval(timer);
        setTimeout(() => setIsComplete(true), 500); 
        setTimeout(() => setShouldUnmount(true), 1500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  if (shouldUnmount) return null;

  return (
    <div 
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-gray-900 dark:bg-black transition-transform duration-1000 cubic-bezier(0.76, 0, 0.24, 1) ${isComplete ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <div className="text-white dark:text-amber-100 text-6xl md:text-9xl font-thin tracking-wider mb-8 tabular-nums">
        {progress}%
      </div>
      <div className="w-64 md:w-96 h-[2px] bg-white/10 relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-rose-400 dark:bg-amber-300 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="absolute bottom-10 uppercase tracking-widest text-xs text-white/40 font-light">
        Suhani' Portfolio
      </div>
    </div>
  );
};

export default Preloader;
