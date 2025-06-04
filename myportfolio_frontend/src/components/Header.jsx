import { Link } from "react-router-dom";
const Header = () => {
  return (
     <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/"><h1 className="text-xl font-bold text-indigo-600">Sabbih PortFolio</h1></a>
        <nav className="space-x-4">
          <a href="#home" className="text-gray-700 hover:text-indigo-600">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-indigo-600">
            About
          </a>
          <a href="#projects" className="text-gray-700 hover:text-indigo-600">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
