import React from 'react';
import {BsArrowRight} from "react-icons/bs";
import {NavLink} from "react-router-dom";

const AdemirSection = () => {
    return (
        <section id="section">
            <div className="container">
                <div className="section">
                    <div className="section--text">
                        <h1>Курсы</h1>
                    </div>
                    <div className="section--block">
                        <div className="section--block__one">
                            <h1>Frontend-разработчик</h1>
                            <p>
                                Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим
                                функционалом. Профессия отлично подойдет тем, кто хочет фрилансить и постоянно
                                разрабатывать новые проекты
                            </p>
                            <div className="section--block__one__btn">
                                <NavLink to={'/подробнее'}>
                                    <button>Подробнее <BsArrowRight style={{background: 'none'}}/></button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="section--block__one">
                            <h1>Backend-разработчик</h1>
                            <p>
                                Специалист, который отвечает за построение логики для воплощения любой идеи. Он
                                собирает фундамент и опорную систему для проекта - от простого
                                сайта для магазина одежды до сложных вычислительных систем нейронных сетей.
                            </p>
                            <div className="section--block__one__btn">
                                <button>Подробнее <BsArrowRight style={{background: 'none'}}/></button>
                            </div>
                        </div>
                        <div className="section--block__one">
                            <h1>UX / UI Дизайнер</h1>
                            <p>
                                Креативный специалист, который придумывает дизайн и интерфейс продукта.
                                Специалист UX/UI отвечает за подбор форм, цветов, Функциональности дизайна и прочих
                                важных параметров для комфорьного использования продукта.
                            </p>
                            <div className="section--block__one__btn">
                                <button>Подробнее <BsArrowRight style={{background: 'none'}}/></button>
                            </div>
                        </div>
                    </div>

                    <div className="section--btn">
                        <NavLink to={'/OurCourse'}>
                            <button>Все курсы</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdemirSection;