import React, { Component } from 'react';

import {makeStyles} from '@material-ui/core/styles';
import footerWave from '../../assets/footerWave.svg';
import Squirrel from '../../assets/Squirrel.svg'

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles( theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%"
    },
    wave: {
        verticalAlign:"bottom",
        width:"4em",
        [theme.breakpoints.down("md")]: {
            width:"21em",
        },
        [theme.breakpoints.down("xs")]: {
            width:"15em"
        }
    },
    mainContainer: {
         position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75em",
        fontWeight: "bold"
    }
}))



const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <Grid container justify="center" className={classes.mainContainer}>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item className={classes.link}>
                            home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid container direction="column">
                        <Grid item className={classes.link}>
                            Usersetup
                        </Grid>
                        <Grid item className={classes.link}>
                            About US
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
            <img src={Squirrel} className={classes.wave}/>
        </footer>
    )
}

export default Footer;