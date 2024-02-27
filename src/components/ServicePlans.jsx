import { useState } from "react";
import plan1 from "../assets/Plan1.png";
import plan2 from "../assets/Plan2.png";
import { FaStar, FaGem, FaBlackTie } from "react-icons/fa";
import {motion} from "framer-motion";
import { fadeIn } from "../variants";
import { useTranslation } from 'react-i18next';

const ServicePlans = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const plans = [
    {
      name: "Gold",
      price: t("$450/mes"),
      description:
        t("Nuestro paquete de servicios básico te brinda la asesoría y soporte que necesitas para empezar a vender en Amazon de manera efectiva y confiable."),
      icon: <FaStar className="text-gold mx-auto text-6xl"/>,
      label: t("Inicio Perfecto"),
      labelBg: "bg-yellow-500",
    },
    {
      name: "Platinum",
      price: t("$800/mes"),
      description:
        t("Un servicio ampliado, con revisiones más especializadas y acompañamiento personalizado para maximizar tu presencia y ventas en Amazon de manera efectiva, enfocado más en el crecimiento de tu marca."),
      icon: <FaGem className="text-platinum mx-auto text-6xl"/>,
      highlight: true,
      label: t("Mejor Valor"),
      labelBg: "bg-blue-700",
    },
    {
      name: "Black",
      price: t("$1000/mes"),
      description:
        t("Nuestro servicio más completo con adaptación de reportes a tus necesidades específicas y cantidad ilimitada de productos para llevar tu negocio en Amazon al siguiente nivel."),
      icon: <FaBlackTie className="text-black mx-auto text-6xl"/>,
      label: t("Máxima Escala"),
      labelBg: "bg-gray-700",
    },
  ];

  return (
    <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.2}} className="md:px-14 p-4 max-w-7xl mx-auto py-10 mt-32" id="planes">
      <div className="text-center">
        <h2 className="md:text-6xl text-3xl font-extrabold text-secondary mb-2">
          {t('Nuestros Planes de Servicio')}
        </h2>
        <p className="text-secondary md:w-2/3 mx-auto px-4 text-xl">
          {t('Impulsa tus productos en Amazon con nuestra gestión para empresas latinoamericanas, aumentando presencia y éxito en el comercio electrónico con nuestra experiencia.')}
        </p>
      </div>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-10 mt-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative border-2  ${plan.highlight ? 'bg-blue-100 border-blue-500' : 'border-gray-200 bg-[#eef0ed]'} py-10 md:px-6 px-4 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}
          >
            <div className={`absolute top-0 right-0 ${plan.labelBg} text-white py-1 px-4 rounded-bl-lg rounded-tr-lg text-sm font-bold`}>
              {plan.label}
            </div>
            {plan.icon}
            <h3 className={`text-3xl font-bold text-center text-secondary mt-5`}>
              {plan.name} Plan
            </h3>
            <p className="text-[#8a96ac] text-center my-5 text-3xl font-bold">{plan.price}</p>
            <p className="text-secondary my-5 text-lg text-justify">
              {plan.description}
            </p>
          </div>
        ))}
      </div>

      <div id="accordion-flush" data-accordion="collapse" className="mt-10">
        <h2 id="accordion-flush-heading-1">
          <button
            type="button"
            className="flex items-center justify-center w-full py-5 font-semibold text-xl text-secondary bg-[#e6e3df] hover:bg-[#a5a09a] rounded-lg shadow-md transition duration-300 ease-in-out"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="accordion-flush-body-1"
          >
            <span className="flex-grow text-center">{t('¿Te gustaría saber más detalles sobre nuestros planes?')}</span>
            <svg
              data-accordion-icon
              className={`w-6 h-6 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </h2>
        {isOpen && (
          <div
            id="accordion-flush-body-1"
            className="py-5 bg-[#f5f4f2] rounded-b-lg transition duration-300 ease-in-out"
            aria-labelledby="accordion-flush-heading-1"
          >
            <div className="flex flex-col items-center justify-center">
              <img src={plan1} alt="Plan 1" className="mx-auto block mb-14" />
              <img src={plan2} alt="Plan 2" className="mx-auto block" />
            </div>
            <p className="mb-4 text-center text-secondary">
                {t('*Presupuesto de ADS, Fees de Plataforma no incluidos')}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ServicePlans;