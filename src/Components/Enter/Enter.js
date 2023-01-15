import React, {useState} from 'react';
import logo from '../../img/логотип.svg'
import {NavLink} from "react-router-dom";
import {BsEye, BsEyeSlash} from "react-icons/bs";

const Enter = ({setEnter, enter}) => {
    const [able, setAble] = useState(false)

    const change = () => {
        setAble(!able)
    }

    return (
        <div id='enter'>
            <div className="container">
                <div className="enter">
                    <div>
                        <img className='enter--img' src={logo} alt=""/>
                    </div>
                    <input type="email" placeholder='E-Mail..'/>
                    <div>
                        <input style={{position:'relative'}} type={ able ? "text" : "password"} placeholder='Your Password.. ' />
                        <button onClick={change}
                            className='view'>{able ? <BsEyeSlash/> : <BsEye/>}</button>
                    </div>

                    <div className='enter--btn'>
                        <NavLink to={'/Profile'}>
                        <button
                            onClick={() => setEnter(!enter)}
                            className='enter--btn__v'>Войти</button>
                        </NavLink>
                            <button className='enter--btn__w'>Забыли пароль?</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enter;