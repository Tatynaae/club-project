import React, {useEffect, useState} from 'react';
import logo from "../img/логотип.svg";
import {NavLink} from "react-router-dom";
import ModalBurger from "./modalBurger/ModalBurger";
import ModalWindow from "./modalBurger/ModalWindow";
import Enter from "./Enter/Enter";
import {useNavigate} from "react-router-dom";
import {HiOutlineBell} from "react-icons/hi";
import Btn from "./modalBurger/Btn";

const Header = () => {
    const [burger, setBurger] = useState(false)
    const navigate = useNavigate()

    const [enter, setEnter] = useState(true)
    const [profile, setProfile] = useState(false)


    const open = (e) => {
        setBurger(!e)
    }

    const enterFn = (e) => {
        setEnter(!e)
        console.log(enter)
    }

    useEffect(() => {
        open(burger)
        enterFn(enter)
    }, [])

    return (
        <div id='header'>
            <div className="container">
                <div className='header'>
                    <div className='header--right'>
                        <NavLink className='logo' to={'/'}><img src={logo} alt=""/></NavLink>
                        <div className='links'>
                            <NavLink className='name' to={'/AboutSchool'}>О школе</NavLink>
                            <NavLink className='name' to={'/OurCourse'}>Наши курсы</NavLink>
                            <NavLink className='name' to={'/AboutUs'}>О нас</NavLink>
                        </div>
                    </div>

                    <div className='header--left'>
                        <button className='header--left__without' onClick={() => {
                            enterFn(enter)
                        }}>{profile ? <HiOutlineBell
                            style={{
                                fontSize:'30px',
                                color: 'white',

                            }}/> : 'Войти' }</button>
                        <button
                            onClick={() => {
                                profile ? navigate('/Profile'): navigate('/Participation')
                            }}
                                className='header--left__with'
                            style={{
                                background: profile ? '#0A1128' : "#034078",
                                border: profile ? "1px solid #034078" : 'none',
                                width: profile? '130px' : ''
                        }}
                        >{ profile ? 'Profile' : 'Подписаться'}
                        </button>


                    </div>

                    <div className="header--burger">
                        <button style={{
                            color: 'black',
                            fontSize: '30px',
                            position: 'absolute',
                            zIndex: '9999999',
                            border: 'none'
                        }} onClick={() => {
                            open(burger)
                        }}>{burger === true ? <ModalBurger/> : <Btn/>}</button>

                    </div>
                </div>
                {burger ? "" : <ModalWindow enter={enter} enterFn={enterFn}/>}
                {enter ? <Enter profile={profile} setProfile={setProfile} setEnter={setEnter} enter={enter}/> : ""}
            </div>
        </div>
    );
};

export default Header;