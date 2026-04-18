import { Download } from "lucide-react";
import ScrambleText from "./ScrambleText";

const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
  >
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse
        bg-gradient-to-r from-rose-200/60 via-amber-200/50 to-orange-200/60
        dark:from-amber-400/20 dark:via-rose-400/20 dark:to-purple-400/20" />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse
          bg-gradient-to-r from-amber-200/60 via-rose-200/50 to-pink-200/60
          dark:from-purple-400/20 dark:via-amber-400/20 dark:to-rose-400/20"
        style={{ animationDelay: "2s" }}
      />
    </div>

    <div className="w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center relative z-10">

      <div className="mb-8">
        <h1 className="text-5xl sm:text-6xl md:text-9xl font-thin mb-6 tracking-wider leading-tight">
          <span className="
            bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500
            dark:from-amber-200 dark:via-rose-200 dark:to-purple-200
            bg-clip-text text-transparent">
            FRONTEND
          </span>
          <br />
          <span className="text-rose-600 dark:text-white/90 font-extralight">
            <ScrambleText text="DEVELOPER" />
          </span>
        </h1>
      </div>

      <div className="mb-12">
        <p className="text-lg md:text-xl mb-6 leading-relaxed max-w-3xl mx-auto font-light tracking-wide
          text-gray-600 dark:text-amber-100/70">
          Crafting exceptional digital experiences with React, JavaScript,
          <br className="hidden sm:block" />
          and modern web technologies through elegant design and clean code
        </p>
        <div className="flex justify-center space-x-6 text-sm
          bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500
          dark:from-amber-200 dark:via-rose-200 dark:to-purple-200
          bg-clip-text text-transparent font-medium dark:font-light">
          <span>React.js</span><span>•</span>
          <span>Next.js</span><span>•</span>
          <span>Angular.js</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <a
          href="#projects"
          className="group relative px-8 py-4 uppercase text-sm overflow-hidden
            tracking-wide transform hover:scale-105 transition-all border
            font-bold rounded-none text-white bg-rose-600 border-rose-600 hover:bg-transparent hover:text-rose-500
            dark:rounded-lg dark:font-light dark:text-amber-100 dark:bg-transparent
            dark:bg-gradient-to-r dark:from-amber-400/20 dark:to-rose-400/20 dark:border-amber-300/30 dark:backdrop-blur-sm
            dark:hover:from-amber-400/30 dark:hover:to-rose-400/30 dark:hover:border-amber-300/50"
        >
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-amber-400/10 to-rose-400/10 transition-opacity duration-500 hidden dark:block" />
          <span className="relative flex items-center space-x-2">
            <span>View My Work</span>
          </span>
        </a>

        <a
          href="/Suhani's Resume.pdf"
          download="SuhaniSingh_Resume.pdf"
          className="group relative px-8 py-4 uppercase text-sm overflow-hidden
            tracking-wide transform hover:scale-105 transition-all border flex items-center gap-2
            font-bold rounded-none text-rose-500 bg-transparent border-rose-600 hover:bg-rose-600 hover:text-white hover:border-rose-500
            dark:rounded-lg dark:font-light dark:text-white/80 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10 dark:backdrop-blur-sm"
        >
          <span className="relative flex items-center space-x-2">
            <Download className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            <span>Download CV</span>
          </span>
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
