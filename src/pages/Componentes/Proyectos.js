import React from "react";

const Proyectos = () => (
  <section id="proyectos" className="py-20 px-6">
    <div className="container mx-auto max-w-3xl">
      <h2 className="text-2xl mb-12 fade-in text-primary">Proyectos Seleccionados</h2>
      <div className="space-y-16">
        {["Proyecto 01", "Proyecto 02", "Proyecto 03"].map((proyecto, index) => (
          <article key={index} className="group fade-in hover:scale-[1.50] transition-all duration-300">
            <a href="#" className="block">
              <div className="aspect-video bg-secondary mb-4 rounded-lg shadow-lg transform transition-transform"></div>
              <h3 className="text-xl group-hover:underline text-primary">{proyecto}</h3>
              <p className="text-secondary">{index === 0 ? "2024 — Diseño Web & Desarrollo" : "2023 — Diseño UI/UX"}</p>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Proyectos;
