import React from 'react';
import './Reg.scss'
import logo from '../../assets/img/lastLogo.png'
import { useNavigate } from 'react-router-dom';

const Reg = () => {

    const navigate = useNavigate()

    return (
        <div className='reg'>
            <div className='reg__form'>
                <div className='reg__form__top'>
                    <img src={logo} alt="" />
                </div>
                <h3>Registration</h3>
                <div className='reg__form__inp'>
                    <div>
                        <input className='reg__form__inp__mail'  type="text" placeholder='LastName*' />
                        <input className='reg__form__inp__mail'  type="text" placeholder='FirstName*' />
                        <input className='reg__form__inp__mail'  type="text" placeholder='Gmail*' />
                        <input className='reg__form__inp__mail'  type="text" placeholder='PhoneNumber*' />
                        <input className='reg__form__inp__mail'  type="text" placeholder='Login*' />
                        <input className='reg__form__inp__mail'  type="text" placeholder='Password*' />
                    </div>
                    <p className='pr' onClick={() => {navigate('/login')}}>Do you have profile ?</p>
                    <button className='myBtn' onClick={()=>{navigate('/')}}>Sign up</button>
                </div>
                <p className='reg__form__pr'>Privacy Policy Terms of Use Sales and Refunds Legal Site Map</p>
            </div>
        </div>
    );
}

export default Reg;
