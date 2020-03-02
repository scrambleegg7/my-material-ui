import React, { Component } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Header from './ui/Header';
import Footer from './ui/Footer';
import theme from './ui/Theme';

import {BrowserRouter, Route, Switch} from 'react-router-dom';


const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header />
                
                <Switch>
                    <Route exact path="/" component={ () => <div>home</div> } />
                    <Route exact path="/usersetup" component={ () => <div>UserSetup</div> } />
                    <Route exact path="/board" component={ () => <div>board</div> } />
                    <Route exact path="/aboutus" component={ () => <div>aboutus</div> } />   
                    <Route exact path="/create" component={ () => <div>create board</div> } />   
                                     
                </Switch>

                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    )

}


export default App;
