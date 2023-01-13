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
                                <input style={{width:'25px', height:'25px', border: "1.07692px solid #043F75", borderRadius: "1.07692px"}}  type="checkbox"/>
                                Мужской
                            </button>
                            <button className='pol--pols'>
                                <input style={{width:'25px', height:'25px', border: "1.07692px solid #043F75", borderRadius: "1.07692px"}} type="checkbox"/>
                                Женский
                            </button>
                        </div>
                    </div>

                    <div className="settings--left">

                        <div className="born" style={{margin:'30px 0 20px 0'}}>
                            <label style={{color:'#A4A4A4'}} htmlFor="userName">Дата рождения*</label>
                            <div>
                                <select style={{ border:"none" ,padding:'5px', background: 'rgba(27, 41, 89, 0.4)',borderRadius: '10px', color:'white', fontSize:'14px', margin:'5px 10px'}}>
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
                                <select style={{ border:"none" ,padding:'5px', background: 'rgba(27, 41, 89, 0.4)',borderRadius: '10px', color:'white', fontSize:'14px', margin:'5px 10px'}}>
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
                                <select style={{ border:"none" ,padding:'5px', background: 'rgba(27, 41, 89, 0.4)',borderRadius: '10px', color:'white', fontSize:'14px', margin:'5px 10px'}}>
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

                        <label style={{color:'#A4A4A4'}} htmlFor="userName">Страна*</label>
                        <select style={{
                            width: '270px',
                            height: '44px',
                            background: 'rgba(27, 41, 89, 0.4)',
                            borderRadius: '10px',
                            border:'none',
                            padding:'0 20px',
                            color:'white',
                            fontSize:'16px',
                            margin:'10px 0 10px 0'

                        }}>
                            <option>Kyrgyzstan</option>
                            <option>Russia</option>
                            <option>Kazakhstan</option>
                            <option>Turkey</option>
                        </select>

                        <label style={{color:'#A4A4A4'}} htmlFor="userName">Город*</label>
                        <select style={{
                            width: '270px',
                            height: '44px',
                            background: 'rgba(27, 41, 89, 0.4)',
                            borderRadius: '10px',
                            border:'none',
                            padding:'0 20px',
                            color:'white',
                            fontSize:'16px',
                            margin:'10px 0 10px 0'
                        }}>
                            <option>Bishkek</option>
                            <option>Moscow</option>
                            <option>As</option>
                            <option>Turkey</option>
                        </select>



                        <label style={{color:'#A4A4A4'}} htmlFor="userName">Статус*</label>
                        <select style={{
                            width: '270px',
                            height: '44px',
                            background: 'rgba(27, 41, 89, 0.4)',
                            borderRadius: '10px',
                            border:'none',
                            padding:'0 20px',
                            color:'white',
                            fontSize:'16px',
                            marginTop:'10px'
                        }}>
                            <option>Student</option>
                            <option>Teacher</option>
                            <option>Other..</option>
                        </select>
                    </div>
                </div>
            </div>
        </sectoin>
    );
};

export default DataModal;