import React, {useState} from 'react';
import logo from '../../img/логотип.svg'
import {BsEye, BsEyeSlash} from "react-icons/bs";
import {useNavigate} from "react-router-dom";

const Enter = ({setEnter, enter, profile ,setProfile}) => {
    const [able, setAble] = useState(false)

    const navigate = useNavigate()

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
                        <button
                            onClick={() => {
                                setEnter(!enter)
                                navigate('/Profile')
                                setProfile(true)
                            }}
                            className='enter--btn__v'>Войти</button>

                            <button onClick={() => {
                                navigate('/')
                                setEnter(false)
                            }} className='enter--btn__w'>Забыли пароль?</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enter;