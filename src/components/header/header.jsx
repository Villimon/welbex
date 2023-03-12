import React from 'react';
import Logo from '../../images/logo_welbex.png'
import HeaderNavigation from './headerNavigation';


const Header = () => {
    return (
        <header className='header'>
            <div className='header__container container'>
                <div className='header__logo'>
                    <img src={Logo} />
                    <h3 className='header__lable'>крупный интегратор CRM в Росcии и ещё 8 странах</h3>
                </div>
                <HeaderNavigation />
                <div className="header__connection">
                    <a href='+75555555555' className="header__phone" >+7 555 555-55-55</a>
                    <div className="header__social">
                        <a href="#"><span className="header__icon _icons-tg"></span></a>
                        <a href="#"><span className="header__icon _icons-phone"></span></a>
                        <a href="#"><span className="header__icon _icons-wa"></span></a>
                    </div>
                </div>
            </div>
            <span className='header__circle'></span>
            <span className='header__circle-big'></span>
            <span className='header__circle-red'></span>
        </header>

    );
}

export default Header;
