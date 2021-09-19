import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Box, createTheme, CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import { Home, CustomExample } from 'pages';
import { Routes } from 'routes';
import { GitHubBtn } from 'components';

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
                <Box textAlign="center" mt={3}>
                    <GitHubBtn />
                </Box>
                <Switch>
                    <Route path={Routes.custom}>
                        <CustomExample />
                    </Route>
                    <Route path={Routes.home}>
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    </StylesProvider>
);

export default App;
