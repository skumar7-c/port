import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiBootstrap, SiTypescript, SiExpress } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML" },
  { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, name: "CSS" },
  { icon: <FaJs className="text-yellow-400 text-5xl" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400 text-5xl" />, name: "React" },
  { icon: <SiMongodb className="text-green-500 text-5xl" />, name: "MongoDB" },
  { icon: <FaNodeJs className="text-green-700 text-5xl" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-400 text-5xl" />, name: "Express.js" },
  { icon: <FaDatabase className="text-purple-400 text-5xl" />, name: "SQL" },
  { icon: <SiTailwindcss className="text-cyan-500 text-5xl" />, name: "Tailwind CSS" },
  { icon: <SiBootstrap className="text-indigo-500 text-5xl" />, name: "Bootstrap" },
  { icon: <SiTypescript className="text-blue-600 text-5xl" />, name: "TypeScript" },
  { icon: <FaGithub className="text-white text-5xl" />, name: "Git & GitHub" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-indigo-900 text-center">
      <motion.h2
        className="text-3xl font-bold text-cyan-400"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-10 px-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center p-4 bg-purple-700 rounded-xl shadow-md"
          >
            {skill.icon}
            <p className="mt-2 text-white font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
