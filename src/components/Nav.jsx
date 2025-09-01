import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-1 ring-amber-300/30 hover:ring-amber-300/60 transition-all duration-500 shadow-md hover:shadow-amber-300/20 transform hover:scale-105">
                  <img
                    src="/profile.jpeg"
                    alt="Suhani Singh"
                    className="w-full h-full object-cover filter hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-300 to-rose-300 rounded-full opacity-0 group-hover:opacity-15 blur transition-all duration-500"></div>
              </div>
              <div className="relative">
                <div className="text-lg sm:text-xl font-light tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-rose-200 hover:from-amber-200 hover:to-amber-300 transition-all duration-500">
                  SUHANI SINGH
                </div>
                <div className="absolute -bottom-0.5 left-0 w-0 h-px bg-gradient-to-r from-amber-300 to-rose-300 transition-all duration-700 group-hover:w-full opacity-50"></div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Contact",
              ].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-sm font-light tracking-wide text-amber-100/80 hover:text-white transition-all duration-300 group uppercase rounded-md hover:bg-white/5"
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  <span className="relative z-10">{item}</span>
                  <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent transition-all duration-500 group-hover:w-3/4"></span>
                </a>
              ))}
            </div>

            <button
              className="md:hidden relative w-8 h-8 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-amber-300/50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 rounded-md bg-gradient-to-r from-amber-300/10 to-rose-300/10 opacity-0 group-hover:opacity-100 transition-all duration-200"></div>
              <div className="relative flex flex-col justify-center items-center space-y-1">
                <span
                  className={`w-4 h-0.5 bg-gradient-to-r from-amber-200 to-rose-200 rounded transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`w-4 h-0.5 bg-gradient-to-r from-rose-200 to-amber-200 rounded transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-4 h-0.5 bg-gradient-to-r from-amber-200 to-rose-200 rounded transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div
          className={`absolute top-20 right-4 w-64 bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl transform transition-all duration-300 ${
            isMenuOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"
          }`}
        >
          <div className="p-6">
            <div className="space-y-4">
              {[
                "Home",
                "About",
                "Experience",
                "Projects",
                "Skills",
                "Contact",
              ].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 px-4 text-base font-light tracking-wide text-amber-100/80 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 uppercase border-l-2 border-transparent hover:border-amber-300"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed top-0 left-0 right-0 h-20 overflow-hidden pointer-events-none z-30">
        <div className="absolute top-0 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-rose-300/30 to-transparent animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </>
  );
};

export default Navigation;
