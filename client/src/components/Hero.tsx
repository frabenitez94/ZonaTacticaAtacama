import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="inicio" className="hero-pattern relative min-h-[90vh] flex items-center text-white">
      <div className="absolute inset-0 bg-[var(--tactical-dark)] bg-opacity-70"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="font-barlow text-5xl sm:text-6xl font-bold mb-2">ZONA TÁCTICA ATACAMA</h1>
          <p className="font-blackops text-[var(--tactical-orange)] text-xl mb-6">"Donde la estrategia se vuelve adrenalina"</p>
          <p className="text-xl mb-8">
            La primera cancha de paintball en Copiapó especializada en arriendo para equipos, 
            torneos privados y experiencias extremas con partidas diurnas y nocturnas.
          </p>
          <p className="text-2xl font-barlow font-semibold mb-8">¿Estás listo para convertirte en leyenda?</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#reserva" 
              className="bg-[var(--tactical-orange)] text-white py-3 px-8 rounded-md font-semibold text-lg text-center hover:bg-opacity-90 transition duration-300 transform hover:-translate-y-1"
            >
              Reservar Ahora
            </a>
            <a 
              href="#tarifas" 
              className="border-2 border-white text-white py-3 px-8 rounded-md font-semibold text-lg text-center hover:bg-white hover:bg-opacity-10 transition duration-300 transform hover:-translate-y-1"
            >
              Conoce los valores
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
