

const Navbar = () => (
  <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-orange-200">
    <nav className="container mx-auto px-6 py-4">
      <ul className="flex justify-end space-x-8">
        <li><a href="#proyectos" className="hover-underline hover:scale-105 transition-transform text-orange-600">Proyectos</a></li>
        <li><a href="#sobre-mi" className="hover-underline hover:scale-105 transition-transform text-orange-600">Sobre Mí</a></li>
        <li><a href="#contacto" className="hover-underline hover:scale-105 transition-transform text-orange-600">Contacto</a></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;