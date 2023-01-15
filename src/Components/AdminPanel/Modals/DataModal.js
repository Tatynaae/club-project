import React from 'react';

const DataModal = ({modal}) => {
    return (
        <sectoin  className="data" id={modal==='data' ? 'view' : 'view-d'}>
            <div className="data--own-modal">
                <h1>Личные данные</h1>
                <div className="settings">
                    <div className="settings--right">
                        <label style={{color:'#A4A4A4'}} htmlFor="userName">ФИО*</label>
                        <input type="text" id='userName' placeholder='Your name..'/>
                        <label style={{color:'#A4A4A4'}} htmlFor="userName">Номер телефон*</label>
                        <input type="number" placeholder='Phone number..'/>
                        <label style={{color:'#A4A4A4'}} htmlFor="userName">Email*</label>
                        <input type="email" placeholder='Email address..'/>

                        <label style={{color:'#A4A4A4'}} htmlFor="userName">Пол</label>
                        <div className="pol">

                            <button className='pol--pols'>
                                <input className='gen' type="checkbox"/>
                                Мужской
                            </button>
                            <button className='pol--pols'>
                                <input className='gen' type="checkbox"/>
                                Женский
                            </button>
                        </div>
                    </div>

                    <div className="settings--left">

                        <div className="born">
                            <label style={{color:'#A4A4A4', margin:'10px'}} htmlFor="userName">Дата рождения*</label>
                            <div className='born--all'>
                                <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                    <option>13</option>
                                    <option>14</option>
                                    <option>15</option>
                                    <option>16</option>
                                    <option>17</option>
                                    <option>17</option>
                                    <option>18</option>
                                    <option>19</option>
                                    <option>20</option>
                                    <option>21</option>
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>26</option>
                                    <option>27</option>
                                    <option>28</option>
                                    <option>29</option>
                                    <option>30</option>
                                    <option>31</option>
                                </select>
                                <select>
                                    <option>January</option>
                                    <option>February</option>
                                    <option>March</option>
                                    <option>April</option>
                                    <option>May</option>
                                    <option>June</option>
                                    <option>July</option>
                                    <option>August</option>
                                    <option>September</option>
                                    <option>October</option>
                                    <option>November</option>
                                    <option>December</option>
                                </select>
                                <select>
                                    <option>1997</option>
                                    <option>1998</option>
                                    <option>1999</option>
                                    <option>2000</option>
                                    <option>2001</option>
                                    <option>2002</option>
                                    <option>2003</option>
                                    <option>2004</option>
                                    <option>2005</option>
                                    <option>2006</option>
                                </select>

                            </div>
                        </div>

                        <div className='born--sel'>
                            <label style={{color:'#A4A4A4'}} htmlFor="userName">Страна*</label>
                            <select>
                                <option>Kyrgyzstan</option>
                                <option>Russia</option>
                                <option>Kazakhstan</option>
                                <option>Turkey</option>
                            </select>
                        </div>

                        <div className='born--sel'>
                            <label style={{color:'#A4A4A4'}} htmlFor="userName">Город*</label>
                            <select>
                                <option>Bishkek</option>
                                <option>Moscow</option>
                                <option>As</option>
                                <option>Turkey</option>
                            </select>
                        </div>

                        <div className='born--sel'>
                           <label style={{color:'#A4A4A4'}} htmlFor="userName">Статус*</label>
                           <select>
                               <option>Student</option>
                               <option>Teacher</option>
                               <option>Other..</option>
                           </select>
                       </div>
                    </div>
                </div>
            </div>
        </sectoin>
    );
};

export default DataModal;