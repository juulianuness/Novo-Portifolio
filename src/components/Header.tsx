import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 py-9 md:px-6">
      <div className="flex items-center justify-between">
        {/* Logo/Brand (vazio por enquanto) */}
        <div className="flex items-center gap-2">
          {/* Você pode adicionar logo aqui */}
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-2">
          <a 
            href="#projects" 
            className="px-6 py-2 bg-gradient-to-r from-blue-300 to-gray-300 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition"
          >
            Projetos
          </a>
          <a 
            className="px-6 py-2 bg-gradient-to-r from-blue-300 to-gray-300 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition" 
            href="https://www.linkedin.com/in/julia-vieira-nuness/" 
            target="_blank"
          >
            LinkedIn
          </a>
          <a 
            className="px-6 py-2 bg-gradient-to-r from-blue-300 to-gray-300 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition" 
            href="https://github.com/juulianuness" 
            target="_blank"
          >
            GitHub
          </a>
          <a 
            href="https://julianunes.netlify.app/" 
            className="px-6 py-2 bg-gradient-to-r from-blue-300 to-gray-300 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition"
          >
            Currículo
          </a>
        </nav>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden p-4 bg-gradient-to-r from-blue-300 to-gray-300 text-white rounded-full shadow-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 flex flex-col gap-3 bg-white rounded-2xl p-4 shadow-lg">
          <a 
            href="#projects" 
            className="px-4 py-3 bg-gradient-to-r from-blue-300 to-gray-300 text-white font-semibold rounded-full shadow-md text-center transition hover:scale-105"
            onClick={() => setIsMenuOpen(false)}
          >
            Projetos
          </a>
          <a 
            className="px-4 py-3 bg-gradient-to-r from-blue-300 to-gray-300 text-white font-semibold rounded-full shadow-md text-center transition hover:scale-105" 
            href="https://www.linkedin.com/in/julia-vieira-nuness/" 
            target="_blank"
            onClick={() => setIsMenuOpen(false)}
          >
            LinkedIn
          </a>
          <a 
            className="px-4 py-3 bg-gradient-to-r from-blue-300 to-gray-300 text-white font-semibold rounded-full shadow-md text-center transition hover:scale-105" 
            href="https://github.com/juulianuness" 
            target="_blank"
            onClick={() => setIsMenuOpen(false)}
          >
            GitHub
          </a>
          <a 
            href="#projects" 
            className="px-4 py-3 bg-gradient-to-r from-blue-300 to-gray-300 text-white font-semibold rounded-full shadow-md text-center transition hover:scale-105"
            onClick={() => setIsMenuOpen(false)}
          >
            Currículo
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;