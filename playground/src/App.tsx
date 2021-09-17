import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, SecondExample } from './Pages';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/second-example">
                <SecondExample />
            </Route>
        </Switch>
    </BrowserRouter>
);

export default App;
