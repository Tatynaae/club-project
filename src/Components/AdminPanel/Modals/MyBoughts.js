import React from 'react';

const My = ({modal}) => {
    return (
        <div className='my' id={modal==='buy' ? 'view' : 'view-d'}>
            <h1>Мои покупки</h1>
            <div className="my--first">
                <p>Дата</p>
                <p>Описание</p>
                <p>Цена</p>
            </div>
            <div className="my--first">
                <p className='all'>02.05.2022 г.</p>
                <p className='all'>Год</p>
                <p className='all'>545 $</p>
            </div>
            <div className="my--first">
                <p className='all'>02.05.2022 г.</p>
                <p className='all'>Год</p>
                <p className='all'>545 $</p>
            </div>
        </div>
    );
};

export default My;