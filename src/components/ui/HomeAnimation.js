import React, { Component, useState } from 'react';

import Lottie from 'react-lottie'
import animationData from '../lotties/16778-cat2.json';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( theme => ({
    button: {
        ...theme.typography.estimate,
        display: 'inline-block',
        margin: '10px auto',
        marginRight: '10px',
        border: 'none',
        color: 'white',
        backgroundColor: '#647DFF',
        borderRadius: '2px',
        fontSize: '15px'
  
  

        },
    })
)

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
            <Lottie options={defaultOptions}
                    height={800}
                    width={800}
                    isStopped={Stopped}
                    isPaused={Paused}
            />
            <Button variant="contained" color="secondary" className={classes.button} onClick={ () => {setStopped(true)}}   >Stop</Button>
            <Button variant="contained" color="secondary" className={classes.button} onClick={ () => {setStopped(false)}}   >Play</Button>
            <Button variant="contained" color="secondary" className={classes.button} onClick={ () => {setPaused( !Paused )} }  > Puase    </Button>

        </div>
    )

}

export default Home;