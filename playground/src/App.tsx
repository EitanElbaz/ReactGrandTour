import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createTheme, CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import { ReactGrandTour } from 'react-grand-tour';
import { Home, SecondExample } from './Pages';
import AppWrapper from './AppWrapper';
import { HomeSteps } from './TourSteps';

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
            <AppWrapper>
                <BrowserRouter>
                    <Switch>
                        <Route path="/" exact>
                            <ReactGrandTour steps={HomeSteps}>
                                <Home />
                            </ReactGrandTour>
                        </Route>
                        <Route path="/second-example">
                            <SecondExample />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </AppWrapper>
        </ThemeProvider>
    </StylesProvider>
);

export default App;
