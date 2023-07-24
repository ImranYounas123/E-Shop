import { useState, useEffect, memo } from 'react';
import { MdOutlineShoppingBag } from 'react-icons/md';
// import { useCartContext } from '../../context/Cart/CartContext';
// import useLocalStorage from '../../hook/useLocalStorage';
// import { IProducts } from '../../types/productsType';
import { Button } from '../';
// import ShopCartItem from '../ShopCartItem/ShopCartItem';
import emptyCartImage from '../../assets/image/cart.png';
import './ShopCart.css';
import { useLocation, useNavigate } from 'react-router-dom';

const ShopCart = () => {
  //   const { cart, totalPrice, dispath } = useCartContext();
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const [addAnimation, setAddAnimation] = useState(false);
  const navigate = useNavigate();
  //   const { getStorage } = useLocalStorage();

  useEffect(() => {
    // const fethProducts = () => {
    //   const cartData = getStorage('SHOP_CART');
    //   dispath({ type: 'SET_CART', payload: cartData });
    // };
    // fethProducts();
  }, []);
  const cart = 2;
  useEffect(() => {
    setAddAnimation(true);
    setTimeout(() => {
      setAddAnimation(false);
    }, 1000);
    //   }, [cart]);
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
            {/* {cart.reduce((prev, pro) => (prev += pro.quantity), 0)} */}
            232
          </span>
          <MdOutlineShoppingBag className='cart-icon' />
        </div>
        {/* <span className='cart-price'>{totalPrice} $</span> */}
        <span className='cart-price'>434 $</span>

      </div>
      <div className={`cart-wrapper ${isOpen ? 'open' : ''}`}>
        <div className='cart-wrapper__header'>
          <h2 className='cart-title'>Shoping Cart</h2>
        </div>
        <div className='cart-wrapper__body'>
          {cart.length <= 0 ? (
            <div className='empty-cart'>
              <img src={emptyCartImage} alt='empty cart' className='empty-cart__image' />
              <p className='empty-cart__text'>Oops! your cart is empty </p>
            </div>
          ) : (
            ""
            // cart.map((item, i) => <ShopCartItem key={i} item={item} />)
          )}
        </div>
        <div className='cart-wrapper__footer'>
          {/* <h2 className='cart-wrapper__footer__total-price'>Total price : {totalPrice} $</h2>
           */}
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
