import React from "react";
import { render } from "react-dom";
import {Provider} from 'react-redux';
import configureStore from "../store/store";

import App from "./app";

//import * as serviceWorker from './serviceWorker';
const store=configureStore();
const rootElement = document.getElementById("root");

render(
    <React.StrictMode>
        <Provider store={store} />
    </React.StrictMode>
,rootElement);
