import { motion } from "framer-motion";
import heroBg from "../assets/hero2-bg.jpg";
import { ReactTyped } from "react-typed"; // ✅ named import

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
          strings={["S.Kumar","MERN Stack Developer", "Android Developer", "React developer","Satyendra Kumar"]}
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

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-6 px-6 py-3 rounded-full bg-cyan-400 text-black font-bold relative z-10 shadow-lg"
        onClick={() =>
          document
            .getElementById("projects")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Explore Projects
      </motion.button>
    </section>
  );
}
