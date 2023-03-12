import React from "react";
import FooterNavigation from "./footerNavigation";



const list1 = [
    { id: 1, title: 'Расчёт стоимости' },
    { id: 2, title: 'Услуги' },
    { id: 3, title: 'Виджеты' },
    { id: 4, title: 'Интеграции' },
    { id: 5, title: 'Наши клиенты' },
]
const list2 = [
    { id: 1, title: 'Кейсы' },
    { id: 2, title: 'Благодарственные письма' },
    { id: 3, title: 'Сертификаты' },
    { id: 4, title: 'Блог на Youtube' },
    { id: 5, title: 'Вопрос / Ответ' },
]




const Footer = () => {

    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <div className='footer__row'>
                    <div className='footer__item item-footer'>
                        <h3 className='item-footer__title'>О компании</h3>
                        <ul className='item-footer__list'>
                            <li><a href="#" className="item-footer__link">Партнёрская программа</a></li>
                            <li><a href="#" className="item-footer__link">Вакансии</a></li>
                        </ul>
                    </div>
                    <div className='footer__item item-footer'>
                        <h3 className='item-footer__title'>Меню</h3>
                        <div className='item-footer__lists'>
                            <FooterNavigation list={list1} />
                            <FooterNavigation list={list2} />
                        </div>
                    </div>
                    <div className='footer__item item-footer item-footer-end'>
                        <h3 className='item-footer__title'>Контакты</h3>
                        <ul className='item-footer__list'>
                            <li>  <a href='+75555555555' className="item-footer__link" >+7 555 555-55-55</a></li>
                            <div className="item-footer__social">
                                <a href="#"><span className="item-footer__icon _icons-tg"></span></a>
                                <a href="#"><span className="item-footer__icon _icons-phone"></span></a>
                                <a href="#"><span className="item-footer__icon _icons-wa"></span></a>
                            </div>
                            <li className="item-footer__link">Москва, Путевой проезд 3с1, к 902</li>
                        </ul>
                    </div>
                </div>
                <div className='footer__footer'>
                    <span>©WELBEX 2022. Все права защищены.</span>
                    <a href='#'>Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    )

}

export default Footer;
