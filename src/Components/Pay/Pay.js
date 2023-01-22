import React from 'react';

const Pay = () => {
    return (
        <>
            <div id="main">
                <div className="container">
                    <div className="main">
                        <div className="pays">
                            <div className="pays--title">
                                <p><span>Главная /</span> Оформить подписку</p>
                            </div>
                            <div className="pay">
                                <div className="pay--inputs">
                                    <h1>Год</h1>
                                    <div className="pay--inputs__user">
                                        <label htmlFor="uname">Ф.И.О*</label>
                                        <input type="text" name='uname' required/>
                                    </div>
                                    <div className="pay--inputs__user">
                                        <label htmlFor="uname">Телефон*</label>
                                        <input type="number" name='uname' placeholder='+996 |' required/>
                                    </div>
                                    <div className="pay--inputs__psw">
                                        <label htmlFor="uname">E mail*</label>
                                        <input type="text" name='uname' required/>
                                    </div>
                                    <div className="pay--inputs__psw">
                                        <label htmlFor="uname">Пароль </label>
                                        <input type="text" name='uname' required/>
                                    </div>
                                    <div className="pay--inputs__card">
                                        <p>Выберите платежную карту</p>
                                        <div className="pay--inputs__card--cards">
                                            <div className="pay--inputs__card--cards__radio">
                                                <input type="radio" id='Visa' name='visa' value='visa'/>
                                                <label htmlFor="Visa">Visa</label>
                                            </div>
                                            <div className="pay--inputs__card--cards__radio">
                                                <input type="radio" id='MasterCard' name='masterCard' value='MasterCard'/>
                                                <label htmlFor="MasterCard">MasterCard</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pay--inputs__psw">
                                        <label htmlFor="uname">Номер карты *</label>
                                        <input type="text" name='uname' required/>
                                    </div>
                                    <div className="pay--inputs__year">
                                        <div className="pay--inputs__year--cvc">
                                            <label htmlFor="year">ММ/ГГ *</label>
                                            <input type="text" name='year'/>
                                        </div>
                                        <div className="pay--inputs__year--cvc">
                                            <label htmlFor="cvc">CVC *</label>
                                            <input type="text" name='cvc'/>
                                        </div>
                                    </div>
                                    <div className="pay--inputs__checkbox">
                                        <input type="checkbox"/>
                                        <p>Я ознакомился и согласен с Условиями оказания услуг</p>
                                    </div>
                                    <button className="pay--inputs__button">
                                        Оплатить 225.00$
                                    </button>
                                    <div className="pay--inputs__texts">
                                        <h2>Все мастер-классы нашей школы
                                        </h2>
                                        <h2>6 новых статей каждый месяц.
                                        </h2>
                                        <h2>Образовательная платформа доступна на условиях ежегодной подписки.</h2>
                                        <div className="pay--inputs__texts--others">
                                            <h1>
                                                Другие варианты подписки:
                                            </h1>
                                            <button>
                                                Год + - 585,00 $/год
                                            </button>
                                            <button>
                                                Месяц  - 105,00 $/год
                                            </button>
                                        </div>
                                        <h3>Отменить можно в любой момент!
                                        </h3>
                                        <p>При оплате через Fondy, с Вашей карты автоматически будут списываться 225,00 $/год, которые являются стандартной ценой участия.
                                        </p>
                                        <p>Вы всегда можете отменить подписку в Вашем личном кабинете и больше списаний не будет.

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

export default Pay;