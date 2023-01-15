import React, {useEffect, useState} from 'react';
import logo from "../img/логотип.svg";
import {NavLink} from "react-router-dom";
import ModalBurger from "./modalBurger/ModalBurger";
import ModalWindow from "./modalBurger/ModalWindow";
import Enter from "./Enter/Enter";

const Header = () => {
    const [burger, setBurger] = useState(false)

    const [enter, setEnter] = useState(true)


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
                            <NavLink className='name' to={'/OurCourses'} >Наши курсы</NavLink>
                            <NavLink className='name'  to={'/AboutUs'}>О нас</NavLink>
                        </div>
                    </div>

                    <div className='header--left'>
                        <button className='header--left__without' onClick={() => enterFn(enter)}>Войти</button>
                        <button className='header--left__with'>Подписаться</button>
                    </div>

                    <div className="header--burger">
                        <button style={{color:'black', fontSize:'30px', position:'absolute', zIndex:'9999999', border:'none'}} onClick={() => open(burger)}>{burger === true ? <ModalBurger/> : 'X'}</button>

                    </div>
                </div>
                {burger ? "" : <ModalWindow/>}
                {enter ? <Enter setEnter={setEnter} enter={enter}/> : ""}
            </div>
        </div>
    );
};

export default Header;