import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certification />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
