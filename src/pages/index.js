import React, { useEffect } from "react";
import Proyectos from "./Componentes/Proyectos";


const App = () => {
  useEffect(() => {
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => observer.observe(element));
  }, []);

  return (
    <div className="bg-background text-text min-h-screen overflow-x-hidden">
      {/* <Particulas /> */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-secondary">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-end space-x-8">
            <li><a href="#proyectos" className="hover-underline hover:scale-105 transition-transform text-primary">Proyectos</a></li>
            <li><a href="#sobre-mi" className="hover-underline hover:scale-105 transition-transform text-primary">Sobre Mí</a></li>
            <li><a href="#contacto" className="hover-underline hover:scale-105 transition-transform text-primary">Contacto</a></li>
          </ul>
        </nav>
      </header>
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto max-w-3xl fade-in">
          <h1 className="text-4xl font-normal mb-8 text-primary">Ramón Almirón.<br/>Desarrollador web y diseñador digital.</h1>
          <p className="text-lg text-secondary">
            Creo experiencias digitales y funcionales, enfocándome en la simplicidad y la usabilidad.
          </p>
        </div>
      </section>
      <Proyectos />
      <section id="sobre-mi" className="py-20 px-6 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl mb-8 fade-in text-primary">Sobre Mí</h2>
          <p className="text-lg text-secondary">
            Soy un desarrollador web y diseñador digital basado en Next.js. Me especializo en crear interfaces limpias y funcionales
            que priorizan la experiencia del usuario. Mi enfoque combina principios de diseño minimalista con soluciones técnicas eficientes.
          </p>
        </div>
      </section>
      <section id="contacto" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl mb-8 fade-in text-primary">Contacto</h2>
          <p className="text-lg">
            <a href="mailto:jralmiron@jralmiron.com" className="hover-underline hover:scale-105 transition-transform inline-block text-primary">jralmiron@jralmiron.com</a>
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/jralmiron" className="hover-underline hover:scale-105 transition-transform text-primary">GitHub</a>
            <a href="https://linkedin.com/in/jralmiron" className="hover-underline hover:scale-105 transition-transform text-primary">LinkedIn</a>
          </div>
        </div>
      </section>
      <footer className="py-8 px-6 border-t border-secondary bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-3xl">
          <p className="text-sm text-secondary">&copy; 2024. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
