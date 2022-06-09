import './Botonhome.css';
import hr from '../../assets/img/linea-nav.svg';

function Botonhome() {
    return (
        <div className='home'>
            <h2>¿De que te antojaste hoy?</h2>
            <img src={hr} alt="linea" className='hr'/>
            <div className='buttons'>
                <button className='boton1 cake'>
                    <a href="src/pages/pasteleria/galletas.html" >
                        <div>
                            <span>
                                <h1 className='thome'>Pasteleria</h1>
                                <hr/>
                            </span>
                        </div>
                    </a>
                </button>
                <button className='boton2 bakery'>
                    <a href="src/pages/pasteleria/especial.html" >
                        <div>
                            <span>
                                <h1 className='thome'>Panaderia</h1>
                                <hr/>
                            </span>
                        </div>
                    </a>
                </button>   
            </div>
            <img src={hr} alt="linea" className='hr'/>
        </div>

    )
}

export default Botonhome;
