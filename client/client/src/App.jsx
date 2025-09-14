import React, { useEffect } from "react"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Experience from "./components/Experience.jsx"
import Projects from "./components/Projects.jsx"
import Skills from "./components/Skills.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import AIWidget from "./components/AIWidget.jsx"

const App = () => {
  // Respect prefers-color-scheme and remember toggle
  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved) {
      document.documentElement.classList.toggle("dark", saved === "dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return (
    <div>
      <Navbar />
      <main className="container">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <AIWidget />
      <Footer />
    </div>
  )
}

export default App
