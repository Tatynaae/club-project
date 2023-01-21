import React, {useState} from 'react';
import {SlArrowDown} from "react-icons/sl";

const Accordions = () => {
    const [check, setCheck] = useState('')


    return (

            <>
                <div className='front__eight--accordion'>
                    <div className="accordionTitle" onClick={() => setCheck('one')}>
                        <h6>Как мне начать обучение ?</h6>
                        <SlArrowDown style={{color:'#FFFFFF', transform:check === 'one' ? 'rotate(180deg)' : ''}}/>
                    </div>
                    <h5 style={{
                        transition:'.8s',
                        display: check === 'one' ? 'block' : 'none',
                        transform:'inherit',
                    }}
                    >Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска.</h5>
                </div>


                <div className='front__eight--accordion'>
                    <div className="accordionTitle" onClick={() => setCheck('two')}>
                        <h6>Могу ли я отказаться от автопродления подписки</h6>
                        <SlArrowDown style={{color:'#FFFFFF', transform:check === 'two' ? 'rotate(180deg)' : ''}}/>
                    </div>
                    <h5 style={{
                        transition:'.8s',
                        display: check === 'two' ? 'block' : 'none',
                        transform:'inherit',
                    }}
                    >Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска.</h5>
                </div>


                <div className='front__eight--accordion'>
                    <div className="accordionTitle" onClick={() => setCheck('three')}>
                        <h6>Могу ли я вернуть деньги</h6>
                        <SlArrowDown style={{color:'#FFFFFF', transform:check === 'three' ? 'rotate(180deg)' : ''}}/>
                    </div>
                    <h5 style={{
                        transition:'.8s',
                        display: check === 'three' ? 'block' : 'none',
                        transform:'inherit',
                    }}
                    >Очень просто – зарегистрироваться. Это займет всего несколько минут. Создайте свой аккаунт с помощью адреса электронной почты и номера телефона. Мастер-класс станет доступен сразу после оплаты или в день запуска.</h5>
                </div>
            </>

    );
};

export default Accordions;