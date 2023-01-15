import React from 'react';
import {NavLink} from "react-router-dom";

const ModalWindow = () => {
    return (
        <div className='header--burger__window'>
                <div className='links'>
                    <NavLink className='name' to={'/AboutSchool'}>О школе</NavLink>
                    <NavLink className='name' to={'/OurCourses'} >Наши курсы</NavLink>
                    <NavLink className='name'  to={'/AboutUs'}>О нас</NavLink>
                </div>

                <NavLink to={"/EnterToProfile"} className='without'>Войти</NavLink>
                <button className='with'>Подписаться</button>

        </div>
    );
};

export default ModalWindow;