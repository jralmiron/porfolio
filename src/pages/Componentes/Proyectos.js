import React from "react";

const proyectos = [
  { nombre: "Proyecto 01", descripcion: "2024 — Diseño Web & Desarrollo" },
  { nombre: "Proyecto 02", descripcion: "2023 — Diseño UI/UX" },
  { nombre: "Proyecto 03", descripcion: "2024 — Aplicación React" },
  { nombre: "Proyecto 04", descripcion: "2023 — Backend con Node.js" },
  { nombre: "Proyecto 05", descripcion: "2024 — Chatbot con Python" },
  { nombre: "Proyecto 06", descripcion: "2023 — Interfaz 3D con A-Frame" },
  { nombre: "Proyecto 07", descripcion: "2024 — Ecommerce con Next.js" },
  { nombre: "Proyecto 08", descripcion: "2023 — Dashboard con Tailwind" },
];

const Proyectos = () => (
  <section id="proyectos" className="py-20 px-6">
    <div className="container mx-auto max-w-5xl">
      <h2 className="text-2xl mb-12 fade-in text-primary text-center">
        Proyectos Seleccionados
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {proyectos.map((proyecto, index) => (
          <article
            key={index}
            className="group relative fade-in transition-all duration-300"
          >
            <a href="#" className="block">
              <div className="aspect-video bg-secondary rounded-lg shadow-lg transition-transform group-hover:scale-105 group-active:scale-105"></div>
              <h3 className="text-lg text-primary mt-2 text-center">
                {proyecto.nombre}
              </h3>
              <p className="text-secondary text-sm text-center">
                {proyecto.descripcion}
              </p>
            </a>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Proyectos;
