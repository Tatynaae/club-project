import React from 'react';
import {NavLink} from "react-router-dom";

const ModalWindow = ({enter, enterFn}) => {
    return (
        <div className='header--burger__window'>
                <div className='links'>
                    <NavLink className='name' to={'/AboutSchool'}>О школе</NavLink>
                    <NavLink className='name' to={'/OurCourse'} >Наши курсы</NavLink>
                    <NavLink className='name'  to={'/AboutUs'}>О нас</NavLink>

                        <button
                            onClick={() => enterFn(enter)}
                            style={{
                                border:'none',
                                background:'transparent',
                                color:'#0A1128',
                                fontSize:'26px'
                            }}
                        >Войти</button>

                </div>


                <button className='with'>Подписаться</button>

        </div>
    );
};

export default ModalWindow;