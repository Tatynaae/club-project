import React from 'react';
import {IoIosLock} from "react-icons/io"
import {FaUser} from "react-icons/fa"
import {RxReader} from "react-icons/rx"
import img from '../../img/img1.png'

const StatieBefore = () => {
    return (
        <div>
            <div id="do-subscription">
                <div className="container">
                    <div className="do-subscription">
                        <div className="do-subscription--general">
                            <div className="do-subscription--general__part"><p>Главная / Статья / Мы подготовили... </p>
                                <p>11.09.2022</p>                    <h1>Мы подготовили подборку самых популярных
                                    курсов по направлению Java в IBS Training Center.</h1>
                                <h2>Когда-то ни один крупный проект не обходился без применения
                                    функционального и асинхронного программирования. Эти подходы до сих пор популярны за
                                    счет своих преимуществ: они помогают выдерживать большие
                                    нагрузки и писать эффективный код, не теряя в скорости разработки. </h2>
                                <img src={img} alt=""/>
                            </div>
                            <div className="do-subscription--general__title">
                                <h1>В рамках курса от IBS Training Center вы поймете, как работают основные фичи Spring
                                    Framework 5, и узнаете:</h1>
                                <ul>
                                    <li>Какие существуют конфигурации для Spring Framework 5;</li>
                                    <li>Как работать с REST-сервисами и документацией при помощи Swagger.</li>
                                    <li>Что такое бины и как с ними работать;</li>
                                    <li>Что такое Концепция IoC;</li>
                                    <li>Примеры использования AOP;</li>
                                </ul>
                            </div>
                            <div className="do-subscription--general__get"><IoIosLock
                                className="do-subscription--general__get--icon"/>
                                <div className="do-subscription--general__get--title"><h1>Оформите подписку, чтобы
                                    посмотреть полную версию</h1>
                                    <div className="do-subscription--general__get--title__bottom">
                                        <p>Вы уже авторизованы?</p>                            <h2>Авторизуйтесь</h2>
                                    </div>
                                </div>
                                <button>Получить доступ за 225,00$</button>
                            </div>
                            <h6>Комментарии</h6>
                            <div className="do-subscription--general__get">
                                <FaUser className="do-subscription--general__get--icon"/>
                                <div className="do-subscription--general__get--title">
                                    <h1>Вы не зарегистрировались!</h1>
                                    <div className="do-subscription--general__get--title__bottom">
                                        <h4>Чтобы оставить комментарий, пожалуйста авторизуйтесь или
                                            зарегитрируйтесь.</h4>
                                    </div>
                                </div>
                                <button>Зарегистрироваться</button>
                            </div>
                            <div className="do-subscription--general__other-articles"><h1>Другие статьи </h1>
                                <div className="do-subscription--general__other-articles--blocks">
                                    <div className="do-subscription--general__other-articles--blocks__block">
                                        <p>Статьи</p>
                                        <h2>Мы подготовили подборку самых популярных курсов
                                            по направлению Java в IBS Training Center. </h2>
                                        <div
                                            className="do-subscription--general__other-articles--blocks__block--bottom">
                                            <div
                                                className="do-subscription--general__other-articles--blocks__block--bottom__start">
                                                <a href="#"><RxReader
                                                    className="do-subscription--general__other-articles--blocks__block--bottom__start--icon"/></a>
                                                <a href="#"><h1>Читать</h1></a></div>
                                            <div
                                                className="do-subscription--general__other-articles--blocks__block--bottom__end">
                                                <h3>21.09.2022</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="do-subscription--general__other-articles--blocks__block">
                                        <p>Статьи</p>                            <h2>Мы подготовили подборку
                                        самых популярных курсов по направлению Java в IBS
                                        Training Center. </h2>
                                        <div
                                            className="do-subscription--general__other-articles--blocks__block--bottom">
                                            <div
                                                className="do-subscription--general__other-articles--blocks__block--bottom__start">
                                                <a href="#"><RxReader
                                                    className="do-subscription--general__other-articles--blocks__block--bottom__start--icon"/></a>
                                                <a href="#"><h1>Читать</h1></a></div>
                                            <div
                                                className="do-subscription--general__other-articles--blocks__block--bottom__end">
                                                <h3>21.09.2022</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="do-subscription--general__other-articles--blocks__block">
                                        <p>Статьи</p>                            <h2>Мы подготовили подборку
                                        самых популярных курсов по направлению Java в IBS
                                        Training Center. </h2>
                                        <div
                                            className="do-subscription--general__other-articles--blocks__block--bottom">
                                            <div
                                                className="do-subscription--general__other-articles--blocks__block--bottom__start">
                                                <a href="#"><RxReader
                                                    className="do-subscription--general__other-articles--blocks__block--bottom__start--icon"/></a>
                                                <a href="#"><h1>Читать</h1></a></div>
                                            <div
                                                className="do-subscription--general__other-articles--blocks__block--bottom__end">
                                                <h3>21.09.2022</h3>
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
    );
};

export default StatieBefore;