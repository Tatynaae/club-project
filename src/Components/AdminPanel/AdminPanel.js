import React, {useState} from 'react';
import DataModal from "./Modals/DataModal";
import Payment from "./Modals/Payment";
import {FaRegComment, FaRegUser, FaUserCircle} from "react-icons/fa";
import {BsWallet2} from "react-icons/bs";
import SubscribeModal from "./Modals/SubscribeModal";
import {FiCreditCard} from "react-icons/fi";
import Comments from "./Modals/Comments";
import {BiBasket} from "react-icons/bi";
import My from "./Modals/MyBoughts";
import {RxExit} from "react-icons/rx";
import Exit from "./Modals/Exit";


const AdminPanel = () => {

    const [modal, setModal] = useState('data')

    const fn = () => (
        setModal('data')
    )
     const changeText = () => {
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
        }
     }

     const wind = () =>{
         window.style.filter = "blur(5px)"
     }

return (
        <div id='admin-panel'>
            <div className="container">
                <div className="admin-panel">

                    <div className='admin-panel--btn'>
                        <p style={{color:'#A5A5A5'}}>Главная</p>
                        <p>/ Профиль /</p>
                        <p>{changeText()}</p>
                    </div>

                    <div className='admin-panel--prof'>
                        <div className="profile">
                            <FaUserCircle style={{fontSize:'100px', background:'white', color:'#DCDCDC', marginTop:'30px'}}/>
                            <button className='photo'>Добавить фото</button>

                            <button style={{color: modal==='data' ? '#0272CE' : 'black'}}
                                onClick={() => setModal('data')}
                            ><FaRegUser className='icon' style={{color: modal==='data' ? '#0272CE' : 'black', marginLeft:'-40px'}}/> Личные данные</button>
                            <div className="line" style={{border:'1px solid #DCDCDC', width:'352px', margin:'13px 0'}}></div>


                            <button style={{color: modal==='card' ? '#0272CE' : 'black'}}
                                    onClick={() => setModal('card')}>
                                <BsWallet2 className='icon' style={{color: modal==='card' ? '#0272CE' : 'black', marginLeft:'-30px'}}/> Платежные карты</button>
                            <div className="line" style={{border:'1px solid #DCDCDC', width:'352px', margin:'13px 0'}}></div>


                            <button style={{color: modal==='sub' ? '#0272CE' : 'black'}}
                                    onClick={() => setModal('sub')}>
                                <FiCreditCard className='icon' style={{color: modal==='sub' ? '#0272CE' : 'black', marginLeft:'-68px'}}/> Подписки</button>
                            <div className="line" style={{border:'1px solid #DCDCDC', width:'352px', margin:'13px 0'}}></div>


                            <button style={{color: modal==='com' ? '#0272CE' : 'black'}}
                                    onClick={() => setModal('com')}>
                                <FaRegComment className='icon' style={{color: modal==='com' ? '#0272CE' : 'black', marginLeft:'-49px'}}/> Комментарии</button>
                            <div className="line" style={{border:'1px solid #DCDCDC', width:'352px', margin:'13px 0'}}></div>


                            <button style={{color: modal==='buy' ? '#0272CE' : 'black'}}
                                    onClick={() => setModal('buy')}>
                                <BiBasket className='icon' style={{color: modal==='buy' ? '#0272CE' : 'black', marginLeft:'-54px'}}/> Мои покупки</button>
                            <div className="line" style={{border:'1px solid #DCDCDC', width:'352px', margin:'13px 0'}}></div>


                            <button onClick={() => {
                                setModal('mod')
                                wind()
                            }}
                                style={{color: modal==='mod' ? '#0272CE' : 'black'}}>
                                <RxExit style={{color: modal==='mod' ? '#0272CE' : 'black', background:'transparent', fontSize:'20px', marginLeft:'-82px'}}/> Выйти</button>

                        </div>
                        <DataModal modal={modal}/>
                        <Payment modal={modal}/>
                        <SubscribeModal modal={modal}/>
                        <Comments modal={modal}/>
                        <My modal={modal}/>
                        <Exit modal={modal} fn={fn}/>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default AdminPanel;