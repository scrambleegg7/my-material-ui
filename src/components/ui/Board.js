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



class Board extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: [],
            isLoading: true,
            errors: null,
            expanded: null,
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

    handleExpandClick = () => {
        this.setState({
            expanded: !this.state.expanded
        });
      };
    
    

    render () {


        const users = this.state.users;
        const isLoading = this.state.isLoading;
        const expanded = this.state.expanded;

        const { classes } = this.props;

        return (
            <div>

                <Typography variant="h2">Board</Typography>
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
                                className={clsx(classes.expand, {
                                  [classes.expandOpen]: expanded,
                                })}
                                onClick={this.handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                              >
                                <ExpandMoreIcon />
                              </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                            </Collapse>
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


export default withStyles(styles)( Board );