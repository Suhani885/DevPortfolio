import { Github, Linkedin, Mail, X } from "lucide-react";
<X />;

const Contact = ({ isVisible }) => (
  <section id="contact" className="py-32 relative">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className={`transform transition-all duration-1500 delay-500 ${
          isVisible.contact
            ? "translate-y-0 opacity-100"
            : "translate-y-20 opacity-0"
        }`}
      >
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-thin mb-6 tracking-wider">
            <span className="bg-gradient-to-r from-amber-200 via-rose-200 to-purple-200 bg-clip-text text-transparent">
              LET'S CONNECT
            </span>
          </h2>
        </div>
        <div className="bg-white/5 backdrop-blur-sm rounded-none p-12 border border-white/10 hover:border-amber-300/30 transition-all duration-700 hover:bg-gradient-to-b hover:from-amber-500/10 hover:to-rose-500/10">
          <p className="text-center text-xl text-amber-100/80 mb-12 font-light tracking-wide leading-relaxed">
            Ready to bring your ideas to life? Let's create something
            <br />
            amazing together through elegant design and innovation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=suhaniss885@gmail.com&subject=Let's%20Connect%20-%20Opportunity%20Discussion&body=Hi%20Suhani,%0D%0A%0D%0AI%20hope%20this%20email%20finds%20you%20well.%0D%0AI%20would%20love%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0D%0APlease%20let%20me%20know%20if%20you're%20available%20for%20a%20brief%20conversation%20to%20explore%20this%20further.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]%0D%0A[Your%20Contact%20Information]"
              className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-400/20 to-rose-400/20 border border-amber-300/30 rounded-none hover:from-amber-400/30 hover:to-rose-400/30 hover:border-amber-300/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm text-amber-100 font-light tracking-wide text-sm"
            >
              <Mail className="w-5 h-5" />
              <span>suhaniss885@gmail.com</span>
            </a>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Suhani885"
                className="p-4 bg-white/10 rounded-none hover:bg-amber-500/20 border border-transparent hover:border-amber-300/30 transition-all duration-500 hover:scale-110 backdrop-blur-sm"
              >
                <Github className="w-6 h-6 text-amber-100" />
              </a>
              <a
                href="https://www.linkedin.com/in/suhani-singh-a3b88128a/"
                className="p-4 bg-white/10 rounded-none hover:bg-amber-500/20 border border-transparent hover:border-amber-300/30 transition-all duration-500 hover:scale-110 backdrop-blur-sm"
              >
                <Linkedin className="w-6 h-6 text-amber-100" />
              </a>
              <a
                href="https://x.com/Suhani885"
                className="p-4 bg-white/10 rounded-none hover:bg-amber-500/20 border border-transparent hover:border-amber-300/30 transition-all duration-500 hover:scale-110 backdrop-blur-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#ffeaab"
                    d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
