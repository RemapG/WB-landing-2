
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Equipment from './components/Equipment';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white">
      <Header />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="services" className="py-24 bg-[#0f0f0f]">
          <Services />
        </section>

        <section id="portfolio" className="py-24 bg-[#0a0a0a]">
          <Portfolio />
        </section>

        <section id="equipment" className="py-24 bg-[#0f0f0f]">
          <Equipment />
        </section>

        <section id="about" className="py-24 bg-[#0a0a0a]">
          <About />
        </section>

        <section id="contact" className="py-24 bg-[#0f0f0f]">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
