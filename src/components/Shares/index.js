import React from 'react'
import './index.css'
import secondIMG from './images/secondImage.png'

export default function index() {
    return (
        <div>
            <section className="shares">
                <div className="secondCard">
                        <p className="name">Филе c булгуром</p>
                        <p className="about">Описание продукта, особенности, плюсы и<br/>минусы. Описание продукта, особенности,<br/>плюсы и минусы. </p>
                        <p className="pastPrice">1000 сом</p>
                        <p className="price">500 сом</p>    
                        <button>В КОРЗИНУ</button>
                        <img src={secondIMG}/>
                </div>
            </section>
        </div>
    )
}
