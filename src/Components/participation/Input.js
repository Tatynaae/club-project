import React from 'react';
import {BsChevronDown} from "react-icons/bs";
import Home_question_sign from '../../img/image 10.png'

const Input = () => {
    return (
        <>
            <div id="requesT">
                <div className="container">
                    <div className="requesT">
                        <div className="requesT--left">
                            <h1> Оставить заявку</h1>
                            <p>
                                Заполните краткую форму с ключевым вопросами, <br/> и мы подготовимся к разговору с вами
                            </p>
                        </div>
                        <div className="requesT--right">
                            <label htmlFor="username">Ф.И.О*</label>
                            <input type="text" id='username' name='username' autoComplete='off'/>
                            <label htmlFor="name">Номер телефон*</label>
                            <input type="number" name='name' id='name' autoComplete='off'/>
                            <label htmlFor="mail">Email*</label>
                            <input type="text" name='mail' id='mail' autoComplete='off'/> <a href="#">
                            <button> Отправить</button>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="home-accordion">
                <div className="container">
                    <div className="home-accordion">
                        <div className="home-accordion_group">
                            <h1>Остались вопросы?</h1>
                            <div>
                                <img src={Home_question_sign} alt=""/>
                            </div>
                        </div>
                        <div className="home-accordion_desc">
                            <div className="home-accordion_desc-accordion">
                                <input type="checkbox" id="accordion1"/>
                                <label htmlFor="accordion1" className="home-accordion_desc-accordion_label">
                                    <p>Что такое зарезервированные слова в программировании?</p>
                                    <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                </label>
                                <div className="home-accordion_desc-accordion_content">
                                    <div>
                                        <p>
                                            Margulan.info – это уникальная экосистема и персональная социальная
                                            сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                            образовательными практиками и возможностями открытой коммуникации
                                            как с Маргуланом так и с другими участниками. Вы получаете полезный
                                            и практический контент, который вдохновляет, дает новые инструменты
                                            и навыки для выхода на новый уровень в вашей карьере, бизнесе и
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
                                    <div>
                                        <p>
                                            Margulan.info – это уникальная экосистема и персональная социальная
                                            сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                            образовательными практиками и возможностями открытой коммуникации
                                            как с Маргуланом так и с другими участниками. Вы получаете полезный
                                            и практический контент, который вдохновляет, дает новые инструменты
                                            и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                            личной эффективности.
                                        </p>
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
                                    <div>
                                        <p>
                                            Margulan.info – это уникальная экосистема и персональная социальная
                                            сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                            образовательными практиками и возможностями открытой коммуникации
                                            как с Маргуланом так и с другими участниками. Вы получаете полезный
                                            и практический контент, который вдохновляет, дает новые инструменты
                                            и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                            личной эффективности.
                                        </p>
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
                                    <div>
                                        <p>
                                            Margulan.info – это уникальная экосистема и персональная социальная
                                            сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                            образовательными практиками и возможностями открытой коммуникации
                                            как с Маргуланом так и с другими участниками. Вы получаете полезный
                                            и практический контент, который вдохновляет, дает новые инструменты
                                            и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                            личной эффективности.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="home-accordion_desc-accordion">
                                <input type="checkbox" id="accordion5"/>
                                <label htmlFor="accordion5" className="home-accordion_desc-accordion_label">
                                    <p>Нужно ли учить другой язык программирования, перед изучением языка С++?</p>
                                    <BsChevronDown className="home-accordion_desc-accordion_label-icon"/>
                                </label>
                                <div className="home-accordion_desc-accordion_content">
                                    <div>
                                        <p>
                                            Margulan.info – это уникальная экосистема и персональная социальная
                                            сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                            образовательными практиками и возможностями открытой коммуникации
                                            как с Маргуланом так и с другими участниками. Вы получаете полезный
                                            и практический контент, который вдохновляет, дает новые инструменты

                                            Нурболот, [16.01.2023 0:04]
                                            и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                            личной эффективности.
                                        </p>
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
                                    <div>
                                        <p>
                                            Margulan.info – это уникальная экосистема и персональная социальная
                                            сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                            образовательными практиками и возможностями открытой коммуникации
                                            как с Маргуланом так и с другими участниками. Вы получаете полезный
                                            и практический контент, который вдохновляет, дает новые инструменты
                                            и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                            личной эффективности.
                                        </p>
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
                                    <div>
                                        <p>
                                            Margulan.info – это уникальная экосистема и персональная социальная
                                            сеть, которая соединяет уникальный опыт Маргулана с новейшими
                                            образовательными практиками и возможностями открытой коммуникации
                                            как с Маргуланом так и с другими участниками. Вы получаете полезный
                                            и практический контент, который вдохновляет, дает новые инструменты
                                            и навыки для выхода на новый уровень в вашей карьере, бизнесе и
                                            личной эффективности.
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

export default Input;