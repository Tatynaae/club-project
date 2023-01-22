import React, {useState} from 'react';
import {GiCheckMark} from "react-icons/gi";

const Register = () => {
    const [radios, setRadios] = useState(true)
    const [radio, setRadio] = useState(true)
    const [btn, setBtn] = useState(false)


    return (
        <section id='register'>
            <div className="container">
                <div className="register">
                    <p>Главная / <span style={{color:'white'}}>Оформить подписку</span></p>

                    <div className="register--block">
                        <h1>Год</h1>
                        <input className='register--block__in' placeholder='Ф.И.О*' type="text"/>
                        <input className='register--block__in' placeholder='Телефон*' defaultValue='+996' type="tel"/>
                        <input className='register--block__in' placeholder='E mail*' type="email"/>
                        <input className='register--block__in' placeholder='Пароль ' type="password"/>
                        <div className="register--block__card">
                            <p style={{color:'white'}}>Выберите платежную карту</p>
                            <div className="card-two">
                                <div className='card-two--chose'>
                                    <button onClick={()=> {
                                        setRadio(!radio)
                                    }} style={{background: radio ? 'transparent' : "#fff", borderRadius:'50%', border:'1px solid #FFFFFF'}} className='masterCard'></button>
                                    <p style={{color: '#fff'}}>Visa</p>
                                </div>
                                <div className='card-two--chose'>
                                    <button onClick={()=> {
                                        setRadios(!radios)
                                    }} style={{background: radios ? "transparent" : '#fff', borderRadius:'50%', border:'1px solid #FFFFFF'}} className='masterCard'></button>
                                    <p style={{color: '#fff'}}>MasterCard</p>
                                </div>
                            </div>
                        </div>
                        <input className='register--block__in' placeholder='Номер карты *' type="number"/>
                        <div className='num'>
                            <input className='num--in' placeholder='ММ/ГГ *' type="number"/>
                            <input className='num--in' placeholder='CVC *' type="number"/>
                        </div>
                        <div className='agree'>
                            <button onClick={() => setBtn(!btn)} style={{ background: btn ? '#fff' : 'transparent'}}
                                    className='service--btn' type='checkbox'>{btn  ? <GiCheckMark className='st' style={{color:'black'}}/> : ''}</button>                            <p>Я ознакомился и согласен с Условиями оказания услуг</p>
                        </div>
                        <button  className='agree--btn'>Оплатить 225.00$</button>

                        <p className='texts'>Все мастер-классы нашей школы</p>
                        <p className='texts'>6 новых статей каждый месяц.</p>
                        <p className='texts'>Образовательная платформа доступна на условиях ежегодной подписки.</p>
                        <h3>Другие варианты подписки:</h3>
                        <button className='target'>Год + - 585,00 $/год</button>
                        <button className='target'>Месяц  - 105,00 $/год</button>
                        <p className='texts'>Отменить можно в любой момент!</p>
                        <p className='texts'>При оплате через Fondy, с Вашей карты автоматически будут списываться 225,00 $/год, которые являются стандартной ценой участия.</p>
                        <p className='texts'>Вы всегда можете отменить подписку в Вашем личном кабинете и больше списаний не будет.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;