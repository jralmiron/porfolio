const Navbar = () => (
  <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-secondary">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center ">
        <img src="/logo.gif" alt="Logo" className="h-10 w-auto opacity-90 rounded-full" />
      </div>
      <ul className="flex justify-end space-x-8">
        <li><a href="#proyectos" className="hover-underline hover:scale-105 transition-transform text-primary">Proyectos</a></li>
        <li><a href="#sobre-mi" className="hover-underline hover:scale-105 transition-transform text-primary">Sobre Mí</a></li>
        <li><a href="#contacto" className="hover-underline hover:scale-105 transition-transform text-primary">Contacto</a></li>
      </ul>
    </nav>
  </header>
);

export default Navbar;