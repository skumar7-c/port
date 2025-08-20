import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const certificates = [
  { id: 1, title: "MERN Stack Development", img: "/MERN.jpg" },
  { id: 2, title: "HTML", img: "/html.jpg" },
  { id: 3, title: "CSS", img: "/css.jpg" },
  { id: 5, title: "SQL", img: "/sql.jpg" },
  { id: 6, title: "Summer Workshop", img: "/summer-workshop.jpg" },
  { id: 7, title: "AI Workshop", img: "/AI-Workshop.jpg" },
  { id: 8, title: "AI", img: "/ai.jpg" },
  { id: 9, title: "Internship Ambassador ", img: "/dev.jpg" },
  { id: 10, title: " E- Commerce ", img: "/e-commerce.jpg" },
  { id: 11, title: "Demo Full stack session", img: "/edu.jpg" },
  { id: 12, title: "Event", img: "/event-cert.jpg" },
  { id: 13, title: "Event", img: "/event-certificate.jpg" },
  { id: 14, title: "Event", img: "/event.jpg" },
  { id: 15, title: "Space", img: "/isro.jpg" },
  { id: 16, title: "Excel", img: "/excel.jpg" },
  { id: 17, title: "Space", img: "/isro.jpg" },
  { id: 18, title: "Space", img: "/isro.jpg" },
  { id: 19, title: "Space", img: "/isro.jpg" },
  { id: 20, title: "Space", img: "/isro.jpg" },

];

export default function Certification() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);

  const next = () => setIndex((prev) => (prev + 1) % certificates.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + certificates.length) % certificates.length);

  // autoplay effect
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(next, 2500); // scroll every 2.5s
    return () => clearInterval(timer);
  }, [playing, index]);

  return (
    <section id="certification" className="py-20 bg-indigo-900 text-center">
      <motion.h2
        className="text-3xl font-bold text-cyan-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        Certifications
      </motion.h2>

      {/* Carousel Container */}
      <div className="overflow-hidden items-center mt-10 relative w-full max-w-4xl mx-auto">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 70, damping: 60 }}
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="min-w-full flex flex-col items-center"
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-96 h-64 object-cover rounded-xl shadow-lg border-4 border-cyan-400"
              />
              <p className="mt-4 text-white font-semibold">{cert.title}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-6 mt-6 text-cyan-400 text-2xl">
        <button onClick={prev} className="hover:text-white">
          <FaArrowLeft />
        </button>
        <button onClick={() => setPlaying(!playing)} className="hover:text-white">
          {playing ? <FaPause /> : <FaPlay />}
        </button>
        <button onClick={next} className="hover:text-white">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
