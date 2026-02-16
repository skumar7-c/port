import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const projects = [
  {
    title: "NotesApp",
    video: "hh", // keep empty if no video
    demo: "https://notes-app-se6t.onrender.com",
    github: "https://github.com/skumar7-c/notes-app",
    description:
      "A full-stack Notes Application built using MERN stack with authentication, CRUD operations, and responsive UI.",
  },
  {
    title: "Family Registration with Admin Panel Website",
    video: "/form.mp4",
    demo: "https://family-registration-project-12.onrender.com/",
    github: "https://github.com/skumar7-c/portfolio",
    description:
      "A family registration system with admin dashboard, form validation, and database integration.",
  },
  {
    title: "Weather App",
    video: "/weather.mp4",
    demo: "https://your-weatherapp-live-link.com",
    github: "https://github.com/skumar7-c/weather-app",
    description:
      "Weather forecasting app using API integration with location-based live weather updates.",
  },
  {
    title: "OrgStack",
    video: "hh",
    demo: "https://notesweb-frontend.onrender.com/login",
    github: "https://github.com/skumar7-c/orgstack",
    description:
      "Organization management system with login authentication and dashboard functionality.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="py-20 bg-purple-800 text-center relative"
    >
      <motion.h2
        className="text-3xl font-bold text-cyan-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8 mt-10 px-6">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-indigo-900 p-5 rounded-xl shadow-lg flex flex-col"
          >
            {/* Video (only if exists) */}
            {p.video ? (
              <video
                src={p.video}
                controls
                muted
                loop
                className="rounded-lg w-full"
              />
            ) : (
              <div className="rounded-lg w-full h-40 bg-indigo-800 flex items-center justify-center text-gray-400">
                No Preview Available
              </div>
            )}

            <h3 className="mt-4 text-lg font-bold text-cyan-300">
              {p.title}
            </h3>

            {/* Action Buttons */}
            <div className="flex justify-center items-center gap-4 mt-4 flex-wrap">
              {p.demo && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-green-400 hover:underline"
                >
                  Live <FaExternalLinkAlt />
                </a>
              )}

              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-gray-300 hover:underline"
                >
                  GitHub <FaGithub />
                </a>
              )}

              <button
                onClick={() => setSelectedProject(p)}
                className="flex items-center gap-1 bg-cyan-400 text-black px-3 py-1 text-sm rounded-md hover:bg-cyan-500 transition"
              >
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-indigo-900 p-6 rounded-xl max-w-lg w-full relative text-left"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white text-xl hover:text-red-400"
              >
                <FaTimes />
              </button>

              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {selectedProject.title}
              </h3>

              <p className="text-gray-200 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="flex gap-6 flex-wrap">
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-green-400 hover:underline"
                  >
                    Live <FaExternalLinkAlt />
                  </a>
                )}

                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-gray-300 hover:underline"
                  >
                    GitHub <FaGithub />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
