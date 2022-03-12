import { createStore,combineReducers,compose,applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import profile from '../reducers/profile';

const rootReducer=combineReducers({
    user:profile
});

const configureStore=()=>{
    return createStore(
        rootReducer,
        compose(applyMiddleware(thunk))
    );
};

export default configureStore;
