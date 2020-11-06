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
                {/*<a href="#"><i className="fas fa-times" ></i></a>*/}
                <a href='' className='menu__item item--login'>
                    <Link to='/login'>Log in</Link>
                    <i className="fas fa-user"></i></a>
                <a href='' className='menu__item'>
                    <Link to='/weather'>Weather</Link>
                </a>
                <a href='' className='menu__item'>
                    <Link to='/map'>Map</Link>
                </a>
                <a href='' className='menu__item'>
                    <Link to='/contact'>Contact</Link>
                </a>
                <a href='' className='menu__item'>
                    <Link to='/aboutme'>About Me</Link>
                </a>
            </ul>
        </nav>
        </>
    )
}

export default Menu;