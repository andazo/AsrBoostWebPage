import Banner from '../shared/Banner';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    return(
        <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id='home'>
            <Banner 
                heading={t('Impulsamos el éxito de tus productos')} 
                subheading={t('Contamos con más de 18 años de experiencia exportando productos de Chile, Colombia, Perú & Costa Rica al Mundo')}
            />
        </div>
    )
};

export default Home;