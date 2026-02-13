import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaPause, FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";

// Certificates (public folder)
const certificates = [
  { id: 1, title: "MERN Stack Development Internship", img: "/port/shri.jpeg" },
  { id: 3, title: "MERN Stack Development", img: "/port/mern.jpg" },
  { id: 4, title: "Web Development Internship", img: "/port/labmentix.jpeg" },
  { id: 2, title: "MERN Stack Development Internship", img: "/port/shri-genesis.jpeg" },
  { id: 5, title: "Web Design Internship", img: "/port/cttc.jpeg" },
  { id: 6, title: "Web Design & Frameworks Internship", img: "/port/cttc-intern.jpeg" },
  { id: 8, title: "Programming Fundamentals", img: "/port/msme.jpeg" },
  { id: 22, title: "Problem Solving", img: "/port/gfg160.jpeg" },
  { id: 20, title: "ISRO", img: "/port/isro.jpg" },
  { id: 7, title: "3D Printing", img: "/port/3d-printing.jpeg" },
  { id: 9, title: "HTML", img: "/port/html.jpg" },
  { id: 10, title: "CSS", img: "/port/skss.jpg" },
  { id: 11, title: "SQL", img: "/port/sql.jpg" },
  { id: 12, title: "Summer Workshop", img: "/port/summer-workshop.jpg" },
  { id: 13, title: "AI Workshop", img: "/port/AI-Workshop.jpg" },
  { id: 15, title: "E-Commerce", img: "/port/e-commerce.jpg" },
  { id: 14, title: "Internship Ambassador", img: "/port/dev.jpg" },
  { id: 17, title: "Event", img: "/port/event-cert.jpg" },
  { id: 21, title: "Excel", img: "/port/excel.jpg" },
  { id: 18, title: "Event", img: "/port/event-certificate.jpg" },
  { id: 16, title: "Demo Full stack session", img: "/port/edu.jpg" },
  { id: 19, title: "Event", img: "/port/event.jpg" },
];

export default function Certification() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [showAll, setShowAll] = useState(false); // ✅ new state

  const next = () => setIndex((prev) => (prev + 1) % certificates.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + certificates.length) % certificates.length);

  // autoplay
  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(next, 2500);
    return () => clearInterval(timer);
  }, [playing, index]);

  return (
    <section id="certification" className="py-20 bg-indigo-900 text-center relative">
      
      {/* Title + View All Button */}
      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-cyan-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Certifications
        </motion.h2>

        {/* Top Right View All Button */}
        <button
          onClick={() => setShowAll(true)}
          className="absolute right-0 top-0 bg-cyan-400 text-black px-4 py-2 rounded-full font-semibold hover:scale-105 transition"
        >
          View All
        </button>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden items-center mt-10 relative w-full max-w-4xl mx-auto">
        <motion.div
          className="flex gap-6"
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 70, damping: 60 }}
        >
          {certificates.map((cert) => (
            <div key={cert.id} className="min-w-full flex flex-col items-center shrink-0">
              <img
                src={cert.img}
                alt={cert.title}
                className="max-w-full max-h-[500px] object-contain rounded-xl shadow-lg border-4 border-cyan-400"

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

      {/* ===================== VIEW ALL MODAL ===================== */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-indigo-950 max-w-6xl w-full max-h-[90vh] overflow-y-auto rounded-xl p-6 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowAll(false)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-cyan-400"
              >
                <FaTimes />
              </button>

              <h3 className="text-2xl text-cyan-400 font-bold mb-6">
                All Certifications
              </h3>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {certificates.map((cert) => (
                  <motion.div
                    key={cert.id}
                    whileHover={{ scale: 1.05 }}
                    className="bg-indigo-800 p-4 rounded-xl"
                  >
                    <img
                      src={cert.img}
                      alt={cert.title}
                      className="w-full max-h-[500px] object-contain rounded-lg"
                    />
                    <p className="mt-3 text-white font-medium">
                      {cert.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
