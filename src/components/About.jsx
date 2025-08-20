import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-0  text-center">
      <motion.h2
        className="text-3xl font-bold text-cyan-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="mt-4 max-w-2xl mx-auto text-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        My name is <span className="text-white font-bold">Satyendra Kumar</span>, 
        a final-year B.Tech CSE student. Passionate about learning, 
        exploring new technologies, and building impactful projects.
      </motion.p>

      <motion.img
        src="/sks.jpg"
        alt="Profile"
        className="w-48 h-48 rounded-full mx-auto mt-8 shadow-lg border-4 border-cyan-400"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1.3 }}
        transition={{ duration: 0.9 }}
      />
    </section>
  );
}
