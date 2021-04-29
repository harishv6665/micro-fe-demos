import React from 'react';
import store from "./store";
import {Provider} from "react-redux";
import {Counter} from "./counter/Counter";

const Home = () => {
    return (
        <Provider store={store}>
            <h1 style={{color: "red"}}>Page: Home</h1>
            <br/>
            <p>Redux store in shell page</p>
            <Counter />
        </Provider>
    );
}

export default Home;