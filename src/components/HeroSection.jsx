import { ChevronDown, Download, ArrowRight } from "lucide-react";

const HeroSection = ({ isVisible }) => (
  <section
    id="home"
    className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden"
  >
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-amber-400/5 to-rose-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/5 to-amber-400/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </div>

    <div className="text-center max-w-6xl mx-auto px-4 relative z-10">
      <div
        className={`transform transition-all duration-1500 ${
          isVisible.home
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-thin mb-6 tracking-wider leading-tight">
            <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-purple-200 bg-clip-text text-transparent animate-gradient">
              FRONTEND
            </span>
            <br />
            <span className="text-white/90 font-extralight">DEVELOPER</span>
          </h1>
        </div>

        <div className="mb-12">
          <p className="text-lg md:text-xl text-amber-100/70 mb-6 leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
            Crafting exceptional digital experiences with React, JavaScript,
            <br className="hidden sm:block" />
            and modern web technologies through elegant design and clean code
          </p>
          <div className="flex justify-center space-x-6 text-sm text-amber-200/60 font-light">
            <span>JavaScript</span>
            <span>•</span>
            <span>React.js</span>
            <span>•</span>
            <span>Angular.js</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-400/20 to-rose-400/20 border border-amber-300/30 rounded-lg font-light text-amber-100 hover:bg-gradient-to-r hover:from-amber-400/30 hover:to-rose-400/30 hover:border-amber-300/50 transform hover:scale-105 transition-all duration-500 backdrop-blur-sm tracking-wide uppercase text-sm overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-rose-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative flex items-center space-x-2">
              <span>View My Work</span>
            </span>
          </a>

          <a
            href="/resume.pdf"
            download="SuhaniSingh_Resume.pdf"
            className="group relative px-8 py-4 border border-white/20 rounded-lg font-light text-white/80 hover:bg-white/5 hover:border-white/30 transform hover:scale-105 transition-all duration-500 backdrop-blur-sm tracking-wide uppercase text-sm overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative flex items-center space-x-2">
              <Download className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Download CV</span>
            </span>
          </a>
        </div>
      </div>
    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
      <div className="animate-bounce">
        <ChevronDown className="w-5 h-5 text-amber-300/60" />
      </div>
    </div>

    <style jsx>{`
      @keyframes gradient {
        0%,
        100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 6s ease-in-out infinite;
      }
    `}</style>
  </section>
);

export default HeroSection;
