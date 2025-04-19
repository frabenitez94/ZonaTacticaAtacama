const CallToAction = () => {
  return (
    <section className="py-16 bg-[var(--tactical-dark)] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-barlow text-3xl md:text-4xl font-bold mb-6">¿LISTO PARA LA ACCIÓN?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          La adrenalina, la estrategia y la diversión te esperan en Zona Táctica Atacama. 
          ¡Reúne a tu equipo y vive la experiencia!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#reserva" 
            className="bg-[var(--tactical-orange)] text-white py-3 px-8 rounded-md font-semibold text-lg text-center hover:bg-opacity-90 transition duration-300 transform hover:-translate-y-1"
          >
            <i className="fas fa-crosshairs mr-2"></i> Reservar Ahora
          </a>
          <a 
            href="https://wa.me/56912345678" 
            className="border-2 border-white text-white py-3 px-8 rounded-md font-semibold text-lg text-center hover:bg-white hover:bg-opacity-10 transition duration-300 transform hover:-translate-y-1"
          >
            <i className="fab fa-whatsapp mr-2"></i> Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
