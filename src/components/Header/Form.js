import React from 'react';
import './Form.scss';

const Form = props => {
    return (
        <form className='form' onSubmit={props.submit}>
            <input className='header__input'
                   type="text"
                   value={props.value}
                   placeholder='Wpisz miasto...'
                   onChange={props.change}
            />
            <button className='header__btn'>Wyszukaj miasta</button>
        </form>
    )
}

export default Form;