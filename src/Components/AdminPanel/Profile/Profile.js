import React from 'react';
import {HiOutlineBell} from "react-icons/hi";

const Profile = () => {
    return (
        <>
            <div id="bell">
                <div className="container">
                    <div className="bell"
                         style={{
                             display: 'flex',
                             alignItems: 'center',
                             width: '200px',
                             justifyContent: 'space-between'
                         }}>
                        <HiOutlineBell
                            style={{
                                fontSize:'28px',
                                color: 'white'
                            }}/>

                        <button style={{
                            fontWeight: '400',
                            fontSize: '16px',
                            lineHeight: '20px',
                            textAlign: 'center',
                            color: '#FFFFFF',
                            border: '2px solid #034078',
                            borderRadius: '10px',
                            background:'transparent',
                            width:'160px',
                            height:'40px'
                        }}>Profile</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Profile;