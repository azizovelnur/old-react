import React from 'react';
import HeaderStyle from './Header.module.css'
import logo from '../../images/react.png'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={HeaderStyle.header}>
            <img className={HeaderStyle.headerImg} src={logo} alt="logo"/>

            <div className={HeaderStyle.loginBlock}>
                {
                    props.isAuth ? props.login : <NavLink className={HeaderStyle.login} to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;