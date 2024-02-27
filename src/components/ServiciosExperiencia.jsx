import mielImage from "../assets/Miel.png"
import {motion} from "framer-motion";
import { fadeIn } from "../variants";
import { useTranslation } from 'react-i18next';

const ServiciosExperiencia = () => {
    const { t } = useTranslation();

    return(
        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto space-y-6 mt-48">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <motion.div variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.2}} className="md:w-3/4 flex justify-center items-center">
                    <img  src={mielImage} alt="" className="object-fill h-120 w-102 rounded-3xl hover:translate-y-3 transition-all duration-300 cursor-pointer"/>
                </motion.div>

                <motion.div variants={fadeIn("left",0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.2}} className="md:w-3/4">
                    <h2 className="md:text-5xl text-3xl font-bold text-secondary mb-5 leading-normal">{t('Te asistimos a sacar el máximo valor')}
                        a tus <span className="text-cuaternaryOrange">productos</span>
                    </h2>
                    <ul className="list-disc mt-10">
                        <li className="md:text-2xl text-xl text-secondary mb-5 leading-normal">{t('Más de 100 productos desarrollados y posicionados en 15 países.')}</li>
                        <li className="md:text-2xl text-xl text-secondary mb-5 leading-normal">{t('Expertise en New Product Development, Value Product y posicionamiento de marca.')}</li>
                        <li className="md:text-2xl text-xl text-secondary mb-5 leading-normal">{t('Gran network internacional en el mundo alimenticio y partners logísticos en toda la cadena de distribución desde la exportación a la tienda.')}</li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
};

export default ServiciosExperiencia