import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import './index.css';

function App() {
  return (
    <div className="font-sans text-gray-900">
      <Header />
      <Hero />
      
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
