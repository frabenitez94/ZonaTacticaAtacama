const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1551673446-3aaa1dba6061?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Torneo Elite Squad",
      subtitle: "Copiapó, 2023"
    },
    {
      src: "https://images.unsplash.com/photo-1551665534-9aef7334b094?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Equipo Táctico Completo",
      subtitle: "Seguridad garantizada"
    },
    {
      src: "https://images.unsplash.com/photo-1552146891-e1efdb1ac868?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Escenario Táctico",
      subtitle: "Obstáculos reales"
    },
    {
      src: "https://images.unsplash.com/photo-1551673897-f9ef60e0ac48?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Trabajo en Equipo",
      subtitle: "Estrategia y coordinación"
    },
    {
      src: "https://images.unsplash.com/photo-1676201558292-0241fcf229c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Partida Nocturna",
      subtitle: "Sistema de iluminación LED"
    },
    {
      src: "https://images.unsplash.com/photo-1587019536176-edd9c1d50153?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      title: "Eventos Corporativos",
      subtitle: "Team building extremo"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-[var(--tactical-beige)]">
      <div className="container mx-auto px-4">
        <h2 className="font-barlow text-4xl font-bold mb-12 text-center section-heading inline-block mx-auto">GALERÍA</h2>
        
        <div className="flex justify-center mb-10">
          <p className="max-w-2xl text-center">
            Imágenes de partidas reales, jugadores en acción y el ambiente del campo.<br />
            <span className="font-semibold">¡Sube tu historia usando #ZonaTacticaAtacama y podrás salir en nuestra web!</span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg h-64 shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--tactical-dark)] to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="font-barlow font-bold">{image.title}</p>
                <p className="text-sm">{image.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <div className="flex gap-2">
            <a 
              href="#" 
              className="bg-[var(--tactical-dark)] text-white p-3 rounded-full hover:bg-[var(--tactical-orange)] transition-colors duration-300"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a 
              href="#" 
              className="bg-[var(--tactical-dark)] text-white p-3 rounded-full hover:bg-[var(--tactical-orange)] transition-colors duration-300"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a 
              href="#" 
              className="bg-[var(--tactical-dark)] text-white p-3 rounded-full hover:bg-[var(--tactical-orange)] transition-colors duration-300"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
