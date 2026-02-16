import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram,FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-purple-800 text-center">
      <motion.h2
        className="text-3xl font-bold text-cyan-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      {/* Personal Info */}
      <motion.div
        className="mt-6 text-gray-200 space-y-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-xl font-semibold text-white">Satyendra Kumar</p>
        <p>
          Email:{" "}
          <a
            href="mailto:satyendrakumar25588@gmail.com"
            className="text-cyan-400 hover:underline"
          >
            satyendrakumar25588@gmail.com
          </a>
        </p>
        <p>
          Phone:{" "}
          <a href="tel:+91 7004345980" className="text-cyan-400 hover:underline">
            +91 7004345980
          </a>
        </p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="flex justify-center gap-6 mt-6 text-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
           {/* WhatsApp */}
          <a
            href="https://wa.me/917004345980"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-500 transition-transform transform hover:scale-125"
          >
            <FaWhatsapp />
          </a>
        <a
          href="https://www.linkedin.com/in/satyendra-kumar-075848265"
          target="_blank"
          className="text-blue-400 hover:scale-125 transition-transform"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/skumar7-c"
          target="_blank"
          className="text-gray-300 hover:scale-125 transition-transform"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/i_am_sk.s"
          target="_blank"
          className="text-pink-400 hover:scale-125 transition-transform"
        >
          <FaInstagram />
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        className="mt-10 max-w-lg mx-auto bg-purple-700 p-6 rounded-xl shadow-lg space-y-4 text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Message form submitted (frontend only).");
        }}
      >
        <div>
          <label className="block text-gray-200 font-semibold">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full mt-1 px-4 py-2 rounded-lg bg-purple-600 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-200 font-semibold">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full mt-1 px-4 py-2 rounded-lg bg-purple-600 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-200 font-semibold">Message</label>
          <textarea
            placeholder="Your Message"
            required
            rows="4"
            className="w-full mt-1 px-4 py-2 rounded-lg bg-purple-600 text-white focus:ring-2 focus:ring-cyan-400 outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-cyan-400 text-black font-bold hover:bg-cyan-500 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
