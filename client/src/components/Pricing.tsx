const Pricing = () => {
  const packages = [
    {
      icon: "fas fa-calendar-day",
      title: "Lunes a Viernes",
      price: "$30.000",
      unit: "/hora",
      features: [
        "Campo táctico por tiempo contratado",
        "10 marcadoras + máscaras + chalecos",
        "100 bolitas por jugador"
      ]
    },
    {
      icon: "fas fa-calendar-week",
      title: "Sábados y Domingos",
      price: "$40.000",
      unit: "/hora",
      features: [
        "Campo táctico por tiempo contratado",
        "10 marcadoras + máscaras + chalecos",
        "100 bolitas por jugador"
      ]
    },
    {
      icon: "fas fa-shield-alt",
      title: "Pack Full Day",
      price: "$150.000",
      unit: "/5 horas",
      features: [
        "Campo táctico por 5 horas",
        "10 marcadoras + máscaras + chalecos",
        "100 bolitas por jugador",
        "30% descuento en bolitas extra"
      ]
    }
  ];

  const extras = [
    {
      title: "100 bolitas extra",
      price: "$5.000",
      description: "Adquiere munición adicional para tu partida"
    },
    {
      title: "Registro fotográfico",
      price: "$20.000",
      description: "Fotos profesionales de tu experiencia"
    },
    {
      title: "Partida nocturna",
      price: "+$10.000/h",
      description: "Experiencia con iluminación LED táctica"
    },
    {
      title: "Cumpleañero gratis",
      price: "8+ personas",
      description: "Festeja tu cumpleaños con ventaja táctica"
    }
  ];

  return (
    <section id="tarifas" className="py-20 bg-[var(--tactical-green)] text-white">
      <div className="container mx-auto px-4">
        <h2 className="font-barlow text-4xl font-bold mb-12 text-center section-heading inline-block mx-auto">TARIFAS Y SERVICIOS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="bg-[var(--tactical-dark)] bg-opacity-50 rounded-lg p-8 border-l-4 border-[var(--tactical-orange)] transform transition duration-300 hover:-translate-y-2"
            >
              <div className="font-blackops text-3xl text-[var(--tactical-orange)] mb-2">
                <i className={pkg.icon}></i>
              </div>
              <h3 className="font-barlow text-2xl font-bold mb-4">{pkg.title}</h3>
              <p className="text-4xl font-barlow font-bold mb-6">
                {pkg.price}<span className="text-lg font-normal">{pkg.unit}</span>
              </p>
              
              <ul className="mb-8 space-y-3">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <i className="fas fa-check text-[var(--tactical-orange)] mt-1 mr-3"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#reserva" 
                className="block w-full bg-[var(--tactical-orange)] text-white py-3 rounded-md font-semibold text-center hover:bg-opacity-90 transition duration-300"
              >
                Reservar
              </a>
            </div>
          ))}
        </div>
        
        {/* Extras */}
        <div className="mt-16">
          <h3 className="font-barlow text-2xl font-bold mb-8 flex items-center">
            <i className="fas fa-plus-circle text-[var(--tactical-orange)] mr-3"></i> EXTRAS DISPONIBLES
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {extras.map((extra, index) => (
              <div key={index} className="bg-[var(--tactical-dark)] bg-opacity-30 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-barlow text-lg font-bold">{extra.title}</span>
                  <span className="bg-[var(--tactical-orange)] px-3 py-1 rounded font-bold">{extra.price}</span>
                </div>
                <p className="text-gray-200 text-sm">{extra.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
