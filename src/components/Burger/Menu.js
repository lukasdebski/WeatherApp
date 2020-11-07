import React, {useState} from 'react';
import './Menu.scss';
import {Link} from "react-router-dom";


const Menu = () => {

    const [burger, setBurger] = useState(false);

    const showBurger = (e) => {
        e.preventDefault();
        setBurger(!burger);
    }

    return (
        <>
            <div className='menu__burger'><i className="fas fa-bars" onClick={showBurger}></i></div>
            <nav className={burger ? 'menu__container' : 'menu__container show'}>
                <ul className='menu__items' onClick={showBurger}>
                    <a href="#"><i className="fas fa-times" ></i></a>
                    <span className='menu__item'>
                        <Link className='item--link item--login' to='/login'>Log in<i className="fas fa-user"></i></Link>
                    </span>
                    <span className='menu__item'>
                        <Link className='item--link' to='/weather'>Weather</Link>
                    </span>
                    <span className='menu__item'>
                        <Link className='item--link' to='/map'>Map</Link>
                    </span>
                    <span className='menu__item'>
                        <Link className='item--link' to='/contact'>Contact</Link>
                    </span>
                    <span className='menu__item'>
                        <Link className='item--link' to='/aboutme'>About Me</Link>
                    </span>
                </ul>
            </nav>
        </>
    )
}

export default Menu;