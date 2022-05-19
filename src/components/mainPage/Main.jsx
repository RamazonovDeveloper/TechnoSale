import React from 'react';
import './Main.scss'
import mode from '../../assets/icon/tema.svg'
import lan from '../../assets/icon/lan.svg'
import logo from '../../assets/img/logooo.png'
import { useNavigate } from 'react-router-dom';

const Main = () => {

    const navigate = useNavigate()

    return (
        <div className='main container'>
            <div className='main__top'>
                <p>Instructions for use</p>
                <div>
                    <img src={mode} alt="" />
                    <img src={lan} alt="" />
                    <button className='myBtn' onClick={()=>{navigate('/login')}}>Login</button>
                    <button className='myBtn' onClick={()=>{navigate('/registration')}}>Register</button>
                </div>
            </div>
            <div className='main__text'>
                <div className="main__text__left">
                    <h3>Techno<span>S</span>ale</h3>
                    <p>A site used to <span>advertise</span> a hardware store.</p>
                    <p>Advertising is free for <span>1 month</span> (after the site is launched).</p>
                    <p>It then retains <span>3%</span> of the product sold.</p>
                    <p>The main purpose is to advertise the store's products.</p>
                    <p>This site will also have a <span>bot</span> + <span>database</span>.</p>
                    <button onClick={() => {navigate('/main')}}>Get started</button>
                </div>
                <img className="main__text__right" src={logo} alt="" />
            </div>

            <div className="main__bottom">
                <div className='main__bottom__con'>
                    <p>+998 991-000-000</p>
                    <p>+998 991-000-000</p>
                </div>
                <div className='main__bottom__pr'>
                    <p>Copyright © 2022 M_R </p>
                    <p>All rights reserved</p>
                    <p>Privacy Policy Terms of Use Sales and Refunds Legal Site Map</p>
                </div>
            </div>
        </div>
    );
}

export default Main;
