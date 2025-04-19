const AboutUs = () => {
  const differentiators = [
    {
      icon: "fas fa-map",
      title: "Escenarios tácticos",
      description: "Con obstáculos reales y diseño militar"
    },
    {
      icon: "fas fa-moon",
      title: "Partidas nocturnas",
      description: "Con sistema de iluminación LED"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Equipamiento completo",
      description: "Seguro y de alta calidad"
    },
    {
      icon: "fas fa-leaf",
      title: "Experiencia eco-friendly",
      description: "Con uso de materiales reciclados"
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-[var(--tactical-beige)]">
      <div className="container mx-auto px-4">
        <h2 className="font-barlow text-4xl font-bold mb-12 text-center section-heading inline-block mx-auto">SOBRE NOSOTROS</h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <p className="text-lg mb-6">
              Somos un campo de paintball diseñado para quienes buscan adrenalina, estrategia y diversión en equipo.
            </p>
            <p className="text-lg mb-8">
              Ubicados en Copiapó, nacimos con la idea de ofrecer un espacio único, sustentable y emocionante, 
              ideal para cumpleaños, despedidas, eventos de empresas o simplemente una buena batalla con amigos.
            </p>
            
            <h3 className="font-barlow text-2xl font-bold mb-6">¿Qué nos diferencia?</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {differentiators.map((item, index) => (
                <div key={index} className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-md">
                  <div className="text-[var(--tactical-orange)] text-3xl">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h4 className="font-barlow text-xl font-semibold mb-2">{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1554137099-85e55fc1c4fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Equipo de Zona Táctica Atacama" 
              className="rounded-lg shadow-xl w-full h-[400px] object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
