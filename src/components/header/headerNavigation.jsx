import React from 'react';


const nav = [
    { id: 1, title: 'Услуги' },
    { id: 2, title: 'Виджеты' },
    { id: 3, title: 'Интеграции' },
    { id: 4, title: 'Кейсы' },
    { id: 5, title: 'Сертификаты' },
]


const HeaderNavigation = () => {
    return (
        <nav className="header__body">
            <div className="header__list">
                {nav.map(item =>
                    <a key={item.id} href="#" className="header__link">{item.title}</a>
                )}
            </div>
        </nav>
    );
}

export default HeaderNavigation;
