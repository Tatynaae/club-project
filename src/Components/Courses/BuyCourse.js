import React, {useEffect, useState} from 'react';
import {GiCheckMark} from "react-icons/gi";
import {useNavigate} from "react-router-dom";

const BuyCourse = () => {
    const [radio, setRadio] = useState(true)
    const navigate = useNavigate()

    const [radios, setRadios] = useState(true)
    const [btn, setBtn] = useState(false)
    const [buy, setBuy] = useState(false)

    useEffect(() => {
        setRadio(true)
        setRadios(true)
        setBtn(false)
    }, [])


    return (
        <section id='buy'>
            <div className="container">
                <div className="buy">
                    <div className="buy--main">
                        <p style={{color: '#A5A5A5'}}>Главная/</p>
                        <p style={{color: 'white'}}>Зарегистрироваться на курс</p>
                    </div>

                    <h1>Зарегистрироваться на курс</h1>

                    <div className="buy--payment">
                        <div className="buy--payment__type">
                            <div className='type-section'>
                                <p className='course'>Курс</p>
                                <h1>Frontend-разработчик</h1>
                                <p>Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. </p>
                            </div>

                            <div className="line"></div>

                            <div className='type-section'>
                                <p>Лектор</p>
                                <h1>Евгений Александрович</h1>
                                <p>Frontend разработчик</p>
                            </div>

                            <div className="line"></div>

                            <div className='type-section dis'>
                                <div className="type-section1">
                                    <p>В курс входит :</p>
                                    <h5>3 модулей 60материалов</h5>
                                </div>
                                <div className="type-section2">
                                    <p>Доступ :</p>
                                    <h5>Навсегда</h5>
                                </div>
                            </div>

                            <div className="line"></div>

                            <div className='type-section'>
                                <p>* - материалы включают уроки, тесты и задания. Некоторые материалы могут быть
                                    недоступны при самостоятельном обучении. </p>
                            </div>
                        </div>

                        <div className="buy--payment__pay">
                            <input className='buy--payment__pay--in' type="text" placeholder='Ф.И.О*'/>
                            <input className='buy--payment__pay--in' type="tel" placeholder='Телефон*'/>
                            <input className='buy--payment__pay--in' type="email" placeholder='E mail*'/>

                            <div className="card">
                                <p>Выберите платежную карту</p>
                                <div className="card-two">
                                    <div className='card-two--chose'>
                                        <button onClick={()=> {
                                            setRadio(!radio)
                                        }} style={{background: radio ? 'transparent' : "#fff"}} type='checkbox' className='masterCard'></button>
                                        <p style={{color: '#fff'}}>Visa</p>
                                    </div>
                                    <div className='card-two--chose'>
                                        {/*<input type="radio"/>*/}
                                        <button onClick={()=> {
                                            setRadios(!radios)
                                        }} style={{background: radios ? "transparent" : '#fff'}} type='checkbox' className='masterCard'></button>
                                        <p style={{color: '#fff'}}>MasterCard</p>
                                    </div>
                                </div>
                            </div>

                            <input className='buy--payment__pay--in' type="number" placeholder='Номер карты *'/>

                            <div className="card">
                                <div className="card-two">
                                        <input className='card-two--chose' style={{background:'transparent', padding:'0 10px'}} type="number" placeholder='ММ/ГГ *'/>
                                        <input className='card-two--chose' style={{background:'transparent', padding:'0 10px'}} type="number" placeholder='CVC *'/>
                                </div>

                            </div>
                            <button onClick={() => {
                                setBuy(true)
                                window.scroll(0,0)
                            }}
                                className='pay-btn'>Оплатить 225.00$</button>
                            <div className="modalBuy"
                                 style={{
                                     transform: buy ? 'scale(1)' : 'scale(0)',
                                     position:'fixed',
                                     top:'40%',
                                     left:'30%',
                                     textAlign:'center'
                                 }}
                            >
                                <h2 onClick={() => setBuy(false)}>&times;</h2>
                                <h3>Благодарим за покупку!!!</h3>
                                <p>Теперь вам доступен  курс “Frontend разработчик”  </p>
                                <button onClick={() => {
                                setBuy(false)
                                    window.scroll(0,0)
                                    navigate('/afterModuls')
                                }}>Ок, посмотреть покупку  </button>
                            </div>

                            <div className='service'>
                                <button onClick={() => setBtn(!btn)} style={{ background: btn ? '#fff' : 'transparent'}}
                                    className='service--btn' type='checkbox'>{btn  ? <GiCheckMark className='st' style={{color:'black'}}/> : ''}</button>
                                <p className='service--text'>Я ознакомился и согласен с Условиями оказания услуг</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default BuyCourse;