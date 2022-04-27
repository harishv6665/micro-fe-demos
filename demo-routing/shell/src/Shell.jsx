import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// const Home = React.lazy(() => import('home/Home'));
// const Button = React.lazy(() => import('home/Button'));
// const Contact = React.lazy(() => import('contact/Contact'));
import {Ribbon} from 'sharedComponents/Ribbon';
import {Loading} from 'sharedComponents/Loading';

const Shell = () => {
    return (
        <Router>
            <div>

                <Loading />
                <Ribbon appearance="TEST" value="TEST" />
                <h1>Welcome to micro frontends</h1>
                <h1>Page: Shell</h1>
                <p>Below button is rendered from Home app inside shell page</p>
                {/*<div>*/}
                {/*    <React.Suspense fallback={"Loading"}>*/}
                {/*        <Button title="Button title passed from shell page --fasdfas " />*/}
                {/*    </React.Suspense>*/}
                {/*</div>*/}
                {/*<h3>Navigate to pages</h3>*/}
                {/*<nav>*/}
                {/*    <Link to="/home">Home</Link><br/>*/}
                {/*    <Link to="/contact">Contact</Link>*/}
                {/*</nav>*/}
                {/*<div style={{border: "1px solid #ccc"}}>*/}
                {/*    <React.Suspense fallback={"Loading"}>*/}
                {/*        <Switch>*/}
                {/*            <Route path="/home">*/}
                {/*                <Home />*/}
                {/*            </Route>*/}
                {/*            <Route path="/contact">*/}
                {/*                <Contact />*/}
                {/*            </Route>*/}
                {/*        </Switch>*/}
                {/*    </React.Suspense>*/}
                {/*</div>*/}
            </div>
        </Router>
    );
}

export default Shell;