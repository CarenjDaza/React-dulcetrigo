import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Carrito from '../components/carrito/Carrito';
import WhatsappBoton from '../components/Whatsapp/Whatsapp';
function Compras(){
    return(
        <div>
        <Navbar/>
        <Header/>
        <Carrito/>
        <WhatsappBoton/>
        <Footer/>
        </div>
    );

}

export default Compras;