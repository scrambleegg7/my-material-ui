import React, { Component, useState } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Header from './ui/Header';
import Footer from './ui/Footer';
import theme from './ui/Theme';
import Home from './ui/HomeAnimation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';


const App = () => {

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [value, setValue] = useState(0);

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Header value={value} setValue={setValue} selectedIndex={selectedIndex} 
                setSelectedIndex={setSelectedIndex} />
                
                <Switch>
                    <Route exact path="/" component={ Home } />
                    <Route exact path="/usersetup" component={ () => <div>UserSetup</div> } />
                    <Route exact path="/board" component={ () => <div>board</div> } />
                    <Route exact path="/aboutus" component={ () => <div>aboutus</div> } />   
                    <Route exact path="/create" component={ () => <div>create board</div> } />   
                                     
                </Switch>

                <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} 
                setSelectedIndex={setSelectedIndex} />
            </BrowserRouter>
        </ThemeProvider>
    )

}


export default App;
