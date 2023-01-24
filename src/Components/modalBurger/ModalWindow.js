import React from 'react';
import {useNavigate} from "react-router-dom";

const ModalWindow = ({enter, enterFn}) => {
    const navigate = useNavigate()
    return (
        <div className='header--burger__window'>

                <div className='links'>
                    <p onClick={() => {
                        window.scroll(0,0)
                        navigate('/AboutSchool')
                    }} className='name'>О школе</p>

                    <p onClick={() => {
                        window.scroll(0,0)
                        navigate('/OurCourse')
                    }} className='name' >Наши курсы</p>

                    <p onClick={() => {
                        window.scroll(0,0)
                        navigate('/AboutUs')
                    }} className='name' >О нас</p>



                </div>

            <div style={{
                textAlign:'center',
                marginTop:'30px',
                marginLeft:'-60px'
            }}>
                <button
                    onClick={() => {
                        window.scroll(0,0)
                        enterFn(enter)
                    }}
                    className='with'
                >Войти</button>
                <button className='with'

                        onClick={() => navigate('/Participation')}
                >Подписаться</button>
            </div>

        </div>
    );
};

export default ModalWindow;