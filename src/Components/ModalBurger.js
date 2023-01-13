import React from 'react';
import {NavLink} from "react-router-dom";

const ModalBurger = () => {
    return (
        <div id='modal' >
            <div className='links'>
                <NavLink className='name' to={'/AboutSchool'}>О школе</NavLink>
                <NavLink className='name' to={'/OurCourses'} >Наши курсы</NavLink>
                <NavLink className='name'  to={'/AboutUs'}>О нас</NavLink>
                <div className='header--left'>
                    <NavLink to={"/Profile"} className='header--left__without'>Войти</NavLink>
                    <button className='header--left__with'>Подписаться</button>
                </div>
            </div>
        </div>
    );
};

export default ModalBurger;