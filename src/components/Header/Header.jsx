import React from 'react';
import HeaderStyle from './Header.module.css'
import logo from '../../images/react.png'

const Header = () => {
    return (
        <header className={HeaderStyle.header}>
            <img className={HeaderStyle.headerImg} src={logo} alt="logo"/>
        </header>
    );
};

export default Header;