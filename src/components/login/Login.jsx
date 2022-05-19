import React from 'react';
import './Login.scss'
import logo from '../../assets/img/lastLogo.png'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    return (
        <div className='login'>
            <div className='login__form'>
                <div className='login__form__top'>
                    <img src={logo} alt="" />
                    <button classNamex='myBtn' onClick={()=>{navigate('/registration')}}>Create accaunt</button>
                </div>
                <h3>Log In</h3>
                <div className='login__form__inp'>
                    <div>
                        <input className='login__form__inp__mail' placeholder='Username or email' type="text" />
                        <input className='login__form__inp__pass' placeholder='Password' type="password" />
                    </div>
                    <p className='login__form__inp__forgot'>Forgot password?</p>
                    <button className='myBtn' onClick={()=>{navigate('/')}}>Sign in</button>
                </div>
                <p className='login__form__pr'>Privacy Policy Terms of Use Sales and Refunds Legal Site Map</p>
            </div>
        </div>
    );
}

export default Login;
