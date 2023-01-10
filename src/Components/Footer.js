import React from 'react';
import logo from '../img/логотип.svg'
import {NavLink} from "react-router-dom";
import {AiOutlineInstagram, AiOutlinePhone, AiOutlineTwitter, AiOutlineYoutube} from "react-icons/ai";
import {CiFacebook} from "react-icons/ci";
import {TbBrandTelegram, TbBrandTiktok} from "react-icons/tb";
import {GoMail} from "react-icons/go";
import {GrLocation} from "react-icons/gr";


const Footer = () => {
    return (
        <div id="footer">
            <div className="container">

                <div className='footer'>
                    <div className="footer--first">
                        <img src={logo} alt="#"/>
                        <div className="footer--first__btn">
                            <button>KG</button>
                            <button>RU</button>
                        </div>
                    </div>

                    <div className="footer--second">
                        <h3>Быстрые ссылки</h3>
                        <div className="col">
                            <NavLink style={{textDecoration:'none', color:"white", margin:'10px 0'}}>О школе</NavLink>
                            <NavLink style={{textDecoration:'none', color:"white", margin:'10px 0'}}>Наши курсы</NavLink>
                            <NavLink style={{textDecoration:'none', color:"white", margin:'10px 0'}}>О нас</NavLink>
                        </div>
                    </div>

                    <div className="footer--third">
                        <h3>Социальные сети</h3>
                        <div style={{margin:'10px 0'}}>
                            <AiOutlineInstagram style={{color:"white", margin:'0 10px', fontSize:'25px'}}/>
                            <AiOutlineYoutube style={{color:"white", margin:'0 10px', fontSize:'25px'}}/>
                            <CiFacebook style={{color:"white", margin:'0 10px', fontSize:'25px'}}/>
                        </div>
                        <div style={{margin:'10px 0'}}>
                            <AiOutlineTwitter style={{color:"white", margin:'0 10px', fontSize:'25px'}}/>
                            <TbBrandTiktok style={{color:"white", margin:'0 10px', fontSize:'25px'}}/>
                            <TbBrandTelegram style={{color:"white", margin:'0 10px', fontSize:'25px'}}/>
                        </div>
                    </div>
                    <div className="footer--fours">
                        <h3>Контакты</h3>
                        <div style={{margin:"10px 0"}} className='contact'>
                            <GoMail style={{color:'white'}}/>
                            <p style={{color:'white'}}>@motionwebteam@gmail.com</p>
                        </div>
                        <div style={{margin:"10px 0"}} className='contact'>
                            <AiOutlinePhone style={{color:'white'}}/>
                            <p style={{color:'white'}}>+996 559 - 69 - 26 - 26</p>
                        </div>
                    </div>
                    <div className="footer--fives">
                        <h3 >Адреса</h3>
                        <div style={{margin:"10px 0"}} className='loc'>
                            <GrLocation style={{color:'white'}}/>
                            <p style={{color:'white'}}>Турусбекова 109 / 3</p>
                        </div>
                        <p style={{color:'white', margin:"10px 0" }}>Идентификационный код: <br/>1234567890</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;