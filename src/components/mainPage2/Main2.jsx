import React from 'react';
import './Main2.scss'
import logo from '../../assets/img/logooo.png'
import mob from '../../assets/icon/devMob.svg'
import search from '../../assets/icon/search.svg'
import Slider from '../CardSlider/Slider';
// import Slider2 from '../CardSlider/Slider2'

import airPods from '../../assets/icon/airPods.svg'
import air2 from '../../assets/icon/air2.svg'
import mac from '../../assets/img/macAir.png'
import smart from '../../assets/img/smartWatch.png'

import "swiper/css/bundle";
import "./styles.css";

const Main2 = () => {
    return (
        <div className='container main2 '>
            <div className='main2__nav'>
                <div className='main2__nav__logo'>
                    <h1>TechnoSale.uz</h1>
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li>Phone</li>
                    <li>Laptop</li>
                    <li>TV</li>
                    <li>Tablet</li>
                    <li>Watch</li>
                    <li>AirPods</li>
                    <li>Accessories</li>
                    <li>About us</li>
                    <li className='profile'></li>
                </ul>
            </div>
            <div className="main2__dev">
                <ul>
                    <li>
                        <img src={mob} alt="" />
                        <p>Mobile</p>
                        <span>new*</span>
                    </li>
                    <li>
                        <img src={mob} alt="" />
                        <p>Mobile</p>
                    </li>
                    <li>
                        <img src={mob} alt="" />
                        <p>Mobile</p>
                    </li>
                    <li>
                        <img src={mob} alt="" />
                        <p>Mobile</p>
                    </li>
                    <li>
                        <img src={mob} alt="" />
                        <p>Mobile</p>
                        <span>new*</span>
                    </li>
                </ul>
                <div className='main2__dev__'>
                    <img src={search} alt="" />
                    <input type="text" placeholder='Search your purchase'/>
                </div>
            </div>
            <Slider/>
            {/* <Slider2/> */}

            <div className='main2__adv'>
                <h3>We have all it!</h3>
                <div>
                    <button className='myBtn'>Top Shops products</button>
                    <button className='myBtn'>Go to  shop</button>
                </div>
            </div>

            <div className='main2__imgs'>
                <div className='main2__imgs__1'>
                    <img src={airPods} alt="" />
                    <img src={air2} alt="" />
                    <button className='myWhiteBtn'>AirPods 3rd Generation</button>
                </div>
                <div className='main2__imgs__2'>
                    <img src={mac} alt="" />
                    <button className='myWhiteBtn'>AirPods 3rd Generation</button>
                </div>
                <div className='main2__imgs__2'>
                    <img src={smart} alt="" />
                    <button className='myWhiteBtn'>AirPods 3rd Generation</button>
                </div>
            </div>

        </div>
    );
}

export default Main2;
