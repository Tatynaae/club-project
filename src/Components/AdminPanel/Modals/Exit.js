import React from 'react';
import {useNavigate} from "react-router-dom";

const Exit = ({modal, fn, setProfile}) => {
const navigate = useNavigate()


    return (
        <div className='exit-modal' id={modal==='mod' ? 'view' : 'view-d'}>
            <h3>
                Действительно хотите
                <br/>выйти или нет?
            </h3>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'10px'}}>
                <button onClick={() => {
                    navigate('/')
                    setProfile(false)
                }}>Да</button>
                <button onClick={fn}>Нет</button>
            </div>
        </div>
    );
};

export default Exit;