import React, {useState} from 'react';
import {RiPagesLine} from "react-icons/ri";
import course from '../../img/course.svg'
import men from '../../img/men1-main.svg'
import settings from '../../img/main-setting.svg'
import img2 from '../../img/{}.svg'
import tools from '../../img/tools-main.svg'
import lamp from '../../img/lamp-main.svg'
import {BsChevronDown} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'

const MainPage = () => {

    const [acc, setAcc] = useState(false)

    const accM = () => {
        setAcc(!acc)
    }

    return (
        <>
            <div id='main'>
                <div className="container">
                    <div className="main">
                        <div className="hero">
                            <div className="hero--images">
                                <div className="hero--images__ellipse1">
                                    <div className="hero--images__ellipse1--ellipse2">
                                        <div className="hero--images__ellipse1--ellipse2__ellipse3">
                                        </div>
                                    </div>
                                </div>
                                <img src={men} alt="" className="hero--images__man"/>
                                <img src={settings} className='hero--images__setting' alt=""/>
                                <img src={img2} className='hero--images__img2' alt=""/>
                                <img src={tools} className='hero--images__tools' alt=""/>
                                <img src={lamp} className='hero--images__lamp' alt=""/>
                            </div>
                            <div className="hero--text">
                                <h1>IT образовательная платформа </h1>
                                <p>Наша образовательная платформа вам даст необходимые практические знания для адаптации
                                    в
                                    IT-сфере.</p>
                            </div>
                        </div>
                        <div className="article">
                            <div className="article--title">
                                <h1>Последние статьи</h1>
                            </div>
                            <div className="article--blocks">
                                <div className="article--blocks__block">
                                    <img src={course} alt=""/>
                                    <div className="article--blocks__block--text">
                                        <span>Статьи</span>
                                        <h1>Мы подготовили подборку самых популярных курсов по направлению Java в IBS
                                            Training Center. </h1>
                                        <div className="article--blocks__block--text__bottom">
                                            <div className="article--blocks__block--text__bottom--left">
                                                <RiPagesLine style={{background: 'white'}}/>
                                                <a href="#"><span>Читать</span></a>
                                            </div>
                                            <span>01.02.2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="article--blocks__block">
                                    <img src={course} alt=""/>
                                    <div className="article--blocks__block--text">
                                        <span>Статьи</span>
                                        <h1>Мы подготовили подборку самых популярных курсов по направлению Java в IBS
                                            Training Center. </h1>
                                        <div className="article--blocks__block--text__bottom">
                                            <div className="article--blocks__block--text__bottom--left">
                                                <RiPagesLine style={{background: 'white'}}/>
                                                <a href="#"><span>Читать</span></a>
                                            </div>
                                            <span>01.02.2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="article--blocks__block">
                                    <img src={course} alt=""/>
                                    <div className="article--blocks__block--text">
                                        <span>Статьи</span>
                                        <h1>Мы подготовили подборку самых популярных курсов по направлению Java в IBS
                                            Training Center. </h1>
                                        <div className="article--blocks__block--text__bottom">
                                            <div className="article--blocks__block--text__bottom--left">
                                                <RiPagesLine style={{background: 'white'}}/>
                                                <a href="#"><span>Читать</span></a>
                                            </div>
                                            <span>01.02.2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="article--blocks__block">
                                    <img src={course} alt=""/>
                                    <div className="article--blocks__block--text">
                                        <span>Статьи</span>
                                        <h1>Мы подготовили подборку самых популярных курсов по направлению Java в IBS
                                            Training Center. </h1>
                                        <div className="article--blocks__block--text__bottom">
                                            <div className="article--blocks__block--text__bottom--left">
                                                <RiPagesLine style={{background: 'white'}}/>
                                                <a href="#"><span>Читать</span></a>
                                            </div>
                                            <span>01.02.2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="article--blocks__block">
                                    <img src={course} alt=""/>
                                    <div className="article--blocks__block--text">
                                        <span>Статьи</span>
                                        <h1>Мы подготовили подборку самых популярных курсов по направлению Java в IBS
                                            Training Center. </h1>
                                        <div className="article--blocks__block--text__bottom">
                                            <div className="article--blocks__block--text__bottom--left">
                                                <RiPagesLine style={{background: 'white'}}/>
                                                <a href="#"><span>Читать</span></a>
                                            </div>
                                            <span>01.02.2022</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="article--blocks__block">
                                    <img src={course} alt=""/>
                                    <div className="article--blocks__block--text">
                                        <span>Статьи</span>
                                        <h1>Мы подготовили подборку самых популярных курсов по направлению Java в IBS
                                            Training Center. </h1>
                                        <div className="article--blocks__block--text__bottom">
                                            <div className="article--blocks__block--text__bottom--left">
                                                <RiPagesLine style={{background: 'white'}}/>
                                                <a href="#"><span>Читать</span></a>
                                            </div>
                                            <span>01.02.2022</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="article--button">
                                <a href="#">
                                    <button className='article--button__btn'>
                                        Показать больше
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="packet">
                            <div className="packet--left">
                                <h1>
                                    Подпишитесь сейчас за 19,00 $ / мес
                                </h1>
                                <p>
                                    И получите доступ к материалам и кейсам, а также к новым мастер-классам
                                </p>
                            </div>
                            <div className="packet--right">
                                <a href="#">
                                    <button className='packet--right__btn'>
                                        Оформить подписку
                                    </button>
                                </a>
                                <a href="#">
                                    Подробнее о пакетах
                                </a>
                            </div>
                        </div>
                        <div className="question">
                            <div className="question--left">
                                <h1>Остались вопросы?</h1>
                                <h2>
                                    ?
                                </h2>
                            </div>
                            <div className="question--right">
                                <div className="home-accordion">
                                    <div className="home-accordion_desc"
                                         style={{display: 'flex', flexDirection: 'column'}}>
                                        <div className="home-accordion_desc-accordion">
                                            <input type="checkbox" id="accordion1"/>
                                            <label htmlFor="accordion1" className="home-accordion_desc-accordion_label">
                                                <p>Что такое зарезервированные слова в программировании?</p>
                                                <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                            </label>
                                            <div className="home-accordion_desc-accordion_content">
                                                <div>
                                                    <p>
                                                        Margulan.info – это уникальная экосистема и персональная
                                                        социальная сеть,
                                                        которая соединяет уникальный опыт Маргулана с новейшими
                                                        образовательными практиками и возможностями открытой
                                                        коммуникации как с
                                                        Маргуланом так и с другими участниками. Вы получаете полезный
                                                        и практический контент, который вдохновляет, дает новые
                                                        инструменты и навыки для
                                                        выхода на новый уровень в вашей карьере, бизнесе и
                                                        личной эффективности.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home-accordion_desc-accordion">
                                            <input type="checkbox" id="accordion2"/>
                                            <label htmlFor="accordion2" className="home-accordion_desc-accordion_label">
                                                <p>Могу ли я отказаться от автопродления подписки</p>
                                                <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                            </label>
                                            <div className="home-accordion_desc-accordion_content">
                                                <div><p>
                                                    Margulan.info – это уникальная экосистема и персональная социальная
                                                    сеть,
                                                    которая соединяет уникальный опыт Маргулана с новейшими
                                                    образовательными практиками и возможностями открытой коммуникации
                                                    как с
                                                    Маргуланом так и с другими участниками. Вы получаете полезный
                                                    и практический контент, который вдохновляет, дает новые инструменты
                                                    и навыки для
                                                    выхода на новый уровень в вашей карьере, бизнесе и
                                                    личной эффективности. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home-accordion_desc-accordion">
                                            <input type="checkbox" id="accordion3"/>
                                            <label htmlFor="accordion3" className="home-accordion_desc-accordion_label">
                                                <p>Могу ли я вернуть деньги</p>
                                                <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                            </label>
                                            <div className="home-accordion_desc-accordion_content">
                                                <div><p>
                                                    Margulan.info – это уникальная экосистема и персональная социальная
                                                    сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                                    образовательными практиками и возможностями открытой коммуникации
                                                    как с Маргуланом так и с другими участниками. Вы получаете полезный
                                                    и практический контент, который вдохновляет, дает новые инструменты
                                                    и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                                    личной эффективности. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home-accordion_desc-accordion">
                                            <input type="checkbox" id="accordion4"/>
                                            <label htmlFor="accordion4" className="home-accordion_desc-accordion_label">
                                                <p>Какие направление в IT самые актуальные</p>
                                                <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                            </label>
                                            <div className="home-accordion_desc-accordion_content">
                                                <div><p>
                                                    Margulan.info – это уникальная экосистема и персональная социальная
                                                    сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                                    образовательными практиками и возможностями открытой коммуникации
                                                    как с Маргуланом так и с другими участниками. Вы получаете полезный
                                                    и практический контент, который вдохновляет, дает новые инструменты
                                                    и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                                    личной эффективности. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home-accordion_desc-accordion">
                                            <input type="checkbox" id="accordion5"/>
                                            <label htmlFor="accordion5" className="home-accordion_desc-accordion_label">
                                                <p>Нужно ли учить другой язык программирования, перед изучением языка
                                                    С++?</p>
                                                <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                            </label>
                                            <div className="home-accordion_desc-accordion_content">
                                                <div><p>
                                                    Margulan.info – это уникальная экосистема и персональная социальная
                                                    сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                                    образовательными практиками и возможностями открытой коммуникации
                                                    как с
                                                    Маргуланом так и с другими участниками. Вы получаете полезный
                                                    и практический контент, который вдохновляет, дает новые инструменты
                                                    и
                                                    навыки для выхода на новый уровень в вашей карьере, бизнесе и личной
                                                    эффективности. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home-accordion_desc-accordion">
                                            <input type="checkbox" id="accordion6"/>
                                            <label htmlFor="accordion6" className="home-accordion_desc-accordion_label">
                                                <p> Платформа обнавляется?</p>
                                                <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                            </label>
                                            <div className="home-accordion_desc-accordion_content">
                                                <div><p>
                                                    Margulan.info – это уникальная экосистема и персональная социальная
                                                    сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                                    образовательными практиками и возможностями открытой коммуникации
                                                    как с
                                                    Маргуланом так и с другими участниками. Вы получаете полезный
                                                    и практический контент, который вдохновляет, дает новые инструменты
                                                    и
                                                    навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                                    личной эффективности. </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="home-accordion_desc-accordion">
                                            <input type="checkbox" id="accordion7"/>
                                            <label htmlFor="accordion7" className="home-accordion_desc-accordion_label">
                                                <p>Как я могу получить доступ ка всем курсом</p>
                                                <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                            </label>
                                            <div className="home-accordion_desc-accordion_content">
                                                <div><p>
                                                    Margulan.info – это уникальная экосистема и персональная социальная
                                                    сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                                    образовательными практиками и возможностями открытой коммуникации
                                                    как с
                                                    Маргуланом так и с другими участниками. Вы получаете полезный
                                                    и практический контент, который вдохновляет, дает новые инструменты
                                                    и
                                                    навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                                    личной эффективности. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="request">
                            <div className="request--left">
                                <h1>
                                    Оставить заявку
                                </h1>
                                <p>
                                    Заполните краткую форму с ключевым
                                    <br/> вопросами, и мы подготовимся к
                                    разговору с вами
                                </p>
                            </div>
                            <div className="request--right">
                                <label htmlFor="username">Ф.И.О*</label>
                                <input type="text" id='username' name='username' autoComplete='off'/>
                                <label htmlFor="name">Номер телефон*</label>
                                <input type="number" name='name' id='name' autoComplete='off'/>
                                <label htmlFor="mail">Email*</label>
                                <input type="text" name='mail' id='mail' autoComplete='off'/>
                                <a href="#">
                                    <button> Отправить
                                    </button>
                                </a></div>
                        </div>
                    </div>
                </div>
                <div/>
            </div>
        </>
    )
        ;
};
export default MainPage;