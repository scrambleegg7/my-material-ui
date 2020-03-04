import React, { Component, useState } from 'react';

import Lottie from 'react-lottie'
import animationData from '../lotties/16778-cat2.json';
import Typography from '@material-ui/core/Typography';
i
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles( theme => ({
    button: {
        ...theme.typography.estimate,
        display: 'inline-block',
        margin: '10px auto',
        marginRight: '10px',
        border: 'none',
        color: 'white',
        backgroundColor: theme.palette.common.orange,
        borderRadius: '50',
        fontSize: '15px',
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    },
    myTextContainer: {
        minWidth: "21.5em",
        minWidth: "   "
    },
    animation: {
        
    }
}));
   
const Home = () => {

    const classes = useStyles();

    const [Stopped, setStopped] = useState(false);
    const [Paused, setPaused] = useState(false);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet'
        }
    };
  
    return(
        <div>
            <Grid container direction="column" className={classes.mainContainer}>
                <Grid item>
                    <Grid container direction="row" justify="flex-end" alignContent="center">
                         <Grid sm item>
                             <Typography variant="h2" align="center">
                             Cat technology ltd.<br/>
                             MidWest 
                             </Typography>
                         </Grid>
                         <Grid sm item className={classes.animation}>
                            <Lottie options={defaultOptions}
                                height={800}
                                width={800}
                                 isStopped={Stopped}
                                isPaused={Paused}
                            />
                            <Grid container justify="center">
                                <Grid item>
                                    <Button variant="contained" color="secondary" className={classes.button} onClick={ () => {setStopped(true)}}   >Stop</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="secondary" className={classes.button} onClick={ () => {setStopped(false)}}   >Play</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="secondary" className={classes.button} onClick={ () => {setPaused( !Paused )} }  > Puase    </Button>
                                </Grid>
                            </Grid>
                         </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )

}

export default Home;