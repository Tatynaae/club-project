import React from 'react';
import rectangle from '../../img/Rectangle 2030.svg'
import images from '../../img/image 19.png'
import school from '../../img/Rectangle 2086.svg'
import {MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import {AiOutlineYoutube} from "react-icons/ai";
import Elipse from '../../img/Ellipse 46.svg'
import {BsChevronDown} from "react-icons/bs";

const Purchases = () => {
    return (
        <>
            <div id='purchases'>
                <div className="container">
                    <div className="purchases">
                        <div className="purchases--text">
                            <p style={{color: '#FFF'}}><span
                                style={{color: '#A5A5A5'}}>Главная / Мастер классы /</span> Реактивное программирование
                                на
                                Java</p>
                        </div>
                        <div className="make">
                            <div className="purchases--one">
                                <div className="purchases--one--text">
                                    <h1>Reactivity</h1>
                                    <p>Когда нужно переходить от прокачивания личной <br/>
                                        эффективности к изучению эффективности командой?
                                    </p>
                                </div>
                                <div className="make--one__img">
                                    <img src={images} alt=""/>
                                    <AiOutlineYoutube className='icons'/>
                                </div>
                            </div>
                            <div className="make--one">
                                <div className="purchases--one--img">
                                    <div className="purchases--one--img__one">
                                        <img src={rectangle} alt="img"/>
                                    </div>
                                    <div className="purchases--one--img__two">
                                        <h2>Евгений Александрович</h2>
                                        <p>Frontend developer</p>
                                    </div>
                                </div>
                                <div className="make--one--page">
                                    <div className="make--one--page--video">
                                        <div className="make--one--page--video--img">
                                            <img src={school} alt=""/>
                                        </div>
                                        <div className="make--one--page--video--text">
                                            <h1>1 Reactivity</h1>
                                            <p>Урок</p>
                                        </div>
                                    </div>
                                    <div className="make--one--page--video">
                                        <div className="make--one--page--video--img">
                                            <img src={school} alt=""/>
                                        </div>
                                        <div className="make--one--page--video--text">
                                            <h1>1 Reactivity</h1>
                                            <p>Урок</p>
                                        </div>
                                    </div>
                                    <div className="make--one--page--video">
                                        <div className="make--one--page--video--img">
                                            <img src={school} alt=""/>
                                        </div>
                                        <div className="make--one--page--video--text">
                                            <h1 style={{fontSize: '14px'}}>4 Implementing and subscribing to <br/> an
                                                observer
                                            </h1>
                                            <p>Урок</p>
                                        </div>
                                    </div>
                                    <div className="make--one--page--video">
                                        <div className="make--one--page--video--img">
                                            <img src={school} alt=""/>
                                        </div>
                                        <div className="make--one--page--video--text">
                                            <h1>1 Reactivity</h1>
                                            <p>Урок</p>
                                        </div>
                                    </div>
                                    <div className="make--one--page--btn">
                                        <button style={{color: '#A5A5A5'}}><MdOutlineKeyboardArrowLeft
                                            style={{fontSize: '18px'}}/>Предыдущий урок
                                        </button>
                                        <button>Следующий урок <MdOutlineKeyboardArrowRight style={{fontSize: '18px'}}/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="streams">
                        <div className="streams--text">
                            <h2>
                                Как работает многопоточность в Java? Старая добрая <br/>многопоточность в Java — это
                                базовые примитивы <br/> многопоточности:
                            </h2>
                        </div>
                        <div className="streams--one">
                            <div className="streams--one--text">
                                <ul>
                                    <li>
                                        Threads (потоки);
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Synchronization (синхронизация);
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Wait/notify (ожидание/уведомление).
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="streams--two">
                            <div className="streams--two--text">
                                <h2>
                                    Сложно писать, сложно отлаживать, сложно <br/>тестировать.
                                </h2>
                            </div>
                            <div className="streams--two--ul">
                                <ul>
                                    <li>
                                        Java 5
                                        Future interface:
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        V get()
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        boolean cancel()
                                        V get()
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        boolean isCancelled()
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        boolean isDone()
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Executors
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        Callable interface
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        BlockingQueue
                                    </li>
                                </ul>
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
                                            <p style={{color: '#9099A3', padding: '0 11px'}}> 24.10.2021</p>
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
                                        <p>Курс является выжимкой - самым соком в вопросах построения команды <br/>
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
                                <input type="checkbox" id="accordion1"/>
                                <label htmlFor="accordion1" className="homeLs-accordionS_desc-accordion_label">
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
                                <input type="checkbox" id="accordion2"/>
                                <label htmlFor="accordion2" className="homeLs-accordionS_desc-accordion_label">
                                    <p>Могу ли я отказаться от автопродления подписки</p>
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

export default Purchases;