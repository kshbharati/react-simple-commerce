import React from 'react';
import {render} from 'react-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from "./store/store";
import AdminApp from './admin/app';

import Products from './Routes/products';
import AboutUs from './Routes/about-us';
import Product from './Routes/product';

const rootElement= document.getElementById("root");

const store=configureStore();

render(
    <React.StrictMode>
        <Provider store={store} />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="products" element={<Products />}></Route>
                    <Route path="products/:productId" element={<Product />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route
                        path="*"
                        element={
                            <main>
                                <p>404 Error. Page Not Found.</p>
                            </main>
                        }
                    />
                </Route>
                <Route path="/admin" element={<AdminApp />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
