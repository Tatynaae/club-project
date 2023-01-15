import React from 'react';
import {FiCheck} from "react-icons/fi";

const SubscribeModal = ({modal}) => {
    return (
        <div className='subscribe' id={modal==='sub' ? 'view' : 'view-d'}>
            <div className="subscribe--data">
                <h1>Подписки</h1>
                <h3>Тариф : <span className='subscribe--data__data'><b>Год</b></span></h3>
                <h3>Статус : <span className='subscribe--data__data'><b>Начальная</b></span></h3>
                <h3>Сумма : <span className='subscribe--data__data'><b>220.00 $</b></span></h3>
                <h3>Карта : <span className='subscribe--data__data' ><b>5106 21 ХХ ХХХХ 4186</b></span></h3>
                <h3>Действует до : <span className='subscribe--data__data'><b>30 . 09.  2022 г</b></span></h3>
            </div>


            <div className="subscribe--others">
                <h1>Другие тарифы</h1>
                <div className="cost">
                    <div className="time">
                        <h4>Месяц +</h4>
                        <h1>105,00 $</h1>
                        <button className='time--first-btn'>Ежемесячно</button>
                        <p><FiCheck style={{background:'none'}}/> Все статьи</p>
                        <button className='time--second-btn'>Оформить подписку</button>
                    </div>
                    <div className="time">
                        <h4>Месяц +</h4>
                        <h1>105,00 $</h1>
                        <button className='time--first-btn'>Ежемесячно</button>
                        <p><FiCheck style={{background:'none'}}/> Все статьи</p>
                        <p><FiCheck style={{background:'none'}}/> Все мастер классы</p>
                        <p><FiCheck style={{background:'none'}}/> 6 новых статей каждый месяц</p>
                        <p><FiCheck style={{background:'none'}}/> Доступ к курсу “DevOps - <br/>инженер”</p>
                        <button  className='time--second-btn-time'>Оформить подписку</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubscribeModal;