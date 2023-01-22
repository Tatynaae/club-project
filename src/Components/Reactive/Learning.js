import React from 'react';
import focuss from '../../img/focus.svg'
import boy from '../../img/Evgenyi.png'

const Learning = () => {
    return (
        <section id='learning' style={{background:'#0A1128'}}>
            <div className="container">
                <div className="learning">
                    <div className="learning--text">
                        <h1>ПРОГРАММА МАСТЕР-КЛАССА</h1>
                    </div>
                    <div className="learning--input">
                        <div className="learning--input__one">
                            <div className="learning--input__one--text">
                                <h1>1</h1>
                                <p>Reactivity</p>
                            </div>
                            <div className="learning--input__one--text">
                                <h1>2</h1>
                                <p></p>
                            </div>
                            <div className="learning--input__one--text">
                                <h1>3</h1>
                                <p>Observable example</p>
                            </div>
                            <div className="learning--input__one--text">
                                <h1>4</h1>
                                <p>Implementing and subscribing to an observer
                                </p>
                            </div>
                            <div className="learning--input__one--text">
                                <h1>5</h1>
                                <p>Reactive Streams spec</p>
                            </div>
                            <div className="learning--input__one--btn">
                                <button>Купить мастер-класс </button>
                            </div>
                        </div>
                        <div className="learning--input__two">
                            <img src={focuss} alt=""/>
                        </div>
                    </div>
                    <div className="learning--img">
                        <div className="learning--img__one">
                            <img src={boy} alt=""/>
                            <div className="learning--img__one--text">
                                <p>Мастер класс ведет</p>
                                <h1>Евгений Александрович</h1>
                                <span> Frontend developer / Аратор </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Learning;