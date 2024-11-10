import React from "react";
import { combineReducers, legacy_createStore } from "redux";
import { cartReducer } from "./redux/reducer/cartReducer";
import { studentReducer } from "./redux/reducer/studentReducer";

const reducer = combineReducers({
    cart:cartReducer,
    student:studentReducer
})

export const store = legacy_createStore(reducer)