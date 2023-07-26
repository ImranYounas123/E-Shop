import { useState, useEffect, memo } from 'react';
import { MdOutlineShoppingBag } from 'react-icons/md';

import Button from '../Button/Button';
import emptyCartImage from '../../assets/image/cart.png';
import './ShopCart.css';
import { useLocation, useNavigate } from 'react-router-dom';

const ShopCart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const [addAnimation, setAddAnimation] = useState(false);
  const [total , setTotal] = useState(0)
  const navigate = useNavigate();

  const cart = 0;
  useEffect(() => {
    setAddAnimation(true);
    setTimeout(() => {
      setAddAnimation(false);
    }, 1000);
  }, [cart]);
let totalPrice = 0
  useEffect(() => {
    const storedData = localStorage.getItem('products');
    const existingProducts = JSON.parse(storedData)

   for (let i = 0; i < existingProducts.length; i++) {
      totalPrice = totalPrice + existingProducts[i]
   }
  }, []);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <div>
      <div onClick={() => setIsOpen(false)} className={`cart-overlay ${isOpen ? 'show' : ''}`}></div>
      <div onClick={() => setIsOpen(!isOpen)} className='cart'>
        <div className='cart-icons'>
          <span className={`cart-quantity ${addAnimation ? 'active' : ''}`}>
            232
          </span>
          <MdOutlineShoppingBag className='cart-icon' />
        </div>
        <span className='cart-price'>{totalPrice} $</span>
      </div>
      <div className={`cart-wrapper ${isOpen ? 'open' : ''}`}>
        <div className='cart-wrapper__header'>
          <h2 className='cart-title'>Shoping Cart</h2>
        </div>
        <div className='cart-wrapper__body'>
          {cart <= 0 ? (
            <div className='empty-cart'>
              <img src={emptyCartImage} alt='empty cart' className='empty-cart__image' />
              <p className='empty-cart__text'>Oops! your cart is empty </p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className='cart-wrapper__footer'>
          <h2 className='cart-wrapper__footer__total-price'>Total price : 434 $</h2>
          <Button onClick={() => navigate('/cart')} className='cart-wrapper__footer__button'>
            check out
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(ShopCart);
