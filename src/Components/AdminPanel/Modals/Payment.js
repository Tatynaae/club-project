import React from 'react';
import cardX from "../../../img/cardX.svg";
import wi from "../../../img/wi-fi.svg";

const Payment = ({modal}) => {
    return (
        <div className="payment" id={modal ==='card' ? 'view' : 'view-d'}>
            <div className='ellipse'></div>
            <h1 style={{color: '#FFFFFF'}} className='pay-title'>Платежные карты</h1>
            <div className="payment--cards">
                <div className="first">
                    <h1 style={{color: '#FFFFFF', fontFamily: 'PT Sans, san-serif',margin:'0 0 10px 0', background:'transparent'}}>Visa Classic</h1>
                    <div style={{display:'flex', alignItems:'center', background:'transparent'}}>
                        <img style={{margin:'0 10px 0 0 '}} src={cardX} alt=""/>
                        <img style={{margin:'0 10px 0 0 ', background:'transparent'}} src={wi} alt=""/>
                    </div>
                    <h2 style={{color: '#FFFFFF', margin:'10px 0 0 0', background:'transparent'}}>4000 1234 5678 9010</h2>
                    <p style={{color:"white", margin:'10px 0 0 0', fontSize:'16px', background:'transparent'}}>12/34</p>
                    <div className='visa'>
                        <h1 style={{fontStyle:'italic', fontSize:'26px', color:'white', fontFamily: 'PT Sans, san-serif', margin:' 0 30px 0 0', background:'transparent'}}>VISA</h1>
                    </div>
                </div>
                <div className="first">
                    <h1 style={{color: '#FFFFFF', fontFamily: 'PT Sans, san-serif',margin:'0 0 10px 0', background:'transparent'}}>Visa Classic</h1>
                    <div style={{display:'flex', alignItems:'center', background:'transparent'}}>
                        <img style={{margin:'0 10px 0 0 '}} src={cardX} alt=""/>
                        <img style={{margin:'0 10px 0 0 ', background:'transparent'}} src={wi} alt=""/>
                    </div>
                    <h2 style={{color: '#FFFFFF', margin:'10px 0 0 0', background:'transparent'}}>4000 1234 5678 9010</h2>
                    <p style={{color:"white", margin:'10px 0 0 0', fontSize:'16px', background:'transparent'}}>12/34</p>
                    <div className='visa'>
                        <h1 style={{fontStyle:'italic', fontSize:'26px', color:'white', fontFamily: 'PT Sans, san-serif', margin:' 0 30px 0 0', background:'transparent'}}>VISA</h1>
                    </div>
                </div>

            </div>
            <div className="third">
                <h1>Добавить карту</h1>
                <p>Добавьте свою карту, чтобы больше не тратить время на ввод данных вручну</p>
                <button style={{marginTop:'80px'}}>Добавить карту</button>
                <p>Для проверки карты будет снята минимальная сумма в размере 1$.  Сумма будет <br/>возвращена вам а течении 48 часов</p>
            </div>
        </div>
    );
};

export default Payment;