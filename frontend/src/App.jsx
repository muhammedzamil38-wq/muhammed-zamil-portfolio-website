import React from "react";
import About_Me from "./pages/About_Me";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./pages/Navbar";
import Experience from "./pages/Experience";
import Hero from "./pages/Hero";
import { Footer } from "./pages/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Hero/>
        <About_Me />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
};

export default App;
