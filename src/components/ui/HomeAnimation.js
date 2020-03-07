import React, { Component, useState } from 'react';

import Lottie from 'react-lottie'
import animationData from '../lotties/16778-cat2.json';
import personalData from '../../assets/personalData.svg';
import Typography from '@material-ui/core/Typography';

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
        marginTop: "4em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    },
    myTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0
        }
    },
    animation: {
        marginTop: "5em",
        maxWidth: "30em",
        minWidth: "21em",
        marginTop: "2em",
        marginLeft: "10%"
        
    }, 
    icon: {
        marginLeft: "2em",
        marginTop: "3em",
        maxWidth: "20em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: 0, 
        }
    }, 
    serviceContainer: {
        marginTop: "12em",
        [theme.breakpoints.down("sm")]: {
          padding: 25
        }
      },
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
                        <Grid sm item className={classes.myTextContainer}>
                             <Typography variant="h3" align="center">
                             みゆき薬局<br/>
                             板橋区, 東京
                             </Typography>
                        </Grid>
                        <Grid sm item className={classes.animation}>
                            <Lottie options={defaultOptions}
                                height={"50%"}
                                width={"50%"}
                            />
                        </Grid>
                    </Grid>


                    <Grid container direction="row">
                        <Grid item>
                            <Typography variant="h3">サービスについて</Typography>
                            <Typography variant="subtitle1">お薬手帳</Typography>
                        </Grid>
                        <Grid item>
                            <img className={classes.icon} alt="drug note icon" src={personalData} />
                        </Grid>                        
                    </Grid>
                </Grid>
            </Grid>
            

        </div>
    )

}

export default Home;