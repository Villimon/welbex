import React from 'react';


const FooterNavigation = (props) => {
    return (
        <ul className='item-footer__list'>
            {props.list.map(item => <li key={item.id}><a href="#" className="item-footer__link">{item.title}</a></li>)}
        </ul>
    );
}

export default FooterNavigation;
