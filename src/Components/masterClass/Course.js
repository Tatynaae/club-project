import React from 'react';
import {BsArrowRight} from "react-icons/bs";
import {NavLink} from "react-router-dom";

const Course = () => {
    return (
        <section id="course">
            <div className="container">
                <div className="course">
                    <div className="course--text">
                        <h1>Курсы</h1>
                    </div>
                    <div className="course__block">
                        <div className="course__block--one">
                            <h1>Frontend-разработчик</h1>
                            <p>
                                Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим
                                функционалом. Профессия отлично подойдет тем, кто хочет фрилансить и постоянно
                                разрабатывать новые проекты
                            </p>
                            <div className="course--block__one--btn">
                                <NavLink to={'/Подробнее'}>
                                    <button style={{
                                        border: 'none',
                                        background: 'none',
                                        marginTop: '20px',
                                        borderBottom: '2px solid black',
                                        color: '#000000'
                                    }}>Подробнее <BsArrowRight style={{background: 'none'}}/></button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="course__block--one">
                            <h1>Backend-разработчик</h1>
                            <p>
                                Специалист, который отвечает за построение логики для
                                воплощения любой идеи. Он собирает фундамент и опорную систему для проекта - от простого сайта для магазина
                                одежды до сложных вычислительных систем нейронных сетей.
                            </p>
                            <div className="course--block__one--btn">
                                <button style={{
                                    border: 'none',
                                    background: 'none',
                                    marginTop: '20px',
                                    borderBottom: '2px solid black',
                                    color: '#000000'
                                }}>Подробнее <BsArrowRight style={{background: 'none'}}/></button>
                            </div>
                        </div>
                        <div className="course__block--one">
                            <h1>UX / UI Дизайнер</h1>
                            <p>
                                Креативный специалист, который придумывает дизайн и интерфейс продукта.
                                Специалист UX/UI отвечает за подбор форм, цветов, Функциональности дизайна
                                и прочих важных параметров для комфорьного использования продукта.
                            </p>
                            <div className="course--block__one--btn">
                                <button style={{
                                    border: 'none',
                                    background: 'none',
                                    marginTop: '20px',
                                    borderBottom: '2px solid black',
                                    color: '#000000'
                                }}>Подробнее <BsArrowRight style={{background: 'none'}}/></button>
                            </div>
                        </div>
                    </div>
                    <div className="course__block">
                        <div className="course__block--one">
                            <h1>DevOps - инженер</h1>
                            <p>
                                Он разбирается в программировании и инфраструктуре
                                и объединяет эти знания для оптимальной работы бизнеса.
                            </p>
                            <div className="course--block__one--btn">
                                <button style={{
                                    border: 'none',
                                    background: 'none',
                                    marginTop: '20px',
                                    borderBottom: '2px solid black',
                                    color: '#000000'
                                }}>Подробнее <BsArrowRight style={{background: 'none'}}/></button>
                            </div>
                        </div>
                        <div className="course__block--one">
                            <h1>Android-разработчик</h1>
                            <p>
                                Создает, обновляет, усовершенствует мобильные приложения для смартфонов,
                                планшетов, электронных книг, игровых приставок
                                и других девайсов, работающих на операционной системе Android.
                            </p>
                            <div className="course--block__one--btn">
                                <button style={{
                                    border: 'none',
                                    background: 'none',
                                    marginTop: '20px',
                                    borderBottom: '2px solid black',
                                    color: '#000000'
                                }}>Подробнее <BsArrowRight style={{background: 'none'}}/></button>
                            </div>
                        </div>
                        <div className="course__block--one">
                            <h1>Java-разработчик</h1>
                            <p>
                                Cпециалист, который создает приложения разной сложности, используя старейший язык программирования.

                            </p>
                            <div className="course--block__one--btn">
                                <button style={{
                                    border: 'none',
                                    background: 'none',
                                    marginTop: '20px',
                                    borderBottom: '2px solid black',
                                    color: '#000000'
                                }}>Подробнее <BsArrowRight style={{background: 'none'}}/></button>
                            </div>
                        </div>
                    </div>
                    <div className="course__block">
                        <div className="course__block--one">
                            <h1>С++ - разработчик</h1>
                            <p>
                                Занимается разработкой высокопроизводительных и высоконагруженных
                                систем, таких как поисковики, драйверы, игры и приложения.
                            </p>
                            <div className="course--block__one--btn">
                                <button style={{
                                    border: 'none',
                                    background: 'none',
                                    marginTop: '20px',
                                    borderBottom: '2px solid black',
                                    color: '#000000'
                                }}>Подробнее <BsArrowRight style={{background: 'none'}}/></button>
                            </div>
                        </div>
                        <div className="course__block--one">
                            <h1>IOS - разработчик</h1>
                            <p>
                                iOS разработчик - идеальная профессия для того, кто любит мобильную продукцию компании Apple. Специальность позволяет совмещать творческие способности.

                            </p>
                            <div className="course--block__one--btn">
                                <button style={{
                                    border: 'none',
                                    background: 'none',
                                    marginTop: '20px',
                                    borderBottom: '2px solid black',
                                    color: '#000000'
                                }}>Подробнее <BsArrowRight style={{background: 'none'}}/></button>
                            </div>
                        </div>
                        <div className="course__block--one">
                            <h1>Python - разработчик</h1>
                            <p>
                                Cпециалист, который применяет в работе многоуровневый язык программирования Python.
                            </p>
                            <div className="course--block__one--btn">
                                <button style={{
                                    border: 'none',
                                    background: 'none',
                                    marginTop: '20px',
                                    borderBottom: '2px solid black',
                                    color: '#000000'
                                }}>Подробнее <BsArrowRight style={{background: 'none'}}/></button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
};

export default Course;