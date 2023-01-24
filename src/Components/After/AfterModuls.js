import React, {useEffect, useState} from 'react';
import elip from '../../img/image 19.png'
import dasy from '../../img/Rectangle 2197.png'
import {BsChevronDown} from "react-icons/bs";
import Elipse from "../../img/Ellipse 46.svg";
import {ImYoutube} from "react-icons/im";

const AfterModuls = () => {
    const [modal, setModal] = useState('noll')
    useEffect(() => {
        setModal('noll')
    }, [])

    return (
        <>
            <div id="develop">
                <div className="container">
                    <div className="develop">
                        <div className="develop--text">
                            <p style={{color:'#FFF'}}><span style={{color:'#A5A5A5'}}>Главная / Мастер классы /</span>Frontend разработчик</p>
                        </div>
                        <div className="develop--one">
                            <div className="develop--one--text">
                                <h1>Frontend-разработчик</h1>
                                <p>
                                    Когда нужно переходить от прокачивания личной <br/>
                                    эффективности к изучению эффективности командой?
                                </p>
                            </div>
                            <div className="develop--one--input">
                                <h2>Прогресс по курсу</h2>
                                <input type="range"/>
                                <div className="develop--one--input__text">
                                    <div className="develop--one--input__text--one">
                                        <p>Пройдено <br/> модулей</p>
                                        <h3>0/3</h3>
                                    </div>
                                    <div className="develop--one--input__text--one">
                                        <p>Пройдено <br/> модулей</p>
                                        <h3>0/3</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="programme">
                        <div className="programme--one">
                            <h1>ПРОГРАММА КУРСА </h1>
                            <img src={elip} alt=""/>
                            <ImYoutube className='youtube'/>
                        </div>

                        <div className="programme--task">
                            <div
                                className="programme--task__two">
                                <div className="programme--task__two--slider">
                                    <input type="checkbox" id="accordion1"/>
                                    <label htmlFor="accordion1" className="programme--task__two--slider__one">
                                        <div className="programme--task__two--slider__one--img">
                                            <div className="programme--task__two--slider__one--img__btn">
                                                <button>Модуль 1</button>
                                            </div>
                                            <div className="programme--task__two--slider__one--img__text">
                                                <h1>Reactivity</h1>
                                                <p>Пройдено материалов: 4/15</p>
                                            </div>
                                        </div>
                                        <BsChevronDown onClick={() => setModal('first')}
                                                       className="programme--task__two--slider__one--icons"/>
                                    </label>

                                    <div className="programme--task__two--slider__video"
                                         style={{maxHeight: modal !== 'first' ? '' : '90%'}}>
                                        <div>
                                            <div className="img">
                                                <div className="img--one">
                                                    <img src={dasy} alt=""/>
                                                </div>
                                                <div className="img--text">
                                                    <h1>3 Observable example</h1>
                                                    <p>Урок </p>
                                                </div>
                                            </div>
                                            <div className="img">
                                                <div className="img--one">
                                                    <img src={dasy} alt=""/>
                                                </div>
                                                <div className="img--text">
                                                    <h1>3 Observable example</h1>
                                                    <p>Урок </p>
                                                </div>
                                            </div>
                                            <div className="img">
                                                <div className="img--one">
                                                    <img src={dasy} alt=""/>
                                                </div>
                                                <div className="img--text">
                                                    <h1>3 Observable example</h1>
                                                    <p>Урок </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="programme--task__two">
                                <div className="programme--task__two--slider">
                                    <input type="checkbox" id="accordion1"/>
                                    <label htmlFor="accordion1" className="programme--task__two--slider__one">
                                        <div className="programme--task__two--slider__one--img">
                                            <div className="programme--task__two--slider__one--img__btn">
                                                <button>Модуль 1</button>
                                            </div>
                                            <div className="programme--task__two--slider__one--img__text">
                                                <h1>Reactivity</h1>
                                                <p>Пройдено материалов: 4/15</p>
                                            </div>
                                        </div>
                                        <BsChevronDown onClick={() => setModal('second')}
                                                       className="programme--task__two--slider__one--icons"/>
                                    </label>
                                    <div className="programme--task__two--slider__video"
                                         style={{maxHeight: modal !== 'second' ? '' : '90%'}}>
                                        <div>
                                            <div className="img">
                                                <div className="img--one">
                                                    <img src={dasy} alt=""/>
                                                </div>
                                                <div className="img--text">
                                                    <h1>3 Observable example</h1>
                                                    <p>Урок </p>
                                                </div>
                                            </div>
                                            <div className="img">
                                                <div className="img--one">
                                                    <img src={dasy} alt=""/>
                                                </div>
                                                <div className="img--text">
                                                    <h1>3 Observable example</h1>
                                                    <p>Урок </p>
                                                </div>
                                            </div>
                                            <div className="img">
                                                <div className="img--one">
                                                    <img src={dasy} alt=""/>
                                                </div>
                                                <div className="img--text">
                                                    <h1>3 Observable example</h1>
                                                    <p>Урок </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="programme--task__two">
                                <div className="programme--task__two--slider">
                                    <input type="checkbox" id="accordion1"/>
                                    <label htmlFor="accordion1" className="programme--task__two--slider__one">
                                        <div className="programme--task__two--slider__one--img">
                                            <div className="programme--task__two--slider__one--img__btn">
                                                <button>Модуль 1</button>
                                            </div>
                                            <div className="programme--task__two--slider__one--img__text">
                                                <h1>Reactivity</h1>
                                                <p>Пройдено материалов: 4/15</p>
                                            </div>
                                        </div>
                                        <BsChevronDown onClick={() => setModal('third')}
                                                       className="programme--task__two--slider__one--icons"/>
                                    </label>
                                    <div className="programme--task__two--slider__video"
                                         style={{maxHeight: modal !== 'third' ? '' : '90%'}}>
                                        <div>
                                            <div className="img">
                                                <div className="img--one">
                                                    <img src={dasy} alt=""/>
                                                </div>
                                                <div className="img--text">
                                                    <h1>3 Observable example</h1>
                                                    <p>Урок </p>
                                                </div>
                                            </div>
                                            <div className="img">
                                                <div className="img--one">
                                                    <img src={dasy} alt=""/>
                                                </div>
                                                <div className="img--text">
                                                    <h1>3 Observable example</h1>
                                                    <p>Урок </p>
                                                </div>
                                            </div>
                                            <div className="img">
                                                <div className="img--one">
                                                    <img src={dasy} alt=""/>
                                                </div>
                                                <div className="img--text">
                                                    <h1>3 Observable example</h1>
                                                    <p>Урок </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="comments">
                <div className="container">
                    <div className="comments--h">
                        <h1>Комментарии</h1>
                    </div>
                    <div className="comments">
                        <div className="comments--block">
                            <textarea placeholder="Ваш комментарий"></textarea>
                            <div className="comments--block--btn">
                                <button>Отправить</button>
                            </div>
                        </div>
                        <div className="comments--left">
                            <div className="comments--left--one">
                                <div className="comments--left--one--img">
                                    <img src={Elipse} alt=""/>
                                </div>
                                <div className="comments--left--one--text">
                                    <div className="comments--left--one--text__one">
                                        <h2>Осмонова Нурай</h2>
                                        <p>/ Около минуты назад</p>
                                    </div>
                                    <span>Очень понравились уроки. Все более чем понятно! </span>
                                </div>
                            </div>
                            <details>
                                <summary>
                                    Ответить
                                </summary>
                                <div className="summary">
                                    <div className="summary--img">
                                        <h1>K</h1>
                                    </div>
                                    <div className="summary--text">
                                        <div className="summary--text--one">
                                            <h1>Эгембердиева Кунсулуу</h1>
                                            <p style={{color: '#9099A3', padding: '0 10px'}}> 24.10.2021</p>
                                        </div>
                                        <p>Курс является выжимкой - самым соком в вопросах построения команды <br/>
                                            пересмотрел свое отношение ко многим критериям, факторам и своим <br/>
                                            действиям и взглядам по вопросам командообразования.
                                        </p>
                                        <p style={{color: '#9099A3'}}>Ответить</p>
                                    </div>
                                </div>
                            </details>
                        </div>
                        <div className="comments--left">
                            <div className="comments--left--one">
                                <div className="comments--left--one--img">
                                    <img src={Elipse} alt=""/>
                                </div>
                                <div className="comments--left--one--text">
                                    <div className="comments--left--one--text__one">
                                        <h2>Осмонова Нурай</h2>
                                        <p>/ Около минуты назад</p>
                                    </div>
                                    <span>Очень понравились уроки. Все более чем понятно! </span>
                                </div>
                            </div>
                            <details>
                                <summary>
                                    Ответить
                                </summary>
                                <div className="summary">
                                    <div className="summary--img">
                                        <h1>K</h1>
                                    </div>
                                    <div className="summary--text">
                                        <div className="summary--text--one">
                                            <h1>Эгембердиева Кунсулуу</h1>
                                            <p style={{color: '#9099A3', padding: '0 10px'}}> 24.10.2021</p>
                                        </div>
                                        <p>Курс является выжимкой - самым соком в вопросах построения команды <br/>
                                            пересмотрел свое отношение ко многим критериям, факторам и своим <br/>
                                            действиям и взглядам по вопросам командообразования.
                                        </p>
                                        <p style={{color: '#9099A3'}}>Ответить</p>
                                    </div>
                                </div>
                            </details>
                        </div>
                        <div className="comments--left">
                            <div className="comments--left--one">
                                <div className="comments--left--one--img">
                                    <img src={Elipse} alt=""/>
                                </div>
                                <div className="comments--left--one--text">
                                    <div className="comments--left--one--text__one">
                                        <h2>Осмонова Нурай</h2>
                                        <p>/ Около минуты назад</p>
                                    </div>
                                    <span>Очень понравились уроки. Все более чем понятно! </span>
                                </div>
                            </div>
                            <details>
                                <summary>
                                    Ответить
                                </summary>
                                <div className="summary">
                                    <div className="summary--img">
                                        <h1>K</h1>
                                    </div>
                                    <div className="summary--text">
                                        <div className="summary--text--one">
                                            <h1>Эгембердиева Кунсулуу</h1>
                                            <p style={{color: '#9099A3', padding: '0 10px'}}> 24.10.2021</p>
                                        </div>
                                        <p>Курс является выжимкой - самым соком в вопросах построения команды <br/>
                                            пересмотрел свое отношение ко многим критериям, факторам и своим <br/>
                                            действиям и взглядам по вопросам командообразования.
                                        </p>
                                        <p style={{color: '#9099A3'}}>Ответить</p>
                                    </div>
                                </div>
                            </details>
                        </div>
                        <div className="comments--left">
                            <div className="comments--left--one">
                                <div className="comments--left--one--img">
                                    <img src={Elipse} alt=""/>
                                </div>
                                <div className="comments--left--one--text">
                                    <div className="comments--left--one--text__one">
                                        <h2>Осмонова Нурай</h2>
                                        <p>/ Около минуты назад</p>
                                    </div>
                                    <span>Очень понравились уроки. Все более чем понятно! </span>
                                </div>
                            </div>
                            <details>
                                <summary>
                                    Ответить
                                </summary>
                                <div className="summary">
                                    <div className="summary--img">
                                        <h1>K</h1>
                                    </div>
                                    <div className="summary--text">
                                        <div className="summary--text--one">
                                            <h1>Эгембердиева Кунсулуу</h1>
                                            <p style={{color: '#9099A3', padding: '0 10px'}}> / 24.10.2021</p>
                                        </div>
                                        <p>
                                            Курс является выжимкой - самым соком в вопросах построения команды <br/>
                                            пересмотрел свое отношение ко многим критериям, факторам и своим <br/>
                                            действиям и взглядам по вопросам командообразования.
                                        </p>
                                        <p style={{color: '#9099A3'}}>Ответить</p>
                                    </div>
                                </div>
                            </details>
                        </div>

                    </div>
                </div>
            </div>
            <div id="homeLs-accordionS">
                <div className="container">
                    <div className="homeLs-accordionS">
                        <div className="homeLs-accordionS_desc">
                            <div className="homeLs-info">
                                <p>FAQ</p>
                                <h1>Остались вопросы?</h1>
                            </div>
                            <div className="homeLs-accordionS_desc-accordion">
                                <input type="checkbox" id="accordion2"/>
                                <label htmlFor="accordion2" className="homeLs-accordionS_desc-accordion_label">
                                    <p>Как мне начать обучение ?</p>
                                    <BsChevronDown className="homeLs-accordionS_desc-accordion_label-icon"/>
                                </label>
                                <div className="homeLs-accordionS_desc-accordion_content">
                                    <div>
                                        <p>
                                            Очень просто – зарегистрироваться. Это займет всего несколько минут.
                                            Создайте свой аккаунт с помощью адреса электронной почты и номера телефона.
                                            Мастер-класс станет доступен сразу после оплаты или в день запуска.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="homeLs-accordionS_desc-accordion">
                                <input type="checkbox" id="accordion3"/>
                                <label htmlFor="accordion3" className="homeLs-accordionS_desc-accordion_label">
                                    <p>Могу ли я вернуть деньги</p>
                                    <BsChevronDown className="homeLs-accordionS_desc-accordion_label-icon"/>
                                </label>
                                <div className="homeLs-accordionS_desc-accordion_content">
                                    <div>
                                        <p>
                                            Очень просто – зарегистрироваться. Это займет всего несколько минут.
                                            Создайте свой аккаунт с помощью адреса электронной почты и номера телефона.
                                            Мастер-класс станет доступен сразу после оплаты или в день запуска.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="homeLs-accordionS_desc-accordion">
                                <input type="checkbox" id="accordion3"/>
                                <label htmlFor="accordion3" className="homeLs-accordionS_desc-accordion_label">
                                    <p>Могу ли я вернуть деньги</p>
                                    <BsChevronDown className="homeLs-accordionS_desc-accordion_label-icon"/>
                                </label>
                                <div className="homeLs-accordionS_desc-accordion_content">
                                    <div>
                                        <p>
                                            Очень просто – зарегистрироваться. Это займет всего несколько минут.
                                            Создайте свой аккаунт с помощью адреса электронной почты и номера телефона.
                                            Мастер-класс станет доступен сразу после оплаты или в день запуска.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AfterModuls;