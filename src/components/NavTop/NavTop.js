import React from 'react';
import './NavTop.scss';

const NavTop = props => {

    const {date} = props.weather;

    // const date = new Date().toLocaleDateString();

    return (
        <section className='navtop'>
            <div className='navtop__el'>{date}</div>
            <div className='navtop__el'>

            </div>
        </section>
    )
}

export default NavTop;