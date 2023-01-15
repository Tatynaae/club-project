import React from 'react';
import Input from "./Input";

const Participation = () => {
    return (
        <>
            <div id="speak">
                <div className="container">
                    <div className="speak">
                        <div className="text">
                            <p style={{color:'#FFF'}}> <span style={{color:'#A5A5A5'}}>Главная / </span>Пакет участия</p>
                        </div>
                        <div className="speak--text">
                            <h1>Выберите свой пакет участия</h1>
                        </div>
                        <div className="speak--one">
                            <div className="speak--one__block">
                                <div className="speak--one__block--text">
                                    <p>Год +</p>
                                    <h1>585,00 $</h1>
                                </div>
                                <div className="speak--one__block--check">
                                    <button>Ежегодно</button>
                                    <div className="speak--one__block--check__type">
                                        <input type="checkbox"/>
                                        <h3>Все статьи</h3>
                                    </div>
                                    <div className="speak--one__block--check__type">
                                        <input type="checkbox"/>
                                        <h3>Все статьи</h3>
                                    </div>
                                </div>
                                <div className="speak--one__block--btn">
                                    <button className='speak--one__block--btn--two' style={{margin:'120px 0 0 0 '}}>Оформить подписку</button>
                                </div>
                            </div>
                            <div className="speak--one__block">
                                <div className="speak--one__block--text">
                                    <p>Год +</p>
                                    <h1>585,00 $</h1>
                                </div>
                                <div className="speak--one__block--check">
                                    <button>Ежегодно</button>
                                    <div className="speak--one__block--check__type">
                                        <input type="checkbox"/>
                                        <h3>Все статьи</h3>
                                    </div>
                                    <div className="speak--one__block--check__type">
                                        <input type="checkbox"/>
                                        <h3>Все статьи</h3>
                                    </div>
                                    <div className="speak--one__block--check__type">
                                        <input type="checkbox"/>
                                        <h3>Все мастер классы</h3>
                                    </div>
                                </div>
                                <div className="speak--one__block--btn">
                                    <button className='speak--one__block--btn--three' style={{margin:'90px 0 0 0 '}}>Оформить подписку</button>
                                </div>
                            </div>
                            <div className="speak--one__block">
                                <div className="speak--one__block--text">
                                    <p>Год +</p>
                                    <h1>585,00 $</h1>
                                </div>
                                <div className="speak--one__block--check">
                                    <button>Ежегодно</button>
                                    <div className="speak--one__block--check__type">
                                        <input type="checkbox"/>
                                        <h3>Все статьи</h3>
                                    </div>
                                    <div className="speak--one__block--check__type">
                                        <input type="checkbox"/>
                                        <h3>Все статьи</h3>
                                    </div>
                                    <div className="speak--one__block--check__type">
                                        <input type="checkbox"/>
                                        <h3>Все мастер классы</h3>
                                    </div>
                                    <div className="speak--one__block--check__type">
                                        <input type="checkbox"/>
                                        <h3>6 статей каждый месяц</h3>
                                    </div>
                                    <div className="speak--one__block--check__type">
                                        <input type="checkbox"/>
                                        <h3>Доступ к курсу “DevOps <br/> - инженер”</h3>
                                    </div>

                                </div>
                                <div className="speak--one__block--btn">
                                    <button>Оформить подписку</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Input/>
        </>

    );
};

export default Participation;