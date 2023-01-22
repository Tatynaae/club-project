import React from 'react';
import Learning from "./Learning";
import Community from "./Community";

const Reactive = () => {
    return (
        <>
            <section id='reactive'>
                <div className="container">
                    <div className="reactive">
                        <div className="reactive--title">
                            <p style={{color: '#FFF', fontSize: '16px'}}><span style={{color: '#A5A5A5'}}>Главная / Мастер классы / </span>Реактивное
                                программирование на Java</p>
                        </div>
                        <div className="reactive--text">
                            <div className="reactive--text__one">
                                <h1>Реактивное программирование <br/>на Java : как, зачем и стоит ли? <br/> Часть 1
                                </h1>
                                <p>
                                    Идея реактивного программирования появилась <br/> сравнительно недавно, лет 10
                                    назад.
                                    Что вызвало <br/> популярность этого относительно нового подхода и
                                    почему <br/> сейчас
                                    он в тренде, рассказал на конференции
                                </p>
                                <button>Купить мастер-класс за 46 $</button>
                            </div>
                            <div className="reactive--text__two">
                                <div className="reactive--text__two--left">
                                    <p>Доступ: </p>
                                    <h3>6 недель</h3>
                                </div>
                                <div className="reactive--text__two--right">
                                    <p>Доступ: </p>
                                    <h3>6 недель</h3>
                                </div>
                            </div>
                        </div>
                        <div className="reactive--one">
                            <div className="push">
                                <p>Что, как и почему</p>
                            </div>
                            <div className="reactive--one__course">
                                <div className="reactive--one__course--ask">
                                    <div className="reactive--one__course--ask__h1">
                                        <h1>О МАСТЕР-КЛАССЕ</h1>
                                        <p>
                                            В режиме мастер-класса он продемонстрировал, почему так
                                            важен <br/> неблокирующий
                                            ввод-вывод, в чем минусы классической <br/> многопоточности, в каких
                                            ситуациях
                                            нужна
                                            реактивность, и что она <br/> может дать. А еще описал недостатки
                                            реактивного
                                            подхода.
                                        </p>
                                    </div>
                                    <div className="reactive--one__course--ask__one">
                                        <h1>Переходите к видеоурокам, что бы научится: </h1>
                                        <ul>
                                            <li>Чтению файла (blocked on reading file);</li>
                                            <li>Что бы научиться базе данных (blocked on reading from DB);</li>
                                            <li>Научится использовать в сложных вычислениях (blocked on heavy
                                                calculations);
                                            </li>
                                            <li>На ответе от клиента (blocked on responding the client).</li>
                                        </ul>
                                    </div>
                                    <div className="reactive--one__course--ask__btn">
                                        <button>Купить мастер-класс</button>
                                        <div className="reactive--one__course--ask__btn--one">
                                            <button>Смотреть программу</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="reactive--one__course--make">
                                    <div className="reactive--one__course--make__left">
                                        <p>Доступ: </p>
                                        <h3>6 недель</h3>
                                    </div>
                                    <div className="reactive--one__course--make__task">
                                        <p>Доступ: </p>
                                        <h3>6 недель</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Learning/>
            <Community/>
        </>

    );
};

export default Reactive;