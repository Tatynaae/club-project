import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Layout from "./Components/LayOut/Layout";
import {BrowserRouter} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <React.StrictMode>
        <BrowserRouter>
            <Layout>
                <App/>
            </Layout>
        </BrowserRouter>
    </React.StrictMode>
);

