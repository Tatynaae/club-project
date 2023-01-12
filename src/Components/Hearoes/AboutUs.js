import React from 'react';
import group1 from '../../img/group1.svg'
import group2 from '../../img/group2.svg'
import certificate from '../../img/certificat.png'
import boyLogo from '../../img/boyLogo.svg'
import girlLogo from '../../img/girlLogo.svg'
import Slider from "react-slick";

const AboutUs = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
        <>
            <div id='about-us'>
                <div className="container">
                    <div className="about-us">
                        <div className="about-us--title">
                            <h1>О нас</h1>
                            <h2>Курсы IT-профессий Motion Web была основана в 2021-ом году в Бишкеке с целью
                                дать возможность каждому человеку, даже без опыта в технологиях, гарантированно
                                освоить IT-профессию.</h2>
                            <h3>Форма обучения - онлайн, с применением электронного обучения и дистанционных
                                образовательных
                                технологий на образовательной платформе Moodle и прямые эфиры с преподавателем. 154
                                академических часа трудоёмкости учебной деятельности отведено практическим занятиям и
                                выполнению практических заданий.</h3>
                        </div>
                        <div className="about-us--images">
                            <img src={group1} alt=""/>
                            <img src={group2} alt=""/>
                        </div>
                        <div className="about-us--certificate">
                            <h1>Сертификат</h1>
                            <h2>По окончании обучения выдается онлайн сертификат.</h2>
                            <img src={certificate} alt=""/>
                        </div>
                        <Slider {...settings}>
                            <div className="slider-block">
                                <img src={boyLogo} alt=""/>
                                <h1>Виктор Александарович</h1>
                                <h2 className='hText'>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                                    Designer с нуля" я с
                                    остался
                                    полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную
                                    школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и
                                    благодарю!</h2>
                                <h3>23.02.2022 г</h3>
                            </div>


                            <div className="slider-block">
                                <img src={girlLogo} alt=""/>
                                <h1>Виктор Александарович</h1>
                                <h2 className='hText'>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                                    Designer с нуля" я с
                                    остался
                                    полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную
                                    школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и
                                    благодарю!</h2>
                                <h3>23.02.2022 г</h3>
                            </div>

                            <div className="slider-block">
                                <img src={boyLogo} alt=""/>
                                <h1>Виктор Александарович</h1>
                                <h2 className='hText'>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                                    Designer с нуля" я с
                                    остался
                                    полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную
                                    школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и
                                    благодарю!</h2>
                                <h3>23.02.2022 г</h3>
                            </div>

                            <div className="slider-block">
                                <img src={girlLogo} alt=""/>
                                <h1>Виктор Александарович</h1>
                                <h2 className='hText'>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                                    Designer с нуля" я с
                                    остался
                                    полностью доволен, что мой выбор пал именно на данную школу. Если вы выберите данную
                                    школу - вам обеспечена прокачка в выбранной вами области. Всячески рекомендую и
                                    благодарю!</h2>
                                <h3>23.02.2022 г</h3>
                            </div>
                        </Slider>
                        <div className="request">
                            <div className="request--left"><h1> Оставить заявку
                            </h1><p> Заполните краткую форму с ключевым <br/> вопросами, и мы подготовимся к
                                разговору с вами
                            </p></div>
                            <div className="request--right">
                                <label htmlFor="username">Ф.И.О*</label> <input type="text" id='username'
                                                                                name='username' autoComplete='off'/>
                                <label htmlFor="name">Номер телефон*</label> <input type="number" name='name' id='name'
                                                                                    autoComplete='off'/>
                                <label htmlFor="mail">Email*</label> <input type="text" name='mail' id='mail'
                                                                            autoComplete='off'/>
                                <a href="#">
                                    <button> Отправить</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AboutUs;