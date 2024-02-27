import puntoVerde from "../assets/Rectangle 18.png";
import DesProd from "../assets/purpleSecret.png";
import Licencia from "../assets/FDAap.png";
import LicenciaComida from "../assets/NutFacts.png";
import Amazon from "../assets/marketPlace.png";
import Bus from "../assets/BusinessIllustration.png";
import {motion} from "framer-motion";
import { fadeIn } from "../variants";
import { useTranslation } from 'react-i18next';

const ServiciosLista = () => {
  const { t } = useTranslation();

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10 mt-44" id="services">
      <motion.div variants={fadeIn("down",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.2}} className="text-center">
        <h2 className="md:text-6xl text-3xl font-extrabold text-secondary mb-2">
          {t('Servicios ASR Boost')}
        </h2>
        <p className="text-secondary md:w-1/3 mx-auto px-4 text-xl">
         {t('Con nuestros servicios, diseñamos la estrategia que mejor se adapte a tu negocio y producto')}
        </p>
      </motion.div>

      <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.2}} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 md:w-11/12 mx-auto">
        <div className="border-2 py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:translate-y-4 transition-all duration-300 cursor-pointer bg-[#f2f5f7]">
          <h3 className="text-3xl font-bold text-center text-secondary">
            {t('Marketplace & E-commerce')}
          </h3>
          <p className="text-secondary text-center my-5 text-lg">
            {t('Más de 16 Marketplaces Desarrollados en EEUU, Chile, Costa Rica y Reino Unido')}
          </p>
          <ul className="mt-8 space-y-4 px-4 text-lg text-secondary">
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Desarrollo de Marketplace propio.')}
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Estudio de mercado y viabilidad para recomendar la estrategia correcta de precios.')}
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Diseño especializado de tienda para cada emprendedor.')}
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Capacitación en las herramientas de operación.')}
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Implementar estrategias de marketing digital que potencien las ventas de tu tienda.')}
            </li>
          </ul>
          <div className="md:w-11/13 flex justify-center items-center mt-2">
            <img
              src={Amazon}
              alt=""
              className="object-fill h-54 w-70 rounded-3xl mt-4"
            />
          </div>
        </div>

        <div className="border-2 py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:translate-y-4 transition-all duration-300 cursor-pointer bg-[#f2f5f7]">
          <h3 className="text-3xl font-bold text-center text-secondary">
            {t('Licencias')}
          </h3>
          <p className="text-secondary text-center my-5 text-lg">
            {t('A través de nuestra empresa partner en EE.UU. Andean Group LLC, apoyamos a nuestros clientes')}
          </p>
          <ul className="mt-8 space-y-4 px-4 text-lg text-secondary">
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Facilitamos el registro FDA para exportar productos a EE.UU.')}
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Orientación para actuar como tu propio importador.')}
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Agilizamos la adquisición de licencias de exportación e importación.')}
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Asesoría financiera con el Export-Import Bank de EE.UU.')}
            </li>
          </ul>
          <div className="md:w-11/13 flex justify-center items-center">
            <img
              src={Licencia}
              alt=""
              className="object-fill h-60 w-80 rounded-3xl mt-10"
            />
          </div>
        </div>
        <div className="border-2 py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:translate-y-4 transition-all duration-300 cursor-pointer bg-[#f2f5f7]">
          <h3 className="text-3xl font-bold text-center text-secondary">
            {t('Packaging y Regulaciones')}
          </h3>
          <p className="text-secondary text-center my-5 text-lg">
            {t('Adaptación tablas nutricionales y empaques FDA & EU Compliant para exportar')}
          </p>
          <ul className="mt-8 space-y-4 px-4 text-lg text-secondary">
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Adaptamos tablas nutricionales y empaques para cumplimiento global.')}
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Aseguramos conformidad con FDA y UE para exportaciones.')}
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Agilizamos procesos para la comercialización de comestibles.')}
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Ofrecemos guías regulatorias por destino de exportación.')}
            </li>
          </ul>
          <div className="md:w-11/13 flex justify-center items-center">
            <img
              src={LicenciaComida}
              alt=""
              className="object-fill h-60 w-80 rounded-3xl"
            />
          </div>
        </div>
      </motion.div>
      <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.2}} className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10 mt-20 md:w-8/12 mx-auto">
        <div className="border-2 py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:translate-y-4 transition-all duration-300 cursor-pointer bg-[#f2f5f7]">
          <h3 className="text-3xl font-bold text-center text-secondary">
            {t('Desarrollo de productos')}
          </h3>
          <p className="text-secondary text-center text-lg my-5">
            {t('A partir de un producto especifico podemos incursionar en nuevas líneas')}
          </p>
          <ul className="mt-8 space-y-4 px-4 text-lg text-secondary">
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Diversificamos tus productos basándonos en tu catálogo actual.')}
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Abrimos puertas a nuevos mercados internacionales para ampliar tu presencia global.')}
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Expandimos tu alcance al conectar con una amplia gama de perfiles de consumidores.')}
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Enriquecemos la oferta de tu tienda.')}
            </li>
          </ul>
          <div className="md:w-11/13 flex justify-center items-center">
            <img
              src={DesProd}
              alt=""
              className="object-fill h-60 w-80 rounded-3xl mt-5"
            />
          </div>
        </div>
        <div className="border-2 py-10 md:px-6 px-4 rounded-lg shadow-3xl hover:translate-y-4 transition-all duration-300 cursor-pointer bg-[#f2f5f7]">
          <h3 className="text-3xl font-bold text-center text-secondary">
            Retail & Crossborder
          </h3>
          <p className="text-secondary text-center my-5 text-lg">
            {t('Ingreso al mercado destino cómo, cuándo, dónde y con quién hacerlo')}
          </p>
          <ul className="mt-8 space-y-4 px-4 text-lg text-secondary">
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Diseñamos la estrategia comercial para ingresar al mercado internacional.')}
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Hacemos los estudios de viabilidad y logística.')}
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Acompañamiento paso por paso, desde el envío de productos hasta el lanzamiento de marca.')}
            </li>
            <li className="flex gap-3 items-center">
              <img src={puntoVerde} alt="" className="w-3 h-3" />
              {t('Compartimos nuestros contactos de los principales agentes de la cadena, generando la red y el conocimiento necesario para la venta.')}
            </li>
          </ul>
          <div className="md:w-11/13 flex justify-center items-center mt-2">
            <img
              src={Bus}
              alt=""
              className="object-fill h-52 w-62 rounded-3xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServiciosLista;
