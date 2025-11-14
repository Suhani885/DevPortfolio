import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";

const Projects = ({ isVisible }) => {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      title: "Student Portal",
      description:
        "High-performance Student Portal serving 8,000+ daily users at KIET Group Of Institutions. Features attendance tracking, class schedules, fee payment system, and PWA capabilities with offline support.",
      tech: [
        "React.js",
        "Material UI",
        "Tailwind",
        "Redux Toolkit",
        "ApexCharts",
      ],
      image: "/projects/studentPortal.png",
      live: "https://tech.kiet.edu/StudentPortal/",
      github: "#",
    },
    {
      title: "NotifyKIET",
      description:
        "Web app to create email templates and send bulk emails efficiently, serving as a notification portal for KIET Group of Institutions streamlining communication across the organization.",
      tech: ["Next.js", "Tailwind", "Ant Design", "Zustand"],
      image: "/projects/notify.png",
      live: "https://tech.kiet.edu/notify-kiet",
      github: "#",
    },
    {
      title: "KIET HRMS",
      description:
        "Used by KIET faculties and staff to manage organizational activities. Includes modules for payroll, leave requests, employee records, and performance monitoring, streamlining HR workflows.",
      tech: ["Angular.js", "Bootstrap"],
      image: "/projects/hrms.png",
      live: "https://tech.kiet.edu/hrms",
      github: "#",
    },
    {
      title: "Manthan Quiz Platform",
      description:
        "The official quiz registration and management platform for Manthan 3.0, enabling participants to register, take quiz, and track results seamlessly.",
      tech: ["Next.js", "Tailwind", "Ant Design", "Zustand"],
      image: "/projects/manthan.png",
      live: "https://manthan.kiet.edu",
      github: "#",
    },
    {
      title: "Rann Website",
      description:
        "Official sports registration and management platform for Rann, streamlining participant sign-ups, and admin reports.",
      tech: ["Next.js", "Tailwind", "Ant Design", "Zustand"],
      image: "/projects/rann.png",
      live: "https://rann.kiet.edu",
      github: "#",
    },
    {
      title: "Hospital Management System",
      description:
        "A complete hospital workflow system with authentication, analytics, and role-based access, enabling smooth management of patients and staff.",
      tech: ["Angular.js", "Bootstrap", "CanvasJS"],
      image: "/projects/hms.jpeg",
      live: "https://www.suhanisingh.me",
      github: "https://github.com/Suhani885/HMS",
    },
    {
      title: "P2P File Sharing",
      description:
        "Secure peer-to-peer file sharing application with intuitive upload and download functionality, making file transfer fast and easy.",
      tech: ["Tanstack", "Peer JS", "Tailwind", "Ant Design"],
      image: "/projects/fileSharing.png",
      live: "https://file-sharing-kohl.vercel.app/",
      github: "https://github.com/Suhani885/file-sharing",
    },
    {
      title: "Dynamic Charts",
      description:
        "Real-time cryptocurrency visualization platform to view live price movements and interactive charts powered by WebSocket streams.",
      tech: ["Tanstack", "React ECharts", "Tailwind", "Ant Design"],
      image: "/projects/charts.png",
      live: "https://dynamic-charts.vercel.app/",
      github: "https://github.com/Suhani885/dynamic-charts",
    },
    {
      title: "Dynamic Table",
      description:
        "Interactive table web app that fetches data from any API URL. Columns are auto-detected and customizable for display preferences.",
      tech: ["Tanstack", "Tailwind", "Ant Design"],
      image: "/projects/table.png",
      live: "https://dynamic-table-iota.vercel.app/",
      github: "https://github.com/Suhani885/dynamic-table",
    },
  ];

  const uiDesigns = [
    {
      title: "Space Weather Monitor",
      description:
        "A space-themed platform featuring interactive maps and atmospheric visuals. Designed with an immersive interface for an engaging user experience.",
      tech: ["React", "Tailwind", "React Leaflet", "React ECharts"],
      image: "/projects/spaceWeather.png",
      live: "https://space-weather-three.vercel.app/",
      github: "https://github.com/Suhani885/space-weather",
    },
    {
      title: "Cirri Note",
      description:
        "A clean and minimal note-taking landing page built as a UI/UX concept to explore soft gradients, elegant layouts, and smooth micro-interactions.",
      tech: ["React.js", "Tailwind"],
      image: "/projects/cirriNote.png",
      live: "https://cirri-note-bice.vercel.app/",
      github: "https://github.com/Suhani885/cirri-note",
    },
    {
      title: "TUF Landing Page",
      description:
        "A modern landing page inspired by the TUF brand, featuring bold visuals, a clean layout, and contemporary web aesthetics.",
      tech: ["React.js", "Tailwind"],
      image: "/projects/tuf.png",
      live: "https://tuf-landing-page.vercel.app/",
      github: "https://github.com/Suhani885/tuf-landing-page",
    },
  ];

  const displayItems = activeTab === "projects" ? projects : uiDesigns;

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-amber-400/5 to-rose-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-amber-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className={`transform transition-all duration-1500 ${
            isVisible.projects
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-20"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-thin tracking-wider">
              <span className="bg-gradient-to-r from-amber-200 to-rose-200 bg-clip-text text-transparent">
                {activeTab === "projects" ? "PROJECTS" : "UI DESIGNS"}
              </span>
            </h2>
            <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-amber-300 to-transparent mt-4"></div>
            <p className="text-amber-100/60 mt-4 max-w-2xl mx-auto font-light">
              {activeTab === "projects"
                ? "Modern, polished applications built with a focus on performance and user-experience."
                : "Creative interfaces showcasing contemporary design aesthetics and interactive experiences."}
            </p>

            <div className="flex justify-center mt-8 gap-4">
              <button
                onClick={() => setActiveTab("projects")}
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full font-light tracking-wide backdrop-blur-sm transition-all duration-300 ${
                  activeTab === "projects"
                    ? "bg-gradient-to-r from-amber-400/20 to-rose-400/20 border border-amber-300/40 text-amber-200"
                    : "bg-white/5 border border-white/10 text-amber-200/60 hover:border-amber-300/20"
                }`}
              >
                <span>Projects</span>
              </button>

              <button
                onClick={() => setActiveTab("ui")}
                className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full font-light tracking-wide backdrop-blur-sm transition-all duration-300 ${
                  activeTab === "ui"
                    ? "bg-gradient-to-r from-amber-400/20 to-rose-400/20 border border-amber-300/40 text-amber-200"
                    : "bg-white/5 border border-white/10 text-amber-200/60 hover:border-amber-300/20"
                }`}
              >
                <span>UI Designs</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayItems.map((item, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-amber-300/30 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    className="w-full h-46 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-light tracking-wide text-amber-100 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-amber-100/70 mt-3 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 my-4">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-lg bg-amber-500/10 text-amber-300 border border-amber-300/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-start space-x-4 mt-3">
                    {item.github !== "#" && (
                      <a
                        href={item.github}
                        target="_blank"
                        className="flex items-center text-amber-200/70 text-sm hover:text-amber-200 transition-all"
                      >
                        <Github className="w-4 h-4 mr-1" /> Code
                      </a>
                    )}

                    <a
                      href={item.live}
                      target="_blank"
                      className="flex items-center text-rose-200/80 text-sm hover:text-rose-300 transition-all"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" /> Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a
              href="https://github.com/Suhani885?tab=repositories"
              target="_blank"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-400/10 to-rose-400/10 border border-amber-300/20 rounded-full text-amber-200/80 font-light tracking-wide backdrop-blur-sm hover:border-amber-300/40 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View all projects on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
