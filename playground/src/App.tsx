import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createTheme, CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import { Home, SecondExample } from 'pages';

const App = () => (
    <StylesProvider injectFirst>
        <ThemeProvider
            theme={createTheme({
                palette: {
                    primary: { main: '#5fad56', contrastText: '#fff' },
                    secondary: { main: '#f2c14e' },
                },
                typography: {
                    button: {
                        fontWeight: 700,
                        textTransform: 'none',
                    },
                },
            })}
        >
            <CssBaseline />
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
        </ThemeProvider>
    </StylesProvider>
);

export default App;
