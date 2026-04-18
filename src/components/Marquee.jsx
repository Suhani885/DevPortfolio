const MarqueeContent = ({ items }) => (
  <div className="flex items-center shrink-0 px-4">
    {items.map((item, i) => (
      <div key={i} className="flex items-center mr-10">
        <span className="text-3xl sm:text-5xl md:text-6xl uppercase font-black tracking-tight
          text-rose-500 dark:text-transparent
          dark:bg-clip-text dark:bg-gradient-to-r dark:from-amber-100 dark:to-rose-100
          dark:font-thin dark:tracking-widest"
        >
          {item}
        </span>
        <span className="ml-10 text-2xl text-rose-300 dark:text-amber-400/60">✦</span>
      </div>
    ))}
  </div>
);

const Marquee = ({ text = "AVAILABLE FOR WORK", speed = 90 }) => {
  const repeatedText = new Array(20).fill(text);

  return (
    <div className="relative w-full my-16 transform -rotate-1 z-20">
      <div className="relative flex w-full overflow-hidden
        bg-rose-50 dark:bg-amber-500/5
        py-4 sm:py-5
        border-y border-rose-200 dark:border-amber-300/20
      ">
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-rose-50 dark:from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-rose-50 dark:from-black to-transparent z-10 pointer-events-none" />

        <div
          className="flex whitespace-nowrap animate-marquee"
          style={{ animationDuration: `${speed}s`, width: 'max-content' }}
        >
          <MarqueeContent items={repeatedText} />
          <MarqueeContent items={repeatedText} />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
