import React from 'react'
import { Link } from 'react-router-dom';
import { BiLogInCircle, BiUser } from 'react-icons/bi';

const LoginButton = ({ className = '' }) => {
    return (
        <Link to='/sign-in' className={`header__register-button ${className}`}>
            <span>logn</span>
            <BiLogInCircle size={24} />
        </Link>
    )
}

export default LoginButton