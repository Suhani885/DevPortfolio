import { Github, ExternalLink, Calendar, Users } from "lucide-react";

const Projects = ({ isVisible }) => {
  const projects = [
    {
      title: "Student Portal",
      description:
        "High-performance Student Portal serving 8,000+ daily users at KIET Group Of Institutions. Features attendance tracking, class schedules, fee payment system, and PWA capabilities with offline support.",
      tech: [
        "React.js",
        "Material UI",
        "Tailwind CSS",
        "Redux Toolkit",
        "ApexCharts",
      ],
      image: "/studentPortal.jpeg",
      github: "#",
      live: "https://tech.kiet.edu/StudentPortal/",
      featured: true,
      year: "2024",
      team: "Team Project",
    },
    // {
    //   title: "E-Commerce Platform",
    //   description:
    //     "Modern e-commerce solution with React, TypeScript, and advanced state management. Features real-time inventory, payment integration, and admin dashboard with comprehensive analytics.",
    //   tech: ["React", "TypeScript", "Tailwind", "Redux"],
    //   image:
    //     "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    //   github: "#",
    //   live: "#",
    //   featured: true,
    //   year: "2025",
    //   team: "Solo Project",
    // },
    {
      title: "Hospital Management System",
      description:
        "Comprehensive healthcare management platform with patient records, appointment scheduling, and real-time analytics. Features secure authentication and role-based access control.",
      tech: ["Angular.js", "Bootstrap", "Django", "MySQL"],
      image: "/hms.jpeg",
      github: "https://github.com/Suhani885/HMS",
      live: "https://www.suhanisingh.me",
      featured: true,
      year: "2024",
      team: "Team of 2",
    },
    // {
    //   title: "Certificate Generator",
    //   description:
    //     "Modern, responsive certificate generation tool with drag-and-drop field placement and real-time preview.",
    //   tech: ["React.js", "TailwindCSS", "Django", "MySQL"],
    //   image:
    //     "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    //   github: "https://github.com/Suhani885/AutoCertify",
    //   live: "#",
    //   featured: true,
    //   year: "",
    //   team: "Team of 2",
    // },
    {
      title: "Weather Dashboard",
      description:
        "Beautiful weather application with location-based forecasts, and detailed weather analytics with elegant UI design.",
      tech: ["HTML", "CSS", "JavaScript", "Weather API"],
      image: "/weather.jpeg",
      github: "https://github.com/Suhani885/WeatherApp",
      live: "https://weather-app-self-sigma-95.vercel.app/",
      featured: false,
      year: "",
      team: "",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management application with real-time updates.",
      tech: ["React", "Tailwind", "Redux", "Node", "Express", "MongoDB"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      github: "#",
      live: "#",
      featured: false,
      year: "",
      team: "",
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-amber-400/3 to-rose-400/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/3 to-amber-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transform transition-all duration-1500 delay-300 ${
            isVisible.projects
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-thin tracking-wider mb-6">
              <span className="bg-gradient-to-r from-amber-200 to-rose-200 bg-clip-text text-transparent">
                PROJECTS
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto mb-4"></div>
            <p className="text-amber-100/60 max-w-2xl mx-auto font-light">
              A showcase of my recent work, featuring modern web applications
              built with cutting-edge technologies
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-amber-300/30 transition-all duration-700 hover:transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-300/10"
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  </div>

                  <div className="p-8">
                    {/* <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4 text-xs text-amber-200/60">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{project.year}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-3 h-3" />
                          <span>{project.team}</span>
                        </div>
                      </div>
                    </div> */}

                    <h3 className="text-2xl font-light mb-4 group-hover:text-amber-200 transition-colors tracking-wide text-amber-100">
                      {project.title}
                    </h3>
                    <p className="text-amber-100/70 mb-6 leading-relaxed font-light">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <span className="px-3 py-1 bg-gradient-to-r from-amber-500/10 to-rose-500/10 text-amber-300/90 rounded-lg text-xs border border-amber-500/20 font-light tracking-wide hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-rose-500/20 transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-6">
                      {/* <a
                        href={project.github}
                        className="group/link flex items-center space-x-2 text-amber-100/60 hover:text-amber-200 transition-all duration-300 text-sm font-light tracking-wide uppercase"
                      >
                        <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                        <span>Code</span>
                      </a> */}
                      <a
                        href={project.live}
                        className="group/link flex items-center space-x-2 text-amber-100/60 hover:text-rose-300 transition-all duration-300 text-sm font-light tracking-wide uppercase"
                      >
                        <ExternalLink className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Projects */}
          {/* <div>
            <h3 className="text-2xl font-light text-center mb-12 text-amber-100">
              <span className="bg-gradient-to-r from-amber-200/80 to-rose-200/80 bg-clip-text text-transparent">
                More Projects
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-amber-300/30 transition-all duration-500 hover:transform hover:scale-105 hover:bg-gradient-to-b hover:from-amber-500/5 hover:to-rose-500/5"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-light group-hover:text-amber-200 transition-colors tracking-wide text-amber-100">
                        {project.title}
                      </h4>
                      <span className="text-xs text-amber-200/60">
                        {project.year}
                      </span>
                    </div>

                    <p className="text-amber-100/70 mb-4 text-sm leading-relaxed font-light line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tech) => (
                        <span className="px-3 py-1 bg-gradient-to-r from-amber-500/10 to-rose-500/10 text-amber-300/90 rounded-lg text-xs border border-amber-500/20 font-light tracking-wide hover:bg-gradient-to-r hover:from-amber-500/20 hover:to-rose-500/20 transition-all duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-1 text-amber-100/60 hover:text-amber-200 transition-colors duration-300 text-xs font-light uppercase"
                      >
                        <Github className="w-3 h-3" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center space-x-1 text-amber-100/60 hover:text-rose-300 transition-colors duration-300 text-xs font-light uppercase"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div> */}

          <div className="text-center mt-16">
            <a href="https://github.com/Suhani885?tab=repositories">
              <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-400/10 to-rose-400/10 border border-amber-300/20 rounded-full text-amber-200/80 text-sm cursor-pointer font-light tracking-wide backdrop-blur-sm">
                <Github className="w-4 h-4" />
                <span>View all projects on GitHub</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
