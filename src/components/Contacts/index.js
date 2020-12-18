import React from 'react'
import './index.css'
import pistachios from './images/pistachios.png'
import pistachios2 from './images/pistachios2.png'
import instagram from './images/instagram.png'
import whatsapp from './images/whatsapp.png'
import facebook from './images/facebook.png'

export default function Contacts() {
    return (
        <div>
            <p class="sectionPharagraph">Контакты</p>
            <img src={pistachios} alt="" class="pist"/>
            <img src={pistachios2} alt="" class="pist2"/>
            <div class="section">
                <div>
                    <div>
                        <p class="workTime">Режим работы</p>
                        <p class="time">c 10:00 до 20:00</p>
                        <p class="days">Сб, Вс - выходной</p>
                    </div>
                    <div>
                        <p class="phone">Телефон</p>
                        <p class="firstPhone">+996 (0553) 577-575</p>
                        <p class="secondPhone">+996 (0773) 577-575</p>
                    </div>
                    <div>
                        <p class="adres">Адрес</p>
                        <p class="city">г. Бишкек, Медерова, 50/2</p>
                    </div>
                    <div class="sectionImages">
                        <img src={facebook} alt="" class="facebookImage"/>
                        <img src={whatsapp} alt="" class="whatsappImage"/>
                        <img src={instagram} alt="" class="instagramImage"/>
                    </div>
                </div>
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11699.8116532138!2d74.6223365510129!3d42.85272740750602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7f3216abe71%3A0x10aa63d2976f27c9!2sSB%20bar!5e0!3m2!1sru!2skg!4v1607442747812!5m2!1sru!2skg" width="858" height="486" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0" class="googleMap"></iframe>        </div>    
            </div>
        </div>
    )
}
