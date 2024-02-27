import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

    return (
      <section className="mt-10" id='contact'>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-5xl tracking-tight font-extrabold text-center text-secondary">{t('Contáctanos')}</h2>
          <p className="mb-8 lg:mb-8 px-4 text-xl text-center text-secondary sm:text-xl">{t('¿Tienes alguna pregunta o te interesan nuestros servicios? Ponte en contacto y estaremos encantados de ayudarte')}</p>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-lg font-semibold text-secondary">{t('Tu correo')}</label>
              <input type="email" id="email" className="shadow-md bg-white border border-gray-300 text-secondary text-2sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Email" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-lg font-semibold text-secondary">{t('Tema')}</label>
              <input type="text" id="subject" className="block p-3 w-full text-2sm text-secondary bg-white rounded-lg border border-gray-300 shadow-md focus:ring-blue-500 focus:border-blue-500" placeholder={t('¿Cómo te podemos ayudar?')} required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-lg font-semibold text-secondary">{t('Comentario')}</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-2sm text-secondary bg-white rounded-lg shadow-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder={t('Déjanos un comentario')}></textarea>
            </div>
            <button type="submit" className="py-3 px-5 text-lg font-medium text-center text-white rounded-lg bg-[#555555] hover:bg-[#726a6a] focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-150 ease-in-out">{t('Enviar mensaje')}</button>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;