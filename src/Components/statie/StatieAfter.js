import React from 'react';
import img from "../../img/img1.png";
// import {IoIosLock} from "react-icons/io";
import eliss from '../../img/Ellipse 46.svg'
import {RxReader} from "react-icons/rx";

const StatieAfter = () => {
    let Elipse;
    let Ellipse;
    return (
        <>
            <div id="do-subscription">
                <div className="container">
                    <div className="do-subscription">
                        <div className="do-subscription--general">
                            <div className="do-subscription--general__part">
                                <p>Главная / Статья / Мы подготовили... </p>
                                <p>11.09.2022</p>
                                <h1>Мы подготовили подборку самых популярных
                                    курсов по направлению Java в IBS Training Center.</h1>
                                <h2>Когда-то ни один крупный проект не обходился без применения
                                    функционального и асинхронного программирования. Эти подходы до сих пор популярны за
                                    счет своих преимуществ: они помогают выдерживать большие
                                    нагрузки и писать эффективный код, не теряя в скорости разработки. </h2>
                                <img src={img} alt=""/>
                            </div>
                            <div className="do-subscription--general__title">
                                <ul>
                                    <li>Какие существуют конфигурации для Spring Framework 5;</li>
                                    <li>Как работать с REST-сервисами и документацией при помощи Swagger.</li>
                                    <li>Что такое бины и как с ними работать;</li>
                                    <li>Что такое Концепция IoC;</li>
                                    <li>Что такое Концепция IoC;</li>
                                </ul>
                                <h5>Ищите способы ускорить проектирование приложений? Используйте Spring Framework 5.
                                    Этот легковесный каркас с открытыми исходными текстами не связан с конкретной
                                    моделью программирования и поэтому универсален. Его можно использовать не только для
                                    крупных корпоративных кейсов, но и для небольших проектов.
                                </h5>
                                <h2>Интересно? Присоединяйтесь к нашему курсу и узнайте об основных модулях этого
                                    фреймворка, вариантах их использования и как Spring Framework работает совместно с
                                    другими технологиями.
                                </h2>
                                <h3>Если вы уже знакомы с Spring Framework 5 и хотите углубить свои знания, то этот курс
                                    для вас! Вместе с IBS Training Center вы изучите темы, необходимые для
                                    профессионального применения Spring Framework на практике. Вы познакомитесь со
                                    Spring REST, HATEOAS и CORS, научитесь использовать сериализацию и ограничение
                                    данных, освоите тонкости применения аннотации @Transactional и оптимистических
                                    транзакций.
                                </h3>
                                <h4>Также вас ждет много практики, разбор реальных кейсов и другие
                                    важные темы:
                                </h4>
                                <ul>
                                    <li>JWT-авторизация;</li>
                                    <li>Практическое применение реактивного программирования с использованием WebFlux;
                                    </li>
                                    <li>Тестирование Spring-сервисов</li>
                                    <li>Планировщик задач и Actuator</li>
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
                                    <img src={eliss} alt=""/>
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
                                    <img src={eliss} alt=""/>
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
                                    <img src={eliss} alt=""/>
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
                                    <img src={eliss} alt=""/>
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
            <div id="other-articles">
                <div className="container">
                    <div className="other-articles"><h1>Другие статьи </h1>
                        <div className="other-articles--blocks">
                            <div className="other-articles--blocks__block">
                                <p>Статьи</p>
                                <h2>Мы подготовили подборку самых популярных курсов
                                    по направлению Java в IBS Training Center. </h2>
                                <div
                                    className="other-articles--blocks__block--bottom">
                                    <div
                                        className="other-articles--blocks__block--bottom__start">
                                        <a href="#"><RxReader
                                            className="other-articles--blocks__block--bottom__start--icon"/></a>
                                        <a href="#"><h1>Читать</h1></a></div>
                                    <div
                                        className="other-articles--blocks__block--bottom__end">
                                        <h3>21.09.2022</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="other-articles--blocks__block">
                                <p>Статьи</p>
                                <h2>Мы подготовили подборку
                                    самых популярных курсов по направлению Java в IBS
                                    Training Center. </h2>
                                <div
                                    className="other-articles--blocks__block--bottom">
                                    <div
                                        className="other-articles--blocks__block--bottom__start">
                                        <a href="#"><RxReader
                                            className="other-articles--blocks__block--bottom__start--icon"/></a>
                                        <a href="#"><h1>Читать</h1></a></div>
                                    <div
                                        className="other-articles--blocks__block--bottom__end">
                                        <h3>21.09.2022</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="other-articles--blocks__block">
                                <p>Статьи</p>                            <h2>Мы подготовили подборку
                                самых популярных курсов по направлению Java в IBS
                                Training Center. </h2>
                                <div
                                    className="other-articles--blocks__block--bottom">
                                    <div
                                        className="other-articles--blocks__block--bottom__start">
                                        <a href="#"><RxReader
                                            className="other-articles--blocks__block--bottom__start--icon"/></a>
                                        <a href="#"><h1>Читать</h1></a></div>
                                    <div
                                        className="other-articles--blocks__block--bottom__end">
                                        <h3>21.09.2022</h3>
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
export default StatieAfter;