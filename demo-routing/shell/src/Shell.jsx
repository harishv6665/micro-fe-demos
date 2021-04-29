import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store";
import {Counter} from "./counter/Counter";

const Home = React.lazy(() => import('home/Home'));
const Button = React.lazy(() => import('home/Button'));
const Contact = React.lazy(() => import('contact/Contact'));

const Shell = () => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <h1>Welcome to micro frontends</h1>
                    <h1>Page: Shell</h1>
                    <p>Below button is rendered from Home app inside shell page</p>
                    <div>
                        <React.Suspense fallback={"Loading"}>
                            <Button title="Button title passed from shell page" />
                        </React.Suspense>
                    </div>
                    <br/>
                    <p>Redux store in shell page</p>
                    <Counter />
                    <h3>Navigate to pages</h3>
                    <nav>
                        <Link to="/home">Home</Link><br/>
                        <Link to="/contact">Contact</Link>
                    </nav>
                    <div style={{border: "1px solid #ccc"}}>
                        <React.Suspense fallback={"Loading"}>
                            <Switch>
                                <Route path="/home">
                                    <Home />
                                </Route>
                                <Route path="/contact">
                                    <Contact />
                                </Route>
                            </Switch>
                        </React.Suspense>
                    </div>
                </div>
            </Router>
        </Provider>
    );
}

export default Shell;