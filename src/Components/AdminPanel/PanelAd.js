import React, {useEffect, useState} from 'react';
import {FaRegUser} from "react-icons/fa";
import {SlArrowDown} from "react-icons/sl";

const PanelAd = ({modal, setModal}) => {

    const title = () => {
        if(modal === 'data'){
            return 'Личные данные'
        }else if(modal === 'card'){
            return 'Платежные карты'
        }else if(modal === 'sub'){
            return 'Подписки'
        }else if(modal === 'com'){
            return 'Комментарии'
        }else if(modal === 'buy'){
            return 'Мои покупки'
        }else if(modal === 'mod'){
            return 'Выйти'
        }
    }

    const [open, setOpen] = useState(false)
    const openMod = (el) => {
        setOpen(!el)
    }



    useEffect(()=>{

    },[modal])

    return (
        <div id='panel' style={{paddingBottom: modal === 'card' ? '990px' : ''}}>
            <div className="container">
                <div className="panel" style={{height: open ? '460px' : '55px',}}>
                    <div onClick={() => {
                        openMod(open)
                        setModal('data')
                    }} className="panel__modal">
                        <FaRegUser className='icon' style={{color: modal==='data' ? '#0272CE' : 'black'}}/>
                        <button className='panel__modal--btn' style={{color: modal==='data' ? '#0272CE' : 'black'}}
                                >Личные данные</button><SlArrowDown style={{fontSize:'20px'}}/>
                    </div>

                    <div className="panel--next" style={{display: open ? 'block' : 'none'}}>

                       <div onClick={() => {
                           openMod(open)
                           setModal('card')
                       }} className='panel--next__btn'><button
                           style={{color: modal==='card' ? '#0272CE' : 'black'}}
                           className='next-btn'>Платежные карты</button></div>

                       <div onClick={() => {
                           openMod(open)
                           setModal('sub')
                       }} className='panel--next__btn'>< button
                           style={{color: modal==='sub' ? '#0272CE' : 'black'}}
                           className='next-btn'>Подписки</button></div>

                       <div onClick={() => {
                           openMod(open)
                           setModal('com')
                       }} className='panel--next__btn'>< button
                           style={{color: modal==='com' ? '#0272CE' : 'black'}}
                           className='next-btn'>Комментарии</button></div>

                       <div onClick={() => {
                           openMod(open)
                           setModal('buy')
                       }} className='panel--next__btn'>< button
                           style={{color: modal==='buy' ? '#0272CE' : 'black'}}
                           className='next-btn'>Мои покупки</button></div>

                       <div onClick={() => {
                           openMod(open)
                           setModal('mod')
                       }} className='panel--next__btn'>< button
                           style={{color: modal==='mod' ? '#0272CE' : 'black'}}
                           className='next-btn'>Выйти</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PanelAd;