import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Servicios from './components/Servicios'
import ServiciosExperiencia from './components/ServiciosExperiencia'
import ServiciosLista from './components/ServiciosLista'
import Footer from './shared/Footer'
import Contact from './components/Contact'
import ServicePlans from './components/ServicePlans'

function App() {
  return (
    <div className='bg-[#f5f4f2]'>
        <Navbar/>
        <Home/>
        <Servicios/>
        <ServiciosExperiencia/>
        <ServiciosLista/>
        <ServicePlans/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
