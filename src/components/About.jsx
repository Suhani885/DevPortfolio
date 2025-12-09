import { Code, Palette, Zap, Users, Award, Coffee, Heart } from "lucide-react";

const About = ({ isVisible }) => {
  const achievements = [
    {
      icon: Code,
      label: "Clean Code",
      desc: "Writing maintainable & scalable solutions",
    },
    {
      icon: Palette,
      label: "UI/UX Focus",
      desc: "User-centered design approach",
    },
    {
      icon: Zap,
      label: "Performance",
      desc: "Fast applications",
    },
    {
      icon: Users,
      label: "Collaboration",
      desc: "Excellent team player",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-300/40 via-blue-200/30 to-blue-300/40 dark:from-amber-400/3 dark:to-rose-400/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-blue-200/40 via-blue-100/30 to-blue-200/40 dark:from-purple-400/3 dark:to-amber-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transform transition-all duration-1000 delay-100 ${
            isVisible?.about
              ? "translate-y-0 opacity-100"
              : "translate-y-20 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-thin tracking-wider mb-6">
              <span className="bg-gradient-to-r from-rose-500 via-amber-400 to-rose-500 dark:from-amber-200 dark:to-rose-200 bg-clip-text text-transparent">
                ABOUT ME
              </span>
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-400 dark:via-amber-300 to-transparent mx-auto"></div>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-white/90 to-blue-50/70 dark:from-white/5 dark:to-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 border border-blue-300/70 dark:border-white/10 mb-16 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-400/50 dark:via-amber-300/50 to-transparent"></div>
              <div className="absolute -top-1 -left-1 w-4 h-4 bg-gradient-to-br from-rose-400/30 to-amber-400/30 dark:from-amber-300/30 dark:to-rose-300/30 blur rounded-full"></div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-amber-400/20 to-rose-400/20 dark:from-rose-300/20 dark:to-purple-300/20 blur rounded-full"></div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-light text-gray-900 dark:text-amber-100 mb-4">
                      Frontend Developer
                    </h3>
                    <p className="text-gray-700 dark:text-amber-100/80 leading-relaxed font-light text-lg">
                      With a passion for building clean, responsive, and
                      user-friendly web interfaces, I focus on creating seamless
                      digital experiences that are both functional and visually
                      appealing.
                    </p>
                    <p className="text-gray-600 dark:text-amber-100/60 leading-relaxed font-light">
                      I specialize in modern JavaScript frameworks and advanced
                      CSS tools, with a strong focus on writing clean,
                      maintainable code. Delivering seamless and intuitive user
                      experiences is central to every product I build.
                    </p>
                  </div>

                  <div className="flex items-center space-x-6 pt-4 text-gray-600 dark:text-amber-200/60">
                    <div className="flex items-center space-x-2">
                      <Coffee className="md:w-4 md:h-4 w-6 h-6" />
                      <span className="text-sm">Collaborative spirit</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="md:w-4 md:h-4 w-6 h-6" />
                      <span className="text-sm">Design Enthusiast</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className="bg-white/80 dark:bg-white/5 rounded-xl p-6 border border-blue-300/60 dark:border-white/10 text-center hover:bg-gradient-to-b hover:from-amber-400/30 hover:to-rose-400/30 dark:hover:from-amber-500/10 dark:hover:to-rose-500/10 hover:border-rose-400/60 dark:hover:border-amber-300/30 transition-all duration-700 group/card transform hover:scale-105"
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="relative">
                        <achievement.icon className="w-8 h-8 text-rose-500 dark:text-amber-300 mb-3 mx-auto group-hover/card:text-amber-500 dark:group-hover/card:text-amber-200 transition-all duration-500 group-hover/card:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 to-amber-400/20 dark:from-amber-300/20 dark:to-rose-300/20 rounded-full blur opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="text-sm md:text-lg font-light text-gray-900 dark:text-amber-100 mb-2">
                        {achievement.label}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-amber-100/60 font-light tracking-wide leading-relaxed">
                        {achievement.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                target="_blank"
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=suhaniss885@gmail.com&subject=Let's%20Work%20Together%20-%20New%20Project%20Inquiry&body=Hi%20Suhani,%0D%0A%0D%0AI%20hope%20this%20email%20finds%20you%20well.%0D%0A%0D%0AI%20have%20a%20project%20in%20mind%20and%20would%20appreciate%20the%20opportunity%20to%20discuss%20this%20further.%0D%0A%0AThank%20you%20for%20your%20time%20and%20I%20look%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]"
              >
                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-400/20 to-rose-400/20 dark:from-amber-400/10 dark:to-rose-400/10 border border-rose-400/40 dark:border-amber-300/20 rounded-full text-gray-700 dark:text-amber-200/80 text-sm font-light tracking-wide backdrop-blur-sm hover:from-amber-400/30 hover:to-rose-400/30 dark:hover:from-amber-400/15 dark:hover:to-rose-400/15 hover:border-rose-400/50 dark:hover:border-amber-300/30 transition-all duration-500">
                  <Award className="w-6 h-6 md:w-4 md:h-4" />
                  <span>Let's create something amazing together</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
