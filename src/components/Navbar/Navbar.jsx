import React from 'react';
import NavbarStyle from './Navbar.module.css'
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <nav className={NavbarStyle.nav}>
            <div className={NavbarStyle.item}>
                <NavLink to={'/profile'} className={navData => navData.isActive ? NavbarStyle.itemActive : NavbarStyle.item}>Profile</NavLink>
            </div>
            <div className={NavbarStyle.item}>
                <NavLink to={'/dialogs'} className={navData => navData.isActive ? NavbarStyle.itemActive : NavbarStyle.item}>Messages</NavLink>
            </div>
            <div className={NavbarStyle.item}>
                <a>News</a>
            </div>
            <div className={NavbarStyle.item}>
                <a>Music</a>
            </div>
            <div className={NavbarStyle.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;