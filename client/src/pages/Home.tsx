import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Reservation from "@/components/Reservation";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Zona Táctica Atacama - Paintball en Copiapó</title>
        <meta name="description" content="La primera cancha de paintball en Copiapó especializada en arriendo para equipos, torneos privados y experiencias extremas con partidas diurnas y nocturnas." />
      </Helmet>
      <div className="font-roboto text-[var(--tactical-dark)] antialiased">
        <Header />
        <Hero />
        <AboutUs />
        <Pricing />
        <Gallery />
        <Reservation />
        <FAQ />
        <CallToAction />
        <Footer />
      </div>
    </>
  );
};

export default Home;
