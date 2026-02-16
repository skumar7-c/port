import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "certification", label: "Certification" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-500 shadow-md">
        <div className="flex items-center justify-between px-2 py-8 max-w-6xl mx-auto">
          {/* Logo / Name */}
          <motion.h2
            className="text-[#00ffff] font-extrabold text-2xl md:text-3xl cursor-pointer"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Satyendra Kumar
          </motion.h2>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 font-bold text-black">
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                whileHover={{ scale: 1.1, color: "#06b6d4" }}
                transition={{ type: "spring", stiffness: 300 }}
                onClick={() => scrollToSection(link.id)}
                className="relative group"
              >
                {link.label}
                <span className="absolute left-0 bottom-[-4px] h-[2px] w-0 bg-cyan-400 transition-all text-bold group-hover:w-full"></span>
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button (hamburger) */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden mr-4 flex flex-col justify-center items-center gap-1 w-8 h-8 relative focus:outline-none"
          >
            <motion.span
              initial={false}
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-4 h-1 bg-black rounded origin-right"
            />
            <motion.span
              initial={false}
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="w-7 h-1 bg-black rounded"
            />
            <motion.span
              initial={false}
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-7 h-1 bg-black rounded origin-center"
            />
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden flex flex-col gap-4 bg-white shadow-md p-6 rounded-b-xl"
          >
            {navLinks.map((link) => (
              <motion.button
                key={link.id}
                whileHover={{ scale: 1.1, color: "#06b6d4" }}
                onClick={() => scrollToSection(link.id)}
                className="text-black font-semibold"
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-20 md:h-24"></div>
    </>
  );
}
