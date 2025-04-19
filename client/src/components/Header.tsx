import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { href: "#inicio", text: "Inicio" },
    { href: "#sobre-nosotros", text: "Sobre Nosotros" },
    { href: "#tarifas", text: "Tarifas" },
    { href: "#galeria", text: "Galería" },
    { href: "#reserva", text: "Reserva" },
    { href: "#faq", text: "FAQ" }
  ];

  return (
    <header className="bg-[var(--tactical-dark)] sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-blackops text-white text-2xl">ZTA</span>
            <div className="hidden md:flex ml-8">
              {menuItems.map((item) => (
                <a 
                  key={item.href}
                  href={item.href} 
                  className="text-white hover:text-[var(--tactical-orange)] px-3 py-2 transition duration-300"
                >
                  {item.text}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex">
            <a 
              href="#reserva" 
              className="bg-[var(--tactical-orange)] text-white px-5 py-2 rounded-md font-semibold hover:bg-opacity-90 transition duration-300"
            >
              Reservar Ahora
            </a>
          </div>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col mt-2 pb-2 space-y-1 border-t border-gray-700">
            {menuItems.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-white hover:text-[var(--tactical-orange)] py-2 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
