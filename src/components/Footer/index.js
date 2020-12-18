import React from 'react'
import './index.css'
import whatsapp from '../Basket/images/whatsapp.png'
import instagram from '../Basket/images/instagram.png'
import facebook from '../Basket/images/facebook.png'
import logo from '../Basket/images/logo.png'

export default function Footer() {
    return (
        <div>
             <footer>
                <div className="footerBlockOne">
                    <img src={logo}/>
                </div>
                <div className="footerBlockTwo">
                    <p className="bold">Режим работы</p>
                    <p className="p">c 10:00 до 20:00</p>
                    <p className="p">Сб, Вс - выходной</p>
                </div>
                <div className="footerBlockThree">
                    <p className="bold">Телефон</p>
                    <p className="p">+996 (0553) 577-575</p>
                    <p className="p">+996 (0773) 577-575</p>
                </div>
                <div className="footerBlockFour">
                    <p className="bold">Адрес</p>
                    <p className="p">г. Бишкек, Медерова, 50/2</p>
                </div>
                <div className="footerImages">
                    <img src={instagram} alt="" className="instagram"/>
                    <img src={facebook} alt="" className="facebook"/>
                    <img src={whatsapp} alt="" className="whatsapp"/>
                </div>
            </footer>
        </div>
    )
}
