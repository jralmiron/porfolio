import React, { useEffect } from "react";
import Proyectos from "./Componentes/Proyectos";
import Navbar from "./Componentes/Navbar";

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
    <div className="relative min-h-screen overflow-hidden text-text">
      {/* Video de fondo */}
      <div className="absolute inset-0 z-[-1]">
        <video autoPlay muted playsInline className="w-full h-full object-cover" style={{ filter: 'blur(5px)', transform: 'scale(1.1)' }}
        >
          <source src="/video.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        {/* Filtro oscuro para mejorar el contraste */}
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Sección Principal */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="container mx-auto max-w-3xl fade-in">
          <h1 className="text-4xl font-normal mb-8 text-primary drop-shadow-lg">Ramón Almirón.<br/>Desarrollador web y diseñador digital.</h1>
          <p className="text-lg text-secondary drop-shadow-lg">
            Creo experiencias digitales y funcionales, enfocándome en la simplicidad y la usabilidad.
          </p>
        </div>
      </section>

      {/* Proyectos */}
      <Proyectos />

      {/* Sección Sobre Mí */}
      <section id="sobre-mi" className="py-20 px-6 backdrop-blur-sm">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl mb-8 fade-in text-primary drop-shadow-lg">Sobre Mí</h2>
          <p className="text-lg text-secondary drop-shadow-lg">
            Soy un desarrollador web y diseñador digital basado en Next.js. Me especializo en crear interfaces limpias y funcionales
            que priorizan la experiencia del usuario. Mi enfoque combina principios de diseño minimalista con soluciones técnicas eficientes.
          </p>
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="py-20 px-6">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl mb-8 fade-in text-primary drop-shadow-lg">Contacto</h2>
          <p className="text-lg">
            <a href="mailto:jralmiron@jralmiron.com" className="hover-underline hover:scale-105 transition-transform inline-block text-primary drop-shadow-lg">jralmiron@jralmiron.com</a>
          </p>
          <div className="flex space-x-6">
            <a href="https://github.com/jralmiron" className="hover-underline hover:scale-105 transition-transform text-primary drop-shadow-lg">GitHub</a>
            <a href="https://linkedin.com/in/jralmiron" className="hover-underline hover:scale-105 transition-transform text-primary drop-shadow-lg">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-secondary bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-3xl flex justify-between items-center">
          <p className="text-sm text-secondary drop-shadow-lg">&copy; 2024. Todos los derechos reservados.</p>
          <img src="/logo.gif" alt="Logo" className="h-10 w-auto opacity-90 rounded-full" />
        </div>
      </footer>
    </div>
  );
};

export default App;
