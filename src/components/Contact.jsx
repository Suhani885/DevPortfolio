import { Github, Linkedin, Mail } from "lucide-react";

const Contact = ({ isVisible }) => (
  <section id="contact" className="py-28 relative">
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
              target="_blank"
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=suhaniss885@gmail.com&subject=Let's%20Connect%20-%20Opportunity%20Discussion&body=Hi%20Suhani,%0D%0A%0D%0AI%20hope%20this%20email%20finds%20you%20well.%0D%0AI%20would%20love%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0D%0APlease%20let%20me%20know%20if%20you're%20available%20for%20a%20brief%20conversation%20to%20explore%20this%20further.%0D%0A%0D%0ABest%20regards,%0D%0A[Your%20Name]%0D%0A[Your%20Contact%20Information]"
              className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-amber-400/20 to-rose-400/20 border border-amber-300/30 rounded-none hover:from-amber-400/30 hover:to-rose-400/30 hover:border-amber-300/50 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm text-amber-100 font-light tracking-wide text-sm"
            >
              <Mail className="w-5 h-5" />
              <span>suhaniss885@gmail.com</span>
            </a>
            <div className="flex space-x-6">
              <a
                target="_blank"
                href="https://github.com/Suhani885"
                className="p-4 bg-white/10 rounded-none hover:bg-amber-500/20 border border-transparent hover:border-amber-300/30 transition-all duration-500 hover:scale-110 backdrop-blur-sm"
              >
                <Github className="w-6 h-6 text-amber-100" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/suhani-singh-a3b88128a/"
                className="p-4 bg-white/10 rounded-none hover:bg-amber-500/20 border border-transparent hover:border-amber-300/30 transition-all duration-500 hover:scale-110 backdrop-blur-sm"
              >
                <Linkedin className="w-6 h-6 text-amber-100" />
              </a>
              <a
                target="_blank"
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
              <a
                target="_blank"
                href="https://leetcode.com/u/Suhani_8/"
                className="p-4 bg-white/10 rounded-none hover:bg-amber-500/20 border border-transparent hover:border-amber-300/30 transition-all duration-500 hover:scale-110 backdrop-blur-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#ffeaab"
                    d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
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
