import React, { Component, useState } from 'react';

import Lottie from 'react-lottie'
import animationData from '../lotties/16778-cat2.json';
import personalData from '../../assets/personalData.svg';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

import { withStyles } from '@material-ui/styles';


import axios from 'axios'

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'


import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const styles = theme => ({
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
    },
    root: {
        maxWidth: 345,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },    
})



class UserSetup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [],
            isLoading: true,
            errors: null,
            expanded: null,
            user_id: null,
            anchorEl: null,
        }            
    }

    componentWillMount() {
        axios
        // The API we're requesting data from
        .get("https://randomuser.me/api/?results=5")
        // Once we get a response, we'll map the API endpoints to our props
        .then(res => {
            const results = res.data.results;
            this.setState({ 
                users: results,
                isLoading:  false 
            });

        }
          )        
        
        // We can still use the `.catch()` method since axios is promise-based
        .catch(error => this.setState({ error, isLoading: false }));
            
    }

    handleExpandClick = (e) => {
        console.log("HandleExpand Clicked....",e);
        this.setState({
            expanded: !this.state.expanded,

            [e]: !this.state[e], 

            anchorEl: true
            
        });        
      };
    
    handleClick = (event) => { // 引数追加
        this.setState({ 
            open: true, 
            anchorEl: event.currentTarget,
            expanded: !this.state.expanded,
         });
        
    };

    handleClose = () => {
        this.setState({ 
            anchorEl: null }); 
    };        

    render () {


        const users = this.state.users;
        const isLoading = this.state.isLoading;
        const expanded = this.state.expanded;
        const anchorEl = this.state.anchorEl;

        const { classes } = this.props;

        console.log("UserSetup users", users)

        return (
            <div>

                <Typography variant="h2">UserSetup</Typography>
                <hr />
                {  !isLoading ?  ( 
                    users.map( user => { 
                        return (
                            <div key={user.email}>
                            <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    {user.name.first}
                                </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title={user.name.title}
                                subheader="September 14, 2016"
                            />
                            <CardMedia
                                className={classes.media}
                                image={user.picture.large}
                                title={user.name.title}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                {user.name.first} {user.name.last} <br />
                                {user.email}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                <ShareIcon />
                                </IconButton>
                                <IconButton
                                   
                                    aria-haspopup="true"
                                    aria-owns={anchorEl ? "simple-menu" : null}
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={ this.handleClick }
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                    >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                                
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Edit</MenuItem>
                                    <MenuItem onClick={this.handleClose}>Delete</MenuItem>
                                    <MenuItem onClick={this.handleClose}>Share</MenuItem>
                                </Menu>
                            </Card> 
                            </div>                       )
                    })
                ) : (
                    <div>
                        data loading.....
                    </div>
                ) }


            </div>
        )
        }

}


export default withStyles(styles)( UserSetup );