import logo from '../../assets/img/LogoDulceTrigo.svg';
import React from 'react';
import './Header.css';


function header(){
    return(
    <header id="header-container">
        <a href="/"><img src={logo} alt="Logo dulce trigo" class="logo" /></a>
        <div class="button-header">
            <h3 class="header-title">“Traemos el dulce sabor que le hace falta a tu vida”</h3>
            <div className='buttons-container'>
                <input type="search" id="search" className='icon-search' name="search" placeholder=" " />
                <a href='/Compras'>
                <button type="submit">
                    <i class="fa-solid fa-cart-shopping shop"></i>
                </button>
                </a>
                <a href='/'>
                <button type="submit">
                    <i class="fa-solid fa-house-chimney shop"></i>
                </button>
                </a>

            </div>
        </div>
    </header>
    )
}
export default header;