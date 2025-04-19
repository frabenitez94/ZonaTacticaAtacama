const Footer = () => {
  return (
    <footer className="bg-[var(--tactical-dark)] text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-blackops text-2xl mb-4">ZONA TÁCTICA</h3>
            <p className="mb-4">
              La primera cancha de paintball en Copiapó especializada en experiencias extremas con partidas diurnas y nocturnas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[var(--tactical-orange)] transition-colors duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-[var(--tactical-orange)] transition-colors duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white hover:text-[var(--tactical-orange)] transition-colors duration-300">
                <i className="fab fa-tiktok"></i>
              </a>
              <a href="#" className="text-white hover:text-[var(--tactical-orange)] transition-colors duration-300">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-barlow text-xl font-bold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-[var(--tactical-orange)] transition-colors duration-300">Inicio</a></li>
              <li><a href="#sobre-nosotros" className="hover:text-[var(--tactical-orange)] transition-colors duration-300">Sobre Nosotros</a></li>
              <li><a href="#tarifas" className="hover:text-[var(--tactical-orange)] transition-colors duration-300">Tarifas y Servicios</a></li>
              <li><a href="#galeria" className="hover:text-[var(--tactical-orange)] transition-colors duration-300">Galería</a></li>
              <li><a href="#reserva" className="hover:text-[var(--tactical-orange)] transition-colors duration-300">Reserva</a></li>
              <li><a href="#faq" className="hover:text-[var(--tactical-orange)] transition-colors duration-300">Preguntas Frecuentes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-barlow text-xl font-bold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-[var(--tactical-orange)]"></i>
                <span>Campo Táctico, Copiapó, Región de Atacama</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone-alt mt-1 mr-3 text-[var(--tactical-orange)]"></i>
                <span>+56 9 1234 5678</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-[var(--tactical-orange)]"></i>
                <span>info@zonatactica.cl</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-[var(--tactical-orange)]"></i>
                <span>Lunes a Domingo: 10:00 - 22:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-barlow text-xl font-bold mb-4">Suscríbete</h4>
            <p className="mb-4">Recibe promociones exclusivas y noticias de torneos</p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  className="bg-gray-800 px-4 py-2 rounded-l-md w-full focus:outline-none" 
                  placeholder="Tu email" 
                />
                <button 
                  type="submit" 
                  className="bg-[var(--tactical-orange)] px-4 py-2 rounded-r-md hover:bg-opacity-90 transition duration-300"
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </form>
            <p className="text-sm">Al suscribirte, aceptas nuestra política de privacidad</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Zona Táctica Atacama. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white mr-4">Términos y Condiciones</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
