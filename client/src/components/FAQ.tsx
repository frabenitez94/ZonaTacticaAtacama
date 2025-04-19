import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs: FAQ[] = [
    {
      question: "¿Desde qué edad se puede jugar?",
      answer: "Desde los 12 años con autorización de un adulto responsable. Todos los menores de 18 años deben presentar autorización firmada por sus padres o tutores."
    },
    {
      question: "¿Qué pasa si no tengo equipo?",
      answer: "Te prestamos todo lo necesario. Solo trae ropa cómoda y ganas de jugar. Nuestro equipamiento incluye marcadoras, máscaras protectoras, chalecos tácticos y bolitas de pintura."
    },
    {
      question: "¿Qué ropa llevar?",
      answer: "Ropa oscura, cómoda y que se pueda ensuciar. Recomendamos pantalones largos, polera manga larga y calzado deportivo cerrado. Las manchas de pintura son lavables pero pueden ser difíciles de quitar de algunas telas."
    },
    {
      question: "¿Cómo reservo?",
      answer: "Desde esta web completando el formulario, por WhatsApp o Instagram. Para confirmar la reserva, se solicita una seña del 50% mediante transferencia bancaria o pago en línea. El resto se paga el día de la actividad."
    },
    {
      question: "¿Duele cuando te impactan?",
      answer: "Puede sentirse como un pequeño pellizco, pero nada grave. El equipo de protección minimiza la sensación. Por seguridad, las marcadoras están calibradas con velocidades estándar para evitar lesiones."
    },
    {
      question: "¿Cuántas personas pueden jugar?",
      answer: "Nuestro campo está diseñado para grupos de 4 a 20 jugadores. Para grupos más grandes, podemos organizar torneos y rotaciones especiales. Consúltanos por opciones para eventos corporativos o grupos grandes."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-[var(--tactical-beige)]">
      <div className="container mx-auto px-4">
        <h2 className="font-barlow text-4xl font-bold mb-12 text-center section-heading inline-block mx-auto">PREGUNTAS FRECUENTES</h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6">
              <button 
                className="w-full flex justify-between items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="font-barlow text-xl font-semibold text-left">{faq.question}</h3>
                <ChevronDown 
                  className={`text-[var(--tactical-orange)] transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                className={`bg-white px-4 pb-4 pt-2 rounded-b-lg -mt-1 ${openFaq === index ? 'block' : 'hidden'}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
