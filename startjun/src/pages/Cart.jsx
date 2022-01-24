import { Link } from "react-router-dom";
import {storeContext} from '../App';
import { useContext, useState } from 'react';
import axios from 'axios';
const Cart = ({items = [], onDelete}) => {
  const {cartItems, setCartItems} = useContext(storeContext);
  const [completed, setCompleted] = useState(false);

  const clickOrdersComleted = async () => {
    try{
    await axios.post("https://61e95d2a7bc0550017bc6245.mockapi.io/orders", cartItems);
    setCompleted(true);
    setCartItems([]);
  }
  
  catch(error){
    alert('Увы, к сожалению сейчас не удалось оформить заказ')
  }
  }
    return ( <>
    <header className="header">
    <div className="header__top">
      <Link to="/" >
    <img className="logo" src="img/logo.png" alt="logo-img"  />
    </Link>
    </div>
    </header>
 
 {items.length > 0 ?   <>  <h1 className="pop">Ваша корзина</h1>
    {items.map(item =>  ( <>
      <div key={item.id} className="cart__item">
      <img src={item.image} alt="cart__images" width={82} height={100}/>
      <div className="cart__price">
            <span> Цена товара: </span>
            <br /><b>{item.price} руб.</b>
          </div>
          <p className="cart__txt">{item.title}</p>
          <button onClick={() => onDelete(item.id)} className="cart__remove">✖</button>
      </div>


</>
          )
          )
}                <div className="cart__sum">
          <p className="cart__item-amount">{`Товаров в корзине: ${items.length}`}</p>
          <h1 className="cart__sum-item">{` Итого: ${cartItems.reduce((sum, obj) => obj.price + sum, 0)} руб.`}
    </h1>
          <button onClick={clickOrdersComleted} className="cart__redirect cart__issue">Оформить заказ</button>
          </div>

        </> : <div className="cart__null">
   <img  className="cart__img-null" src={completed ? "https://static-eu.insales.ru/files/1/8029/1949533/original/Отзывы2.png" : "https://avatars.mds.yandex.net/get-zen_doc/1641493/pub_5d70d5cb2f4ad700ace487c1_5d70db420ef8e700ad7be560/scale_1200"} alt="" width={250}/>
     <h2 className="cart__title-null">{completed ? "Поздравляем, Ваш заказ оформлен!" : "Увы.... корзина пустая"}</h2>
     <p className="cart__text-null">{completed ? `Заказ отправлен курьерской доставкой, ожидайте смс-оповещения` : "Пожалуйста, добавьте хоть что-то, чтобы нам не было так грустно 😭😭😭"}</p>
     <Link to="/" className="cart__redirect">Вернуться за покупками</Link>
 </div>}
 
</>
    )
}
export default Cart;