import React from 'react';
import Home from "./Home";
const Shell = React.lazy(() => import("shell/Shell"));

const App = () => {
    return (
        <React.Suspense fallback={"Loading"}>
            {/*<Home />*/}
            <Shell />
        </React.Suspense>
    );
}

export default App;