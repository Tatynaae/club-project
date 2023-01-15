import React from 'react';

const Comments = ({modal}) => {
    return (
        <div className='comment' id={modal==='com' ? 'view' : 'view-d'}>
            <h1 className='comments'>Коментарии</h1>
            <div className='comment--yours'>

                <div className="com">
                    <h4>Урок супер</h4>
                    <button>Редактировать </button>
                    <button>Удалить</button>
                </div>
                <div className="com">
                    <h4>Было классно.Все понятно и досканально описано <br/>каждая деталь. Я вообще не желею что купила эти курсы </h4>
                    <button>Редактировать </button>
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    );
};

export default Comments;