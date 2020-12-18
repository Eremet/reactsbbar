import React from 'react'
import './menu.css'
import buy from './images/buy.png'


export default function index() {
    return (
        <div>
            <section className="sectionMenuList">
                <div className="menuUl">
                    <h1>Меню</h1>
                    <ul className="menuNav">
                        <a href="">
                            <li>Новинки</li>
                        </a>
                        <a href="">
                            <li>Популярное</li>
                        </a>
                        <a href="">
                            <li>Популярное</li>
                        </a>
                        <a href="">
                            <li>Акции</li>
                        </a>
                        <a href="">
                            <li>Стейки</li>
                        </a>
                        <a href="">
                            <li>Гарниры</li>
                        </a>
                        <a href="">
                            <li>Салаты</li>
                        </a>
                        <a href="">
                            <li>Напитки</li>
                        </a>
                        <a href="">
                            <li>Напитки</li>
                        </a>
                        <a href="">
                            <li>Напитки</li>
                        </a>
                    </ul>
                </div>
                <div>
                    <div className="cards">
                        <div className="card">
                            <img src={buy} alt=""/>
                            <p className="ady">Форель с булгуром</p>
                            <p className="about">Описание продукта, особенности, плюсы<br/>и минусы.</p>
                            <div className="button">
                                <p className="som">1000 сом</p>
                                <p className="amount">- 1 +</p>
                                <button className="buttoN">В корзину</button>    
                            </div>
                        </div>
                        <div>
                            <div className="card">
                                <img src={buy} alt=""/>
                                <p className="ady">Форель с булгуром</p>
                                <p className="about">Описание продукта, особенности, плюсы<br/>и минусы.</p>
                                <div className="button">
                                    <p className="som">1000 сом</p>
                                    <p className="amount">- 1 +</p>
                                    <button className="buttoN">В корзину</button>    
                                </div>
                            </div>
                
                        </div>
                        <div>
                            <div className="card">
                                <img src={buy} alt=""/>
                                <p className="ady">Форель с булгуром</p>
                                <p className="about">Описание продукта, особенности, плюсы<br/>и минусы.</p>
                                <div className="button">
                                    <p className="som">1000 сом</p>
                                    <p className="amount">- 1 +</p>
                                    <button className="buttoN">В корзину</button>    
                                </div>
                            </div>    
                        </div>
                    </div>
                </div>
            </section>
            <div className="downMoreButton">
                <button className="moreButton">ЗАГРУЗИТЬ ЕЩЕ</button>
            </div>
        </div>
    )
}
