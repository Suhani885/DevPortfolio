import { useState } from "react";
import { useTheme } from "../ThemeContext";
import { Sun, Moon } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Contact",
  ];

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-300
        bg-[#FFF5F7]/90 dark:bg-black/20
        border-b border-rose-200 dark:border-white/10
        backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden
                  ring-2 ring-rose-300 dark:ring-amber-300/30
                  hover:ring-rose-400 dark:hover:ring-amber-300/60
                  transition-all duration-300 shadow-sm shadow-rose-200/60"
                >
                  <img
                    src="/profile.jpeg"
                    alt="Suhani Singh"
                    className="w-full h-full object-cover hover:brightness-110 transition-all duration-300"
                  />
                </div>
              </div>
              <div>
                <div
                  className="text-base sm:text-lg font-bold tracking-wider uppercase
                text-rose-600
                  text-gray-900 dark:text-transparent
                  dark:bg-clip-text dark:bg-gradient-to-r dark:from-amber-100 dark:to-rose-200
                  transition-all duration-300"
                >
                  Suhani Singh
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-sm font-medium uppercase tracking-widest
                    text-gray-600 dark:text-amber-100/80
                    hover:text-rose-500 dark:hover:text-white
                    transition-all duration-200 group rounded-md
                    hover:bg-rose-50 dark:hover:bg-white/5"
                  style={{ transitionDelay: `${index * 30}ms` }}
                >
                  <span className="relative z-10">{item}</span>
                  <span
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-px
                    bg-gradient-to-r from-transparent via-rose-400 to-transparent
                    transition-all duration-400 group-hover:w-3/4"
                  />
                </a>
              ))}

              <button
                onClick={toggleTheme}
                className="ml-3 p-2.5 rounded-full transition-all duration-200
                  bg-rose-100 dark:bg-white/5
                  border border-rose-200 dark:border-white/10
                  hover:bg-rose-200 dark:hover:bg-white/10
                  text-rose-500 dark:text-amber-200"
                aria-label="Toggle theme"
              >
                <div className="relative w-4 h-4">
                  <Sun
                    className={`absolute inset-0 w-4 h-4 transition-all duration-300 ${theme === "light" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}`}
                  />
                  <Moon
                    className={`absolute inset-0 w-4 h-4 transition-all duration-300 ${theme === "dark" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                  />
                </div>
              </button>
            </div>

            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full
                  bg-rose-100 dark:bg-white/5
                  border border-rose-200 dark:border-white/10
                  hover:bg-rose-200 dark:hover:bg-white/10
                  transition-all duration-200 text-rose-500 dark:text-amber-200"
                aria-label="Toggle theme"
              >
                <div className="relative w-4 h-4">
                  <Sun
                    className={`absolute inset-0 w-4 h-4 transition-all duration-300 ${theme === "light" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"}`}
                  />
                  <Moon
                    className={`absolute inset-0 w-4 h-4 transition-all duration-300 ${theme === "dark" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                  />
                </div>
              </button>

              <button
                className="relative w-9 h-9 rounded-full
                  bg-rose-100 dark:bg-white/5
                  border border-rose-200 dark:border-white/10
                  hover:bg-rose-200 dark:hover:bg-white/10
                  transition-all duration-200 group focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative flex flex-col justify-center items-center space-y-1">
                  <span
                    className={`w-4 h-0.5 bg-rose-500 dark:bg-amber-200 rounded transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
                  />
                  <span
                    className={`w-4 h-0.5 bg-rose-400 dark:bg-rose-200 rounded transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
                  />
                  <span
                    className={`w-4 h-0.5 bg-rose-500 dark:bg-amber-200 rounded transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div
          className="absolute inset-0 bg-rose-50/80 dark:bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        <div
          className={`absolute top-20 right-4 w-64
          bg-white/95 dark:bg-black/90
          backdrop-blur-2xl
          border border-rose-200 dark:border-white/20
          rounded-2xl shadow-xl shadow-rose-100/50 dark:shadow-2xl
          transform transition-all duration-300 ${isMenuOpen ? "translate-y-0 scale-100" : "-translate-y-4 scale-95"}`}
        >
          <div className="p-5">
            <div className="space-y-1">
              {navLinks.map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 px-4 text-sm font-medium tracking-wide uppercase
                    text-gray-700 dark:text-amber-100/80
                    hover:text-rose-500 dark:hover:text-white
                    hover:bg-rose-50 dark:hover:bg-white/10
                    rounded-xl transition-all duration-200
                    border-l-2 border-transparent hover:border-rose-400"
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
    </>
  );
};

export default Navigation;
