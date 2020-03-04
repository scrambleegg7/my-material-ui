import React, { Component, useState } from 'react';

import {makeStyles} from '@material-ui/core/styles';
import footerWave from '../../assets/footerWave.svg';
import Squirrel from '../../assets/Squirrel.svg'

import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import {Link} from 'react-router-dom';

import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';


const useStyles = makeStyles( theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%"
    },
    wave: {
        verticalAlign:"bottom",
        width:"10em",
        marginLeft: "10%",
        [theme.breakpoints.down("md")]: {
            width:"21em",
        },
        [theme.breakpoints.down("xs")]: {
            width:"5em"
        }
    },
    mainContainer: {
         position: "absolute"
    },
    link: {
        color: "white",
        fontFamily: "Arial",
        fontSize: "0.75em",
        fontWeight: "bold",
        textDecoration: "none",
    },
    gridItem: {
        margin: "3em",
        marginTop: "0.5em"
    },
    iconStyle: {
        height: "3em",
        width: "3em",
        [theme.breakpoints.down("xs")]: {
            height: "2.5em",
            width: "2.5em"
        }
    },
    socialContainer: {
        position: "absolute",
        marginTop: "-4em",
        marginLeft: "10%",
        right: "1.1em",
        [theme.breakpoints.down("xs")]: {
            right: "0.5em",
        }

    }
}))



const Footer = (props) => {
    const classes = useStyles();



    return (
        <footer className={classes.footer}>
            {/* for mobile app.  */}
            <Hidden mdDown>
            <Grid container justify="center" className={classes.mainContainer}>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} onClick={ () => props.setValue(0)} to="/" className={classes.link}>
                            home
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} onClick={ () => props.setValue(1)} to="/usersetup" className={classes.link}>
                            Usersetup
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} onClick={ () => {props.setValue(2); props.setSelectedIndex(0) }    } to="/board" className={classes.link}>
                            board
                        </Grid>
                        <Grid item component={Link} onClick={ () => {props.setValue(2); props.setSelectedIndex(1) } } to="/create" className={classes.link}>
                            Create Board
                        </Grid>
                        <Grid item component={Link} onClick={ () => {props.setValue(2); props.setSelectedIndex(2)} }  to="/delete" className={classes.link}>
                            delete Board
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} onClick={ () => props.setValue(3)} to="/aboutus" className={classes.link}>
                            About US
                        </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
            </Hidden>
            <img src={Squirrel} className={classes.wave}/>
            <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
                <Grid item component={"a"} href="http://www.facebook.com" useRef="noopener noreferrer" target="_blank">
                    <img alt="facebook" src={facebook} className={classes.iconStyle} />
                </Grid>
                <Grid item component={"a"} href="http://www.twitter.com"  useRef="noopener noreferrer" target="_blank">
                    <img alt="twitter" src={twitter} className={classes.iconStyle} />
                </Grid>
                <Grid item component={"a"} href="http://www.instagram.com"  useRef="noopener noreferrer" target="_blank">
                    <img alt="instagram" src={instagram} className={classes.iconStyle} />
                </Grid>
            </Grid>

        </footer>
    )
}

export default Footer;