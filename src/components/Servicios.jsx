import { GrOptimize } from "react-icons/gr";
import { GiSellCard } from "react-icons/gi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import {motion} from "framer-motion";
import { fadeIn } from "../variants";
import { useTranslation } from 'react-i18next';

const Servicios = () => {
    const { t } = useTranslation();
    return(
        <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto mt-32">
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <motion.div variants={fadeIn("right",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.2}} className="lg:w-1/4">
                    <h3 className="text-5xl text-secondary font-bold lg:w-3/4 mb-3">{t('¿Cómo te podemos ayudar?')}</h3>
                    <p className="text-xl text-secondary mt-6 text-justify mr-6">{t('En ASR Boost, potenciamos el valor de tu marca y facilitamos tu entrada en nuevos mercados. Te enseñamos a liderar tu negocio de exportación con estrategias a medida y capacitación continua, asegurando tu éxito y autonomía en el mercado internacional.')}</p>
                </motion.div>

                {/* Feature Cards */}
                <motion.div variants={fadeIn("up",0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount: 0.2}}  className="w-full lg:w-3/4">
                    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
                        <div className="border-1 bg-[#D9E4DD] rounded-[35px] h-96 shadow-2xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
                            <div>
                                <div className="flex justify-center items-center">
                                    <GrOptimize className="text-5xl"/>
                                </div>
                                <h5 className="text-3xl font-semibold text-secondary px-5 text-center mt-5">{t('Optimizar el valor de tu marca')}</h5>
                            </div>
                        </div>
                        <div className="border-1 bg-[#D9E4DD] rounded-[35px] h-96 shadow-2xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
                            <div>
                                <div className="flex justify-center items-center">
                                    <GiSellCard className="text-5xl"/>
                                </div>
                                <h5 className="text-3xl font-semibold text-secondary px-5 text-center mt-5">{t('Estrategias de inserción al mercado')}</h5>
                            </div>
                        </div>
                        <div className="border-1 bg-[#D9E4DD] rounded-[35px] h-96 shadow-2xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
                            <div>
                                <div className="flex justify-center items-center">
                                    <LiaChalkboardTeacherSolid className="text-5xl"/>
                                </div>
                                <h5 className="text-3xl font-semibold text-secondary px-5 text-center mt-5">{t('Capacitación para la administración de tu marca')}</h5>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
};

export default Servicios;