import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="work"><Work /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;