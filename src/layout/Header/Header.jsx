import React from 'react'
import logo from '../../assets/svg/Logo.svg';
import menuData from '../../data/menuData';
import './Header.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../../components/LoginButton/LoginButton';
import { MobileNav, Nav } from '../../components';
import ShopCart from '../../components/ShopCart/ShopCart';


const Header = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 80) {
                setShow(true);
            } else {
                setShow(false);
            }
        });
        return () => {
            window.removeEventListener('scroll', () => { });
        };
    }, []);


    return (
        <div className={`header-container ${show ? 'sticky' : ''}`}>
            <div className={`header ${show ? 'sticky' : ''}`}>
                <MobileNav />
                <div className='header-left'>
                    <Link to='/'>
                        <img className='header-logo' src={logo} alt='logo of website' />
                    </Link>
                    <Nav links={menuData} />
                </div>
                <div className='header-right'>
                    <ShopCart />
                    <div className='header__login-button'>
                        <LoginButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header