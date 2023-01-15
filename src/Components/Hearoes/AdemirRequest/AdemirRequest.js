import React from 'react';

const AdemirRequest = () => {
    return (
            <div id="request">
                <div className="container">
                    <div className="request">
                        <div className="request--left">
                            <h1> Оставить заявку</h1>
                            <p>
                                Заполните краткую форму с ключевым вопросами, <br/> и мы подготовимся к разговору с вами
                            </p>
                        </div>
                        <div className="request--right">
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
    );
};

export default AdemirRequest;