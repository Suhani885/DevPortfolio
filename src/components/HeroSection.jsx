import { ChevronDown, Download } from "lucide-react";
const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
  >
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse
        bg-gradient-to-r from-blue-300/40 via-blue-200/30 to-blue-300/40 
        dark:from-amber-400/5 dark:via-rose-400/5 dark:to-purple-400/5"
      ></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse
        bg-gradient-to-r from-blue-200/40 via-blue-100/30 to-blue-200/40
        dark:from-purple-400/5 dark:via-amber-400/5 dark:to-rose-400/5"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>

    <div className="text-center max-w-6xl mx-auto px-4 relative z-10">
      <div className="mb-8">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-thin mb-6 tracking-wider leading-tight">
          <span
            className="bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500
            dark:from-amber-200 dark:via-rose-200 dark:to-purple-200
            bg-clip-text text-transparent animate-gradient "
          >
            FRONTEND
          </span>
          <br />
          <span className="text-gray-900 dark:text-white/90 font-extralight">
            DEVELOPER
          </span>
        </h1>
      </div>

      <div className="mb-12">
        <p
          className="text-lg md:text-xl mb-6 leading-relaxed max-w-3xl mx-auto font-light tracking-wide
          text-gray-700 dark:text-amber-100/70"
        >
          Crafting exceptional digital experiences with React, JavaScript,
          <br className="hidden sm:block" />
          and modern web technologies through elegant design and clean code
        </p>

        <div
          className="
          flex justify-center space-x-6 text-sm dark:font-light font-medium dark:from-amber-200 dark:via-rose-200 dark:to-purple-200
          bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500
          bg-clip-text text-transparent animate-gradient"
        >
          <span>React.js</span>
          <span>•</span>
          <span>Next.js</span>
          <span>•</span>
          <span>Angular.js</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
        <a
          href="#projects"
          className="group relative px-8 py-4 rounded-lg dark:font-light uppercase text-sm overflow-hidden 
            tracking-wide transform hover:scale-105 transition-all
            backdrop-blur-sm border
            dark:text-amber-100 text-white
           bg-gradient-to-r from-amber-400/50 to-rose-400/50 border-amber-300/70
            dark:bg-gradient-to-r dark:from-amber-400/20 dark:to-rose-400/20 dark:border-amber-300/30 
            hover:from-amber-400/30 hover:to-rose-400/30 hover:border-amber-300/50"
        >
          <span
            className="absolute inset-0 opacity-0 group-hover:opacity-100 
            bg-gradient-to-r from-amber-400/10 to-rose-400/10
            transition-opacity duration-500"
          ></span>
          <span className="relative flex items-center space-x-2">
            <span>View My Work</span>
          </span>
        </a>

        <a
          href="/resume.pdf"
          download="SuhaniSingh_Resume.pdf"
          className="
            group relative px-8 py-4 rounded-lg font-light uppercase text-sm overflow-hidden 
            tracking-wide transform hover:scale-105 transition-all
            backdrop-blur-sm border
            text-gray-800 bg-white/80 hover:bg-white border-blue-200/60
            dark:text-white/80 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/10"
        >
          <span className="relative flex items-center space-x-2">
            <Download className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            <span>Download CV</span>
          </span>
        </a>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
      <div className="animate-bounce">
        <ChevronDown className="w-6 h-6 text-rose-400 dark:text-amber-300/60" />
      </div>
    </div>
  </section>
);

export default HeroSection;
