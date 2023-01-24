import React from 'react';
import {BsCheck2, BsChevronDown} from "react-icons/bs";

const Community = () => {
    return (
        <>
            <section id='community'>
                <div className="container">
                    <div className="community">
                        <div className="community--text">
                            <h1>Процесс обучения</h1>
                            <p>
                                Каждый из наших мастер-классов состоит из 2-8 уроков. Рекомендуем <br/> проходить
                                мастер-класс последовательно, урок за уроком
                            </p>
                        </div>
                        <div className="community--block">
                            <div className="community--block__one">
                                <div className="community--block__one--master">
                                    <div className="community--block__one--master__l2">
                                        <h1>1</h1>
                                        <h3>Мастер-класс</h3>
                                        <p>
                                            Вы получите доступ ко всем урокам мастер-класса и другим дополнительным
                                            материалам
                                        </p>
                                    </div>
                                    <div className="community--block__one--master__l1">
                                        <h1>1</h1>
                                        <h3>Мастер-класс</h3>
                                        <p>
                                            Вы получите доступ ко всем урокам мастер-класса и другим дополнительным
                                            материалам
                                        </p>
                                    </div>
                                </div>
                                <div className="community--block__one--master">
                                    <div className="community--block__one--master__l2">
                                        <h1>1</h1>
                                        <h3>Мастер-класс</h3>
                                        <p>
                                            Вы получите доступ ко всем урокам мастер-класса и другим дополнительным
                                            материалам
                                        </p>
                                    </div>
                                    <div className="community--block__one--master__l1">
                                        <h1>1</h1>
                                        <h3>Мастер-класс</h3>
                                        <p>
                                            Вы получите доступ ко всем урокам мастер-класса и другим дополнительным
                                            материалам
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="community--block__two">
                                <h3>
                                    Мастер-класс “Реактивное <br/> программирование на Java : как, <br/> зачем и стоит
                                    ли? Часть 1”
                                </h3>
                                <h1>46,00 $</h1>
                                <p><BsCheck2/> Доступ к мастер классу навсегда</p>
                                <p><BsCheck2/> Доступ к мастер классу навсегда</p>
                                <p><BsCheck2/> Доступ к мастер классу навсегда</p>
                                <button>Купить мастер-класс</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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

export default Community;