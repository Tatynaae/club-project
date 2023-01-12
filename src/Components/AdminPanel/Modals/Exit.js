import React from 'react';

const Exit = ({modal, fn}) => {



    return (
        <div className='exit-modal' id={modal==='mod' ? 'view' : 'view-d'}>
            <h3>
                Действительно хотите
                <br/>выйти или нет?
            </h3>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', marginTop:'10px'}}>
                <button>Да</button>
                <button onClick={fn}>Нет</button>
            </div>
        </div>
    );
};

export default Exit;