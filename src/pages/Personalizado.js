import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Intro from "../components/intro/Intro";
import Slider from "../components/slider/Slider";
import Footer from "../components/Footer/Footer";
import WhatsappBoton from "../components/Whatsapp/Whatsapp";

function Personalizados() {
    return (
        <div>
            <Navbar />
            <Header />
            <Intro/>
            <Slider/>
            <WhatsappBoton/>
            <Footer />
            
        </div>
    )
}

export default Personalizados;