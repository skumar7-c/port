import { motion } from "framer-motion";
import heroBg from "../assets/hero2-bg.jpg";
import resumePDF from "../assets/resume.pdf"; // ✅ import resume file
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center text-center relative bg-cover bg-center m-0 p-0"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 z-0 bg-black/50"></div>

      {/* Typing Intro */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-cyan-400 relative z-10"
      >
        Hi, I'm{" "}
        <ReactTyped
          strings={[
            "S.Kumar",
            "MERN Stack Developer",
            "Android Developer",
            "React developer",
            "Satyendra Kumar",
          ]}
          typeSpeed={70}
          backSpeed={50}
          loop
        />
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-4 text-lg md:text-xl text-white font-semibold relative z-10"
      >
        I focus on building clean, responsive and user-friendly websites.
      </motion.p>

      {/* Buttons Section */}
      <div className="flex gap-4 mt-6 relative z-10">
        
        {/* Explore Projects Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 rounded-full bg-cyan-400 text-black font-bold shadow-lg"
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore Projects
        </motion.button>

        {/* Resume Button */}
        <motion.a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 rounded-full border-2 border-cyan-400 text-cyan-400 font-bold shadow-lg hover:bg-cyan-400 hover:text-black transition duration-300"
        >
          View Resume
        </motion.a>

      </div>
    </section>
  );
}
