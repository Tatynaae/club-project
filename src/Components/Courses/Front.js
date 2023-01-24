import React from 'react';
import focus from '../../img/focus.svg'
import leader from '../../img/Evgenyi.png'
import {TfiWrite} from "react-icons/tfi";
import {SlDiamond} from "react-icons/sl";
import {GiExtraTime} from "react-icons/gi";
import Slider from "react-slick";
import boy from '../../img/boyLogo.svg'
import girl from '../../img/girlLogo.svg'
import Accordions from "./Accordion";
import {useNavigate} from "react-router-dom";


const Front = () => {

    const navigate = useNavigate()

    const
    settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }, {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ],
    };

    return (
        <section id='front' style={{background: '#0A1128', padding: '120px 0  50px 0'}}>
            <div className="container">
                <div className="front">
                    <div className="front__first">
                        <div className="nav">
                            <p style={{color:'#FFF'}}><span style={{color:'#A5A5A5'}}>Главная / Наши курсы /</span> Frontend- разработчик</p>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <div className="front__first--info">
                                <h1>Frontend-разработчик</h1>
                                <p>Идея реактивного программирования появилась сравнительно недавно, лет 10 назад. Что
                                    вызвало популярность этого относительно нового подхода и почему сейчас он в тренде,
                                    рассказал на конференции </p>
                                <button onClick={()=> {
                                    window.scroll(0,0)
                                    navigate('/Buy')
                                }}
                                >Купить курс за 46 $</button>
                            </div>
                            <div className="front__first--info2">
                                <p>Доступ:</p>
                                <h5>Навсегда</h5>

                                <p>В курс входит: </p>
                                <h5>3 модулей 60материалов</h5>
                            </div>
                        </div>
                    </div>
                    <div className="front__second">
                        <p>Что, как и почему</p>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                            <div className="front__second--inform">
                                <h1>О КУРСЕ</h1>
                                <p>Это всё, что ты видишь и кликаешь на сайте или в приложении - картинки, кнопочки,
                                    анимации и даже бесячая реклама.

                                    Самые главные инструменты frontend разработки сайтов это JavaScript, HTML и CSS.

                                    В Кыргызстане фронтенд-разработчики востребованы практически в каждой IT-компании.
                                    Это также одно из самых популярных направлений для фриланса и удаленной работы. Все
                                    потому, что в современном мире сайт нужен каждому</p>
                            </div>
                            <div className="front__second--inform2">
                                <p>Доступ:</p>
                                <h4>Навсегда</h4>

                                <p>В курс входит: </p>
                                <h4>3 модулей 60материалов</h4>
                            </div>
                        </div>
                    </div>
                    <div className="front__third">
                        <h1>Для кого это </h1>
                        <ul>
                            <li>Для людей с математическим складом ума.</li>
                        </ul>

                        <h1 className='study'>Вы изучтие</h1>

                        <div className='allUl'>
                            <ul className='allUl__first'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>Soft skills. Нетехнические навыки</li>
                            </ul>

                            <ul className='allUl__second'
                                style={{display: 'flex', alignItems: 'start', flexDirection: 'column'}}>
                                <li>Кроссплатформенность и кроссбраузерность</li>
                                <li>Управление версиями</li>
                                <li>Тестирование и отладка</li>
                            </ul>
                        </div>
                    </div>
                    <div className="front__fours">
                        <h1>К каким результатам вас может привести этот курс?</h1>
                        <p>С каждым днем, с каждым месяцем, с каждым годом вы будете физически ощущать, как ваши мечты и
                            цели воплощаются в реальность. И каждый день, каждый год вы будете видеть, что вы живете той
                            жизнью, которую сами для себя выбрали, и именно по тому сценарию, который вы сами для себя
                            создали.

                            Ваш новый навык планирования изменит вашу жизнь и поможет отточить умение выстраивать дела в
                            правильной последовательности. Сначала вы будете видеть на неделю вперед, потом - на месяц,
                            потом - на год, а потом вы будете видеть весь свой путь. Система планирования Кайдзен
                            позволит вам правильно планировать правильные вещи и увеличить степень контроля над своей
                            жизнью, чтобы сделать её счастливой и успешной.</p>

                        <h1>Учитесь, применяйте полученные на курсе знания и будьте счастливы!</h1>

                        <div className='front__fours--btn'>
                            <button onClick={()=> {
                                window.scroll(0,0)
                                navigate('/Buy')
                            }}>Купить курс</button>
                            <button>Смотреть программу</button>
                        </div>
                    </div>
                    <div className="front__fives">
                        <h1>ПРОГРАММА КУРСА</h1>
                        <div className="front__fives--module">
                            <h2>Модуль 1</h2>
                            <p>Reactivity</p>
                        </div>
                        <div className="front__fives--module">
                            <h2>Модуль 2</h2>
                            <p>Reactive approach</p>
                        </div>
                        <div className="front__fives--module">
                            <h2>Модуль 3</h2>
                            <p>Observable example</p>
                        </div>
                        <div className="front__fives--module">
                            <h2>Модуль 4</h2>
                            <p>Implementing and subscribing to an observer</p>
                        </div>
                        <div className="front__fives--module">
                            <h2>Модуль 5</h2>
                            <p>Reactive Streams spec</p>
                        </div>
                        <div className="front__fives--module">
                            <h2>Модуль 6</h2>
                            <p>Reactive Streams spec</p>
                        </div>
                        <button onClick={() => {
                            window.scroll(0,0)
                            navigate('/register')
                        }}>Зарегистрироваться</button>
                        <img src={focus} alt="" className='focus'/>
                    </div>
                    <div className="front__six">
                        <div className="front__six--materials">
                            <div className="material mot1">
                                <TfiWrite className='material__icon'/>
                                <h3>100 материалов</h3>
                                <p>Только полезная информация, никакой воды. Применяйте эти знания первыми!</p>
                            </div>
                            <div className="material mot2">
                                <SlDiamond className='material__icon'/>
                                <h3>100% эксклюзив</h3>
                                <p>Курс записан эксклюзивно для нашей платформы</p>
                            </div>
                            <div className="material mot1">
                                <GiExtraTime className='material__icon'/>
                                <h3>В любое время, в любом месте</h3>
                                <p>Занимайтесь как вам удобно и где угодно, на своем мобильном или компьютере</p>
                            </div>
                        </div>
                        <div className="front__six--leader">
                            <div>
                                <img className='logo__lead' src={leader} alt=""/>
                                <p>Мастер класс ведет</p>
                                <h1>Евгений Александрович</h1>
                                <p> Frontend developer </p>
                            </div>
                        </div>
                    </div>
                    <div className="front__seven">
                        <h1>Процесс обучения</h1>
                        <div className="front__seven--process">
                            <div className="kub general1">
                                <h1>1</h1>
                                <h4>Мастер-класс</h4>
                                <p>Вы получите доступ ко всем урокам мастер-класса и другим дополнительным
                                    материалам</p>
                            </div>
                            <div className="kub general2">
                                <h1>2</h1>
                                <h4>Своё расписание</h4>
                                <p>Доступ к мастер-классам открыт 24/7. Вы сами решаете, когда у вас следующий урок</p>
                            </div>
                            <div className="kub general1">
                                <h1>3</h1>
                                <h4>Сообщество</h4>
                                <p>Вы сможете общаться и обмениваться мнениями с другими учениками в комментариях</p>
                            </div>
                            <div className="kub general2">
                                <h1>4</h1>
                                <h4>Доступ</h4>
                                <p>Мы предоставляем вам бессрочный доступ к материалам любого оплаченного
                                    мастер-класса</p>
                            </div>
                        </div>

                        <h1>Отзывы наших студентов</h1>

                        <div className="slide">
                            <Slider {...settings}>
                                <div className='slide__block'>
                                    <img className='logo' src={boy} alt=""/>
                                    <h2>Виктор Александарович</h2>
                                    <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с
                                        остался полностью доволен, что мой выбор пал именно на данную школу. Если вы
                                        выберите данную школу - вам обеспечена прокачка в выбранной вами области.
                                        Всячески рекомендую и благодарю!</p>
                                    <h5>23.02.2022 г</h5>
                                </div>
                                <div className='slide__block'>
                                    <img className='logo' src={girl} alt=""/>
                                    <h2>Алина Татьянован</h2>
                                    <p>Лучшая школа в галактике и место, где я полюбил мир IT !!! Я вот-вот стану
                                        выпускником Motion Web. За это время мне дали фундаментальные знания
                                        программирования ( C++, C#, Python ), дискретной математики, криптографии,
                                        созданию сайтов со сложной серверной архитектурой и многим другим важным
                                        навыкам. </p>
                                    <h5>23.02.2022 г</h5>
                                </div>
                                <div className='slide__block'>
                                    <img className='logo' src={boy} alt=""/>
                                    <h2>Виктор Александарович</h2>
                                    <p>С радостью оставляю положительной отзыв! Пройдя курс "UX/UI Designer с нуля" я с
                                        остался полностью доволен, что мой выбор пал именно на данную школу. Если вы
                                        выберите данную школу - вам обеспечена прокачка в выбранной вами области.
                                        Всячески рекомендую и благодарю!</p>
                                    <h5>23.02.2022 г</h5>

                                </div>
                                <div className='slide__block'>
                                    <img className='logo' src={girl} alt=""/>
                                    <h2>Алина Татьянован</h2>
                                    <p>Лучшая школа в галактике и место, где я полюбил мир IT !!! Я вот-вот стану
                                        выпускником Motion Web. За это время мне дали фундаментальные знания
                                        программирования ( C++, C#, Python ), дискретной математики, криптографии,
                                        созданию сайтов со сложной серверной архитектурой и многим другим важным
                                        навыкам. </p>
                                    <h5>23.02.2022 г</h5>

                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="front__eight">
                        <p>FAQ</p>
                        <h1>Остались вопросы?</h1>
                        <Accordions/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Front;