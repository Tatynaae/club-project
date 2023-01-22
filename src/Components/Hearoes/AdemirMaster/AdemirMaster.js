import React from 'react';
import {NavLink} from "react-router-dom";

const AdemirMaster = () => {
    return (
        <div>
            <div id="master">
                <div className="container">
                    <div className="master">
                        <div className="master--text">
                            <h1>Мастер-классы</h1>
                        </div>
                        <div className="master--block">
                            <div className="master--block__one">
                                <NavLink to={'/Reactive'} className='master--block__one--link'>
                                    <h1>Реактивное программирование на Java: как, зачем и стоит ли? </h1>
                                    <p>
                                        Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало
                                        популярность этого<br/>относительно нового подхода и почему сейчас он в тренде,
                                        рассказал на конференции РИТ++ ...
                                    </p>
                                </NavLink>
                            </div>
                            <div className="master--block__one">
                                <NavLink to={'/'} className='master--block__one--link'>
                                    <h1>Реактивное программирование на Java: как, зачем и стоит ли? </h1>
                                    <p>
                                        Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало
                                        популярность этого<br/>относительно нового подхода и почему сейчас он в тренде,
                                        рассказал на конференции РИТ++ ...
                                    </p>
                                </NavLink>
                            </div>
                            <div className="master--block__one">
                                <NavLink to={'/'} className='master--block__one--link'>
                                    <h1>Реактивное программирование на Java: как, зачем и стоит ли? </h1>
                                    <p>
                                        Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало
                                        популярность этого<br/>относительно нового подхода и почему сейчас он в тренде,
                                        рассказал на конференции РИТ++ ...
                                    </p>
                                </NavLink>
                            </div>
                        </div>
                        <div className="master--btn">
                            <NavLink to={'/Master'}>
                                <button>Все мастер классы</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdemirMaster;