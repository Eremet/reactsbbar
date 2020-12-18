import React from 'react'
import './index.css'
import food from './images/food.png'
import illustration from './images/ilustration.png'

export default function Basket() {
    return (
        <div>
            <h1 className="sectionText">Корзина</h1>
            <div className="card">
                <img src={food} alt="" className="cardImage"/>
                <p className="name">Форель с булгуром</p>
                <p className="plus">+</p>
                <p className="amount">Количество</p>
                <p className="price">Цена</p>
                <p className="lastPrice">Конечная цена</p>
                <p className="quantity">+ 2 -</p>
                <p className="priceSom">1000 сом</p>
                <p className="lastPriceSom">2000 сом</p>
            </div>
            <div className="card">
                <img src={food} alt="" className="cardImage"/>
                <p className="name">Форель с булгуром</p>
                <p className="plus">+</p>
                <p className="amount">Количество</p>
                <p className="price">Цена</p>
                <p className="lastPrice">Конечная цена</p>
                <p className="quantity">+ 2 -</p>
                <p className="priceSom">1000 сом</p>
                <p className="lastPriceSom">2000 сом</p>
            </div>
            <div className="card">
                <img src={food} alt="" className="cardImage" />
                <p className="name">Форель с булгуром</p>
                <p className="plus">+</p>
                <p className="amount">Количество</p>
                <p className="price">Цена</p>
                <p className="lastPrice">Конечная цена</p>
                <p className="quantity">+ 2 -</p>
                <p className="priceSom">1000 сом</p>
                <p className="lastPriceSom">2000 сом</p>
            </div>
            <section className="total">
                <div className="totalPriceList">
                    <p className="totalPrice">Общая стоимость:</p>
                    <p className="totalPriceSom">6000 сом</p>
                </div>
                <div className="totalAmountList">
                    <p className="totalQuantity">Количество элементов:</p>
                    <p className="totalAmount">6</p>
                </div>
                <button className="totalBuyButton" onclick="showList()">ОФОРМИТЬ ЗАКАЗ</button>
            </section>
            <p className="extraInfoText">С этим также подойдет</p>
            <section className="extraInfo">
                <div className="secondCard">
                    <img src={food} alt="" className="secondCardImage"/>
                    <p className="secondCardsName">Форель с булгуром</p>
                    <p className="secondCardsInfo">Описание продукта, особенности,<br/>плюсы и минусы. </p>
                    <p className="secondCardsPrice">1000 сом</p>
                    <button className="inBasket">В КОРЗИНУ</button>
                </div>
                <div className="secondCard">
                    <img src={food} alt="" className="secondCardImage"/>
                    <p className="secondCardsName">Форель с булгуром</p>
                    <p className="secondCardsInfo">Описание продукта, особенности,<br/>плюсы и минусы. </p>
                    <p className="secondCardsPrice">1000 сом</p>
                    <button className="inBasket">В КОРЗИНУ</button>
                </div>
                <div className="secondCard">
                    <img src={food} alt="" className="secondCardImage"/>
                    <p className="secondCardsName">Форель с булгуром</p>
                    <p className="secondCardsInfo">Описание продукта, особенности,<br/>плюсы и минусы. </p>
                    <p className="secondCardsPrice">1000 сом</p>
                    <button className="inBasket">В КОРЗИНУ</button>
                </div>
                <div className="secondCard">
                    <img src={food} alt="" className="secondCardImage"/>
                    <p className="secondCardsName">Форель с булгуром</p>
                    <p className="secondCardsInfo">Описание продукта, особенности,<br/>плюсы и минусы. </p>
                    <p className="secondCardsPrice">1000 сом</p>
                    <button className="inBasket">В КОРЗИНУ</button>
                </div>
            </section>
            <div id="blankList" style="display: none;">
                <div className="blankList">
                    <h1>Оформление заказа</h1>
                    <p className="crossButton" onclick="hideBlankList()">+</p>
                    <p className="nameText">Ваше имя</p>
                    <input type="text" placeholder="Введите ваше имя" id="inputName"/>
                    <p className="phoneText">Ваш телефон</p>
                    <input type="text" name="" id="inputPhone" placeholder="Введите ваш телефон"/>
                    <div className="orderType">
                        <p className="orderTypeText">Тип заказа:</p>
                        <div className="squareOne"></div>
                        <p className="squareOneText">Доставка</p>
                        <div className="squareTwo"></div>
                        <p className="squareTwoText">Самовывоз</p>
                    </div>
                    <div className="addresFirst">
                        <div>
                            <p className="addresFirstText">Ваш адрес</p>
                            <input type="text" placeholder="Введите ваш адрес" id="addresFirstInput"/>
                        </div>
                        <div>
                            <p className="addresSecondText">Ваш дом</p>
                            <input type="text" placeholder="Введите ваш дом" id="addresSecondInput"/>
                        </div>
                    </div>
                    <div className="addresSecond">
                        <div>
                            <p className="secondAddresFirstText">Ваш подъезд</p>
                            <input type="text" placeholder="Введите ваш подъезд" id="firstAddresSecondInput"/>
                        </div>
                        <div>
                            <p className="secondAddresSecondText">Номер вашей квартиры</p>
                            <input type="text" placeholder="Введите номер квартиры" id="secondAddresSecondInput"/>
                        </div>
                    </div>
                    <p className="comentText">Комментарий к заказу</p>
                    <input type="text" placeholder="Введите ваш комментарий" id="comentInput"/>
                    <p className="codeText">Промокод</p>
                    <input type="text" id="codeInput" placeholder="Введите промокод"/>
                    <div className="payment">
                        <p className="paymentText">Оплата:</p>
                        <div className="paymentSquareOne"><div className="paymentBlackSquare"></div></div>
                        <p className="paymentByCard">Картой</p>
                        <div className="paymentSquareTwo"></div>
                        <p className="paymentByCash">Наличными</p>
                    </div>
                    <div className="creditCard">
                        <div>
                            <p className="creditCardNumber">Номер карты</p>
                            <input type="text" id="creditCardNumber" placeholder="0000 0000 0000 0000"/>
                        </div>
                        <div>
                            <p className="cvv">CVV</p>
                            <input type="text" id="cvv" placeholder="000"/>
                        </div>
                        <div>
                            <p className="validity">Срок действия</p>
                            <input type="text" id="validity" placeholder="ММ/ГГ"/>
                        </div>
                    </div>
                    <p className="cardHolder">Держатель карты</p>
                    <input type="text" placeholder="Введите имя и фамилию" id="cardHolder"/>
                    <div className="pricelist">
                        <p className="lastPriceList">Итоговая стоимость:</p>
                        <p className="lastPriceSomList">6000 сом</p>
                    </div>
                    <button className="orderButton"><a href="../secondBasket/index.html" className="orderText">ЗАКАЗАТЬ</a></button>
                </div>
            </div>
            <div id="illustration" style="display: none;">
                <div className="illustration">
                    <div>
                        <p className="closeButton" onclick="hideList()">+</p>
                        <p className="orderDone">Ваш заказ оформлен!</p>
                    </div>
                    <img src={illustration} alt=""/>
                    <p className="enjoyYourMeal">Приятного аппетита!</p>
                </div>
            </div>
        </div>
    )
}
