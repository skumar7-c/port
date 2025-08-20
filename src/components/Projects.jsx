import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Family registration with Admin Panel Website",
    video: "/form.mp4",
    demo: "https://family-registration-project-12.onrender.com/",
    github: "https://github.com/skumar7-c/portfolio",
  },
  {
    title: "Weather App",
    video: "/weather.mp4",
    demo: "https://your-weatherapp-live-link.com",
    github: "https://github.com/skumar7-c/weather-app",
  },

{
title:"Notes Website",
video:"",
demo:"https://notesweb-frontend.onrender.com/login",
github:"",
},
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-purple-800 text-center">
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
            className="bg-indigo-900 p-4 rounded-xl shadow-lg"
          >
            <video src={p.video} controls muted loop className="rounded-lg w-full"></video>
            <h3 className="mt-3 text-lg font-bold text-cyan-300">{p.title}</h3>
            <div className="flex justify-center gap-6 mt-2">

              <a href={p.demo} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-green-400 hover:underline">
                Live <FaExternalLinkAlt />
              </a>
              <a href={p.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 text-gray-300 hover:underline">
                GitHub <FaGithub />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
