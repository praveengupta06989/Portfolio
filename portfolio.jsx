import React from "react";

export default function PraveenPortfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/pp.jpg" 
              alt="Praveen Gupta"
              className="w-14 h-14 rounded-full object-cover border-2 border-indigo-600"
            />
            <div>
              <h1 className="text-lg font-semibold">Praveen Gupta</h1>
              <p className="text-sm text-gray-500">
                Computer Science Student · Web Developer · AI Enthusiast
              </p>
            </div>
          </div>

          <nav className="space-x-4 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <a
              href="/Praveen_Gupta_Resume.pdf"
              download
              className="ml-4 inline-block px-3 py-1.5 bg-indigo-600 text-white rounded-md text-sm"
            >
              Download Resume
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <section className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h2 className="text-3xl font-extrabold mb-3">Hi — I'm Praveen.</h2>
            <p className="text-gray-700 mb-4">
              A Computer Science & System Engineering student (B.Tech
              2023–2027) building modern, responsive web apps and exploring
              AI/ML.
            </p>

            <div className="flex gap-3">
              <a
                href="#projects"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md"
              >
                See Projects
              </a>
              <a
                href="mailto:praveengupta06989@gmail.com"
                className="px-4 py-2 border border-gray-300 rounded-md"
              >
                Email me
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold mb-2">Quick Info</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><strong>Location:</strong> Visakhapatnam, Andhra Pradesh</li>
              <li><strong>Education:</strong> B.Tech - Computer Science & System Engineering (Andhra University)</li>
              <li><strong>Contact:</strong> +91 9006458905</li>
              <li>
                <strong>GitHub:</strong>{" "}
                <a
                  href="https://github.com/praveengupta06989"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600"
                >
                  github.com/praveengupta06989
                </a>
              </li>
              <li>
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://linkedin.com/in/praveen-gupta-4a9375290"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600"
                >
                  linkedin.com/in/praveen-gupta-4a9375290
                </a>
              </li>
            </ul>
          </div>
        </section>

        <section id="about" className="mb-10">
          <h3 className="text-2xl font-semibold mb-3">About</h3>
          <p className="text-gray-700">
            Motivated Computer Science student passionate about software
            development, AI/ML and web technologies. I enjoy building projects
            that are practical, well-tested and user-friendly. I have experience
            delivering responsive websites, organizing national hackathons, and
            collaborating with teams to ship features.
          </p>
        </section>

        <section id="skills" className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium">Programming</h4>
              <p className="text-sm text-gray-600">Java · C++ · Python (basics)</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium">Web</h4>
              <p className="text-sm text-gray-600">HTML · CSS · JavaScript · React · Node.js</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium">AI / ML</h4>
              <p className="text-sm text-gray-600">Data preprocessing · Model training · EDA</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-medium">Tools</h4>
              <p className="text-sm text-gray-600">Git · GitHub · Linux · VS Code</p>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Projects & Experience</h3>
          <div className="space-y-4">
            <article className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Freelance Web Developer</h4>
              <p className="text-sm text-gray-600">
                Delivered responsive websites using modern stacks and integrated
                APIs. (See GitHub for code samples.)
              </p>
              <div className="mt-3 flex gap-2">
                <a
                  href="https://github.com/praveengupta06989"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm px-3 py-1 border rounded-md"
                >
                  View GitHub
                </a>
              </div>
            </article>

            <article className="p-4 bg-white rounded-lg shadow-sm">
              <h4 className="font-semibold">Organizer — BuildBharatThrough.AI Hackathon</h4>
              <p className="text-sm text-gray-600">
                Managed sponsor coordination and logistics for a national-level
                hackathon; facilitated resources and guidance for participants.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-700 mb-4">
            Want to work together or have a question? Send me a message.
          </p>
          <form className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            <input type="text" placeholder="Your name" className="p-3 rounded-md border" />
            <input type="email" placeholder="Your email" className="p-3 rounded-md border" />
            <input type="text" placeholder="Subject" className="p-3 rounded-md border sm:col-span-2" />
            <textarea placeholder="Message" className="p-3 rounded-md border sm:col-span-2 h-28"></textarea>
            <div className="sm:col-span-2">
              <a
                href="mailto:praveengupta06989@gmail.com?subject=Contact%20from%20Portfolio"
                className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md"
              >
                Email Me
              </a>
            </div>
          </form>
        </section>

        <footer className="mt-12 border-t pt-6 text-sm text-gray-600">
          <div className="flex items-center justify-between">
            <p>© {new Date().getFullYear()} Praveen Gupta — Built with React & Tailwind</p>
            <div className="space-x-3">
              <a href="https://github.com/praveengupta06989" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/praveen-gupta-4a9375290" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
