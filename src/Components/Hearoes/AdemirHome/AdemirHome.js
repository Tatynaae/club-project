import React from 'react';
import img1 from "../../../img/developer.svg";

const AdemirHome = () => {
    return (
        <div>
            <div id="school">
                <div className="container">
                    <div className="school">
                        <div className="school--text">
                            <p><span style={{color: '#A5A5A5'}}>Главная / </span>О школе</p>
                        </div>
                        <div className="school--one">
                            <div className="school--one--two">
                                <div className="school--one--two--text">
                                    <h1>О нашей школе:</h1>
                                    <p>Наша платформа — это интенсивная программа <br/> обучения для тех, кто хочет
                                        освоить
                                        востребованную <br/> профессию, войти в IT и зарабатывать больше.
                                    </p>
                                </div>
                                <div className="school--one--two--one">
                                    <h1>Наша миссия:</h1>
                                    <p>Сформировать интерес к современным технологиям <br/> и помочь школьнику
                                        определиться с
                                        выбором <br/> будущей специальности.
                                    </p>
                                </div>
                            </div>
                            <div className="school--one--img">
                                <img src={img1} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdemirHome;