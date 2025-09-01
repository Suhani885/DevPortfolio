import { ChevronRight } from "lucide-react";
import { useState } from "react";

const Experience = ({ isVisible }) => {
  const experiences = [
    {
      id: 1,
      title: "Developer",
      company: "Team ERP",
      duration: "June 2024 - Present",
      link: "https://tech.kiet.edu/team-erp/",
      description: [
        "Contributed to Team ERP at KIET Group Of Institutions, a student-led in-house ERP system, enhancing key modules like Marks Monitoring, Hostel Management, and Accounts.",
        "Styled UI with Tailwind CSS and Bootstrap ensuring pixel-perfect, accessible, and responsive interfaces.",
        "Reviewed code collaboratively, maintaining consistency and applying best practices for clean and scalable development.",
        "Gained practical experience, working across testing, and deployment of real-world ERP solutions.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "AngularJS",
        "TypeScript",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      id: 2,
      title: "Frontend Engineer Intern",
      company: "Jellybean AI",
      duration: "Dec 2024 - Feb 2025",
      link: "https://jellybeanai.co/",
      description: [
        "Optimized user interfaces to improve usability and performance for a Gen AI web app targeting game developers.",
        "Collaborated with the CTO and backend team to integrate frontend components with the platform’s core AI functionality.",
        "Participated in product feature research and enhanced platform workflows to boost interactivity and responsiveness across devices.",
      ],
      technologies: ["React.js", "Material UI"],
    },
  ];

  const [selectedExperience, setSelectedExperience] = useState(0);

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-amber-400/3 to-rose-400/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/3 to-amber-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transform transition-all duration-1500 delay-200 ${
            isVisible?.experience
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-thin tracking-wider mb-6">
              <span className="bg-gradient-to-r from-amber-200 to-rose-200 bg-clip-text text-transparent">
                EXPERIENCE
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-12 border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-300/50 to-transparent"></div>
              <div className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-amber-300/30 to-rose-300/30 blur rounded-full"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-rose-300/20 to-purple-300/20 blur rounded-full"></div>

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-80">
                  <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-2">
                    {experiences.map((exp, index) => (
                      <button
                        key={exp.id}
                        onClick={() => setSelectedExperience(index)}
                        className={`flex-shrink-0 text-left px-6 py-4 rounded-xl border transition-all duration-700 whitespace-nowrap lg:whitespace-normal transform hover:scale-105 ${
                          selectedExperience === index
                            ? "bg-gradient-to-r from-amber-500/20 to-rose-500/20 border-amber-300/40 text-amber-200"
                            : "bg-white/5 border-white/10 text-amber-100/70 hover:bg-gradient-to-r hover:from-amber-500/10 hover:to-rose-500/10 hover:border-amber-300/20 hover:text-amber-200/90"
                        }`}
                      >
                        <div className="font-light text-sm tracking-wide">
                          {exp.company}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="min-h-96">
                    {experiences.map((exp, index) => (
                      <div
                        key={exp.id}
                        className={`transition-all duration-700 ${
                          selectedExperience === index
                            ? "opacity-100 transform translate-x-0"
                            : "opacity-0 transform translate-x-4 absolute"
                        }`}
                      >
                        {selectedExperience === index && (
                          <>
                            <div className="mb-8">
                              <h3 className="text-2xl md:text-3xl font-light text-amber-100 mb-2">
                                {exp.title}{" "}
                                <a
                                  href={exp.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-transparent bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text hover:underline"
                                >
                                  @ {exp.company}
                                </a>
                              </h3>
                              <div className="text-amber-200/60 font-light text-sm tracking-wide mb-6">
                                {exp.duration}
                              </div>
                            </div>

                            <div className="space-y-4 mb-8">
                              {exp.description.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-3 text-amber-100/80 group/item"
                                >
                                  <ChevronRight
                                    size={16}
                                    className="text-amber-300 mt-1 flex-shrink-0 transform transition-all duration-300 group-hover/item:text-rose-300 group-hover/item:translate-x-1"
                                  />
                                  <span className="leading-relaxed font-light">
                                    {item}
                                  </span>
                                </div>
                              ))}
                            </div>

                            <div className="flex flex-wrap gap-3">
                              {exp.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="px-4 py-2 text-sm bg-white/10 text-amber-200 rounded-lg font-light tracking-wide border border-white/20 backdrop-blur-sm hover:bg-gradient-to-r hover:from-amber-400/20 hover:to-rose-400/20 hover:border-amber-300/40 transition-all duration-500 transform hover:scale-105"
                                  style={{ transitionDelay: `${idx * 50}ms` }}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
