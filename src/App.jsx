import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  Code,
  Palette,
  Zap,
  Users,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState({});
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="fixed inset-0">
        <div
          className="absolute w-[800px] h-[600px] opacity-40 blur-3xl"
          style={{
            background: `radial-gradient(ellipse at center, 
              rgba(255, 183, 77, 0.4) 0%,
              rgba(255, 138, 101, 0.3) 25%,
              rgba(220, 144, 194, 0.3) 50%,
              rgba(168, 162, 255, 0.2) 75%,
              transparent 100%)`,
            left: mousePosition.x / 8 + "px",
            top: mousePosition.y / 8 + "px",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div
          className="absolute w-[600px] h-[400px] opacity-30 blur-3xl"
          style={{
            background: `radial-gradient(ellipse at center,
              rgba(255, 206, 84, 0.3) 0%,
              rgba(255, 154, 158, 0.25) 40%,
              rgba(162, 155, 254, 0.2) 70%,
              transparent 100%)`,
            right: mousePosition.x / 12 + "px",
            bottom: mousePosition.y / 12 + "px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/40" />
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="text-2xl font-light tracking-wider text-amber-100">
              SUHANI SINGH
            </div>
            <div className="hidden md:flex space-x-10">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-light tracking-wide text-amber-100/80 hover:text-amber-200 transition-all duration-500 relative group uppercase"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-amber-300 to-rose-300 transition-all duration-500 group-hover:w-full" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative pt-20"
      >
        <div className="text-center max-w-6xl mx-auto px-4">
          <div
            className={`transform transition-all duration-1500 ${
              isVisible.home
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-thin mb-8 tracking-wider leading-tight">
              <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-purple-200 bg-clip-text text-transparent">
                FRONTEND
              </span>
              <br />
              <span className="text-white/90 font-extralight">DEVELOPER</span>
            </h1>
            <p className="text-lg md:text-xl text-amber-100/70 mb-12 leading-relaxed max-w-3xl mx-auto font-light tracking-wide">
              Crafting exceptional digital experiences with React, JavaScript,
              <br />
              and modern web technologies through elegant design and clean code
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="px-10 py-4 bg-gradient-to-r from-amber-400/20 to-rose-400/20 border border-amber-300/30 rounded-sm font-light text-amber-100 hover:bg-gradient-to-r hover:from-amber-400/30 hover:to-rose-400/30 hover:border-amber-300/50 transform hover:scale-105 transition-all duration-500 backdrop-blur-sm tracking-wide uppercase text-sm">
                View My Work
              </button>
              <button className="px-10 py-4 border border-white/20 rounded-sm font-light text-white/80 hover:bg-white/5 hover:border-white/30 transform hover:scale-105 transition-all duration-500 backdrop-blur-sm tracking-wide uppercase text-sm">
                Download CV
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-5 h-5 text-amber-300/60" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transform transition-all duration-1500 delay-200 ${
              isVisible.about
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-thin text-center mb-20 tracking-wider">
              <span className="bg-gradient-to-r from-amber-200 to-rose-200 bg-clip-text text-transparent">
                ABOUT ME
              </span>
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8 text-center">
                <p className="text-lg text-amber-100/80 leading-relaxed font-light tracking-wide">
                  I'm a passionate frontend developer creating beautiful,
                  functional, and user-friendly digital experiences. I
                  specialize in React ecosystem and modern JavaScript frameworks
                  with a focus on elegant, minimalist design.
                </p>
                <p className="text-lg text-amber-100/80 leading-relaxed font-light tracking-wide">
                  My expertise spans from pixel-perfect UI implementation to
                  complex state management and performance optimization. I love
                  turning creative designs into interactive realities that
                  inspire and engage users.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                  {[
                    {
                      icon: Code,
                      label: "Clean Code",
                      desc: "Writing maintainable, scalable solutions",
                    },
                    {
                      icon: Palette,
                      label: "UI/UX Focus",
                      desc: "Pixel-perfect, user-centered design",
                    },
                    {
                      icon: Zap,
                      label: "Performance",
                      desc: "Optimized, lightning-fast applications",
                    },
                    {
                      icon: Users,
                      label: "Collaboration",
                      desc: "Excellent team player and communicator",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm rounded-none p-6 border border-white/10 hover:bg-gradient-to-b hover:from-amber-500/10 hover:to-rose-500/10 hover:border-amber-300/30 transition-all duration-700 group"
                    >
                      <item.icon className="w-8 h-8 text-amber-300 mb-4 mx-auto group-hover:text-amber-200 transition-colors duration-500" />
                      <h3 className="font-light mb-2 text-amber-100 tracking-wide uppercase text-sm">
                        {item.label}
                      </h3>
                      <p className="text-sm text-amber-100/60 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transform transition-all duration-1500 delay-300 ${
              isVisible.projects
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-thin text-center mb-20 tracking-wider">
              <span className="bg-gradient-to-r from-amber-200 to-rose-200 bg-clip-text text-transparent">
                PROJECTS
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-none overflow-hidden border border-white/10 hover:border-amber-300/30 transition-all duration-700 hover:transform hover:scale-105 hover:bg-gradient-to-b hover:from-amber-500/10 hover:to-rose-500/10"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-light mb-4 group-hover:text-amber-200 transition-colors tracking-wide uppercase text-sm">
                      {project.title}
                    </h3>
                    <p className="text-amber-100/70 mb-6 text-sm leading-relaxed font-light">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-amber-500/10 text-amber-300/80 rounded-none text-xs border border-amber-500/20 font-light tracking-wide"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-6">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 text-amber-100/60 hover:text-amber-200 transition-colors duration-500 text-sm font-light tracking-wide uppercase"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-2 text-amber-100/60 hover:text-rose-300 transition-colors duration-500 text-sm font-light tracking-wide uppercase"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transform transition-all duration-1500 delay-400 ${
              isVisible.skills
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-thin text-center mb-20 tracking-wider">
              <span className="bg-gradient-to-r from-amber-200 to-rose-200 bg-clip-text text-transparent">
                SKILLS & TECHNOLOGIES
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-none p-8 border border-white/10 hover:border-amber-300/30 transition-all duration-700 group hover:bg-gradient-to-b hover:from-amber-500/10 hover:to-rose-500/10"
                >
                  <div className="flex items-center mb-6">
                    <span className="text-3xl mr-4">{skill.icon}</span>
                    <h3 className="font-light group-hover:text-amber-200 transition-colors tracking-wide uppercase text-sm">
                      {skill.name}
                    </h3>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-white/10 rounded-none h-1 mb-3">
                      <div
                        className="bg-gradient-to-r from-amber-400 to-rose-400 h-1 rounded-none transition-all duration-2000 ease-out"
                        style={{
                          width: isVisible.skills ? `${skill.level}%` : "0%",
                        }}
                      />
                    </div>
                    <span className="text-sm text-amber-100/60 font-light tracking-wide">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transform transition-all duration-1500 delay-500 ${
              isVisible.contact
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-thin text-center mb-20 tracking-wider">
              <span className="bg-gradient-to-r from-amber-200 to-rose-200 bg-clip-text text-transparent">
                LET'S WORK TOGETHER
              </span>
            </h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-none p-12 border border-white/10 hover:border-amber-300/30 transition-all duration-700 hover:bg-gradient-to-b hover:from-amber-500/10 hover:to-rose-500/10">
              <p className="text-center text-xl text-amber-100/80 mb-12 font-light tracking-wide leading-relaxed">
                Ready to bring your ideas to life? Let's create something
                <br />
                amazing together through elegant design and innovation.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
                <a
                  href="mailto:suhaniss885@gmail.com"
                  className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-400/20 to-rose-400/20 border border-amber-300/30 rounded-none hover:from-amber-400/30 hover:to-rose-400/30 hover:border-amber-300/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm text-amber-100 font-light tracking-wide uppercase text-sm"
                >
                  <Mail className="w-5 h-5" />
                  <span>suhaniss885@gmail.com</span>
                </a>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="p-4 bg-white/10 rounded-none hover:bg-amber-500/20 border border-transparent hover:border-amber-300/30 transition-all duration-500 hover:scale-110 backdrop-blur-sm"
                  >
                    <Github className="w-6 h-6 text-amber-100" />
                  </a>
                  <a
                    href="#"
                    className="p-4 bg-white/10 rounded-none hover:bg-amber-500/20 border border-transparent hover:border-amber-300/30 transition-all duration-500 hover:scale-110 backdrop-blur-sm"
                  >
                    <Linkedin className="w-6 h-6 text-amber-100" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-amber-100/60 font-light tracking-wide">
            © 2025 SUHANI SINGH
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
