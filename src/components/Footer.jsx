import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-6 text-center">
        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-6 text-2xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
          {/* GitHub */}
          <a
            href="https://github.com/skumar7-c"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-transform transform hover:scale-125"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/satyendra-kumar-075848265"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-transform transform hover:scale-125"
          >
            <FaLinkedin />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/i_am_sk.s"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-500 transition-transform transform hover:scale-125"
          >
            <FaInstagram />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-gray-400 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          © {new Date().getFullYear()} Satyendra Kumar | All Rights Reserved.
        </motion.p>
      </div>
    </footer>
  );
}
