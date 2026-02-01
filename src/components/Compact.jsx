import React from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { experiences, papers, portfolio, skills } from "../data";
import { compact_foto } from "../assets";

const Compact = () => {
  const [showTransition, setShowTransition] = useState(false);

  const handleBackClick = (e) => {
    e.preventDefault();
    setShowTransition(true);
    setTimeout(() => {
      window.location.href = "/main-portfolio/";
    }, 1500);
  };
  return (
    <div className="min-h-screen bg-white py-12 px-6 sm:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-start gap-6">
            <img
            //   src="https://avatars.githubusercontent.com/u/143616767?v=4"
              src={compact_foto}
              alt="Profile"
              className="w-28 h-28 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Rhio Bimo Prakoso S
              </h1>
              <p className="text-gray-600 mb-3">Bandung, Indonesia</p>
              <div className="flex gap-4 text-gray-600">
                <a href="tel:+628886399172" className="hover:text-gray-900">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>

                </a>
                <a href="mailto:rhiobimoprakoso.s@gmail.com" className="hover:text-gray-900">

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                    
                </a>
                <a href="https://github.com/cola1000" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                
                </a>
                <a href="https://linkedin.com/in/rhio-bimo/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                
                </a>
              </div>
            </div>
          </div>
          <p className="text-gray-700 mt-6 leading-relaxed">
            Deeply interested in system architecture, machine learning, web development, and cyber security. 
            Well versed in media and communication and creative works.
          </p>
        </header>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="border-l-2 border-gray-300 pl-6">
            <h3 className="text-lg font-semibold text-gray-900">
              BS in Computer Science - Institut Teknologi Bandung
            </h3>
            <p className="text-gray-600">2023 - 2027 | Bandung, Indonesia</p>
            <p className="text-gray-700 mt-2">CGPA: 3.24</p>
            <p className="text-gray-600 mt-2 text-sm">
              Coursework: Operating System | Data Structure and Algorithm | Computer Organization and 
              Architecture | Discrete Mathematics | Software Engineering | Database | Database Management 
              System | Application of Distributed System Architecture | Parallel & Distributed System | Project 
              Management | Computer Network | Linear Algebra
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience</h2>
          
          {experiences.slice(0, 3).map((exp, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {exp.title} - {exp.company_name}
              </h3>
              <p className="text-gray-600 mb-2">{exp.date}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.details.map((detail, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: detail.replace(/<span[^>]*>/g, '').replace(/<\/span>/g, '') }} />
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Programming Languages</h3>
              <p className="text-gray-700">Python, C/C++, Java, JavaScript/TypeScript, Go, PHP, Assembly</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Machine Learning</h3>
              <p className="text-gray-700">SKLearn, PyTorch, Numpy, Pandas</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Web Development</h3>
              <p className="text-gray-700">React, Tailwind, Node.js, FastAPI, Svelte, Laravel, HTML, CSS, ThreeJS</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Distributed System & Infrastructure</h3>
              <p className="text-gray-700">Docker, Kubernetes, Apache Kafka, RabbitMQ, GraphQL, NGINX</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Database</h3>
              <p className="text-gray-700">SQL, Redis, PostgreSQL, CockroachDB, MongoDB, MySQL, Oracle</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Creative</h3>
              <p className="text-gray-700">Clip Studio Paint, Blender, Adobe Premiere Pro, Adobe Photoshop</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-2">Tools & Others</h3>
              <p className="text-gray-700">Git, RESTful API, Bash, Windows Batch Scripting, Linux/UNIX Operating Systems, SSH</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects</h2>

          {portfolio.map((project, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {project.name}
              </h3>
              <p className="text-gray-700 mb-2">
                {project.description}
              </p>
              {project.href && (
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">View</a>
              )}
            </div>
          ))}
        </section>

        {/* Papers */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Papers</h2>

          {papers.map((paper, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {paper.title}
              </h3>
              <p className="text-gray-600 mb-2">{paper.date}</p>
              <p className="text-gray-700 mb-2">
                {paper.description}
              </p>
              <p className="text-gray-600 text-sm mb-1">{paper.tags.join(" / ")}</p>
              <div className="space-x-2">
                {paper.links.map((link, idx) => (
                  <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Back button */}
        <div className="mt-12 text-center">
          <button
            onClick={handleBackClick}
            className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Back to Portfolio
          </button>
        </div>

        {/* Reverse transition overlay - Black fade from edges inward */}
        <AnimatePresence>
          {showTransition && (
            <>
              {/* Vignette effect that fades in first */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeIn" }}
                className="fixed inset-0 pointer-events-none z-[9998]"
                style={{
                  background: "radial-gradient(circle at center, transparent 0%, transparent 10%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 50%, black 70%, black 100%)",
                }}
              />
              {/* Full black overlay that fades in after vignette */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.8 }}
                className="fixed inset-0 pointer-events-none z-[9999] bg-black"
              />
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Compact;
