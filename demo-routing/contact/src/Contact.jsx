import React from 'react';
import store from "./store";
import {Provider} from "react-redux";
import {Counter} from "./counter/Counter";

const Contact = () => {
    return (
        <Provider store={store}>
            <h1 style={{color: "blue"}}>Page: Contact</h1>
            <br/>
            <p>Redux store in shell page</p>
            <Counter />
        </Provider>
    );
}

export default Contact;