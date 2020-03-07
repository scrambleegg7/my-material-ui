import React, { Component, useState } from 'react';

import Lottie from 'react-lottie'
import animationData from '../lotties/16778-cat2.json';
import personalData from '../../assets/personalData.svg';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';

import axios from 'axios'

const useStyles = makeStyles( theme => ({
    mainContainer: {
        marginTop: "4em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em"
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "2em"
        }
    }, 
    icon: {
        padding: 0,        
        minWidth: "10em",
        marginTop: "5em",
        marginLeft: "10%",
        height: "50",
        width: "50",
    }   
}))


class Board extends Component {

    constructor(props) {
        super(props)

            
    }

    componentWillMount() {
        
    }

    render () {
        const classes=useStyles();
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

    return (
        <div>
            {Paused}
        </div>
    )
    }

}


export default Board;