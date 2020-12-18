import React from 'react'
import logo from '../Basket/images/logo.png'
import enter from '../Basket/images/enter.png'
import basket from '../Basket/images/Корзина.png'
import './index.css'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <header>
                <div>
                    <ul className="nav">
                        <Link to='/Menu' className="menu">
                            <li>Меню</li>
                        </Link>
                    
                        <Link to='/Shares' className="shares">
                            <li>Акции</li>
                        </Link>
                
                        <Link to='/SB_bar' className="aboutUs">
                            <li>О нас</li>
                        </Link>
                    
                        <a href="#" className="logoImage">
                            <img src={logo} alt=""/>
                        </a>
                        <Link to='Contacts' className="contacts" onclick="showcontacts()">
                            <li>Контакты</li>
                        </Link>
                        <Link to='' className="enter">
                            <img src={enter} alt=""/>
                            <li>Войти</li>
                        </Link>
                        <Link to='Basket' className="basket">
                            <img src={basket} alt=""/>
                        </Link>
                    </ul>
                </div>
            </header>
        </div>
    )
}
