import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import cartIcon from '/icon-cart-white.svg'
import './CartWidget.css'

export default function CartWidget() {
  const { cart }= useContext(CartContext);

  const totalItemsInCart = cart.reduce((total, prod) => total + prod.quantity, 0);

  return (
    <div className='cart-widget'>
      <Link to="/cart" className="cart-widget__icon">
        <img className="cart-widget__icon-img" src={cartIcon} alt="cart icon" />
      </Link>
      {totalItemsInCart !== 0 && <p className="cart-widget__item-count">{totalItemsInCart}</p>}
    </div>
  );
}