import React from 'react'
import EmptyCartImg from 'assets/img/empty-cart.png';
import { Link } from 'react-router-dom';
const CartEmpty = () => {
  return (
    <>
        <div className='cart cart--empty'>
            <h2>Корзина пустая <icon>😕</icon></h2>
            <p>
                Вероятней всего, вы не заказывали ещё пиццу.<br />
                для того, чтобы заказать пиццу, перейди на главную страницу.
            </p>
            <img src={EmptyCartImg} />
            <Link className='button button--black' to='/'>Вернуться назад</Link>
        </div>
    </>
  )
}

export default CartEmpty