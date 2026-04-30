import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Divider from "./components/Divider"
import Experience from "./components/Experience"

export default function App() {

  return (
    <div className="bg-[#0d1117] text-white font-[Inter]">
      <Navbar />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Projects />
      <Divider />
      <Experience />
      <Divider />
      <Contact />
      <Footer />
    </div>
  )
}
