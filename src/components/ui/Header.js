import React, {useState, useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Button from '@material-ui/core/Button';

//import logo from '../../assets/logo.svg'
import cheater_logo from '../../assets/earth.svg';

import {Link} from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles( theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [ theme.breakpoints.down('md') ]: {
            marginBottom: '2em',
        },
        [ theme.breakpoints.down('xs') ]: {
            marginBottom: '1.5em',
        }   


    },
    logo: {
        height: '8em',
        [ theme.breakpoints.down('md') ]: {
            height: '7em',
        },
        [ theme.breakpoints.down('xs') ]: {
            height: '5.5em',
        }   

    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: 'auto'
    }, 
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
    },
    button: {
        ...theme.typography.estimate,
        height: "45px",
        color: "white",
        borderRadius: "50px",
        marginLeft: "25px",

    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white", 
        borderRadius : "0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity:1
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.blue,
    },
    drawerItem: {
      ...theme.typography.tab,
      color: "white",
      opacity: 0.7,
    },
    drawerIcon: {
        height: '50px',
        width: '50px'
    },
    drawerIconContainer: {
        marginLeft: "auto",

        "&:hover": {
            backgroundColor: "transparent",
        }
    }, 
    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1,
        }
    },
    appBar: {
        zIndex: theme.zIndex.modal + 1
    }
})
)

const Header = (props) => {

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const [anchorEl, setAnchorEl] = useState(null);
    const [ openMenu, setOpenMenu ] = useState(false);

    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [openDrawer, setOpenDrawer] = useState(false);


    const handleChange = (e, value) => {
        props.setValue(value);
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpenMenu(true)
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(i);
    }

    const handleClose = (e) => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    const menuOptions = [ 
        {name:"board", link: "/board" , activeIndex: 2, selectedIndex: 0} , 
        {name:"create board", link: "/create",  activeIndex: 2, selectedIndex: 1 }, 
        {name:"delete board", link: "/delete", activeIndex: 2, selectedIndex: 2} ]

    const routes = [{name:"Home", link:"/", activeIndex: 0 }, 
                    {name:"UserSetup", link:"/usersetup", activeIndex: 1 },
                    {name:"Board", link:"/board" , activeIndex: 2, ariaOwns: anchorEl ? "simple-menu" : undefined, ariaPopup: anchorEl ? "true" : undefined, 
                            mouseOver: e => handleClick(e)  },
                    {name:"About Us", link:"/aboutus" , activeIndex: 3 } ]

    useEffect ( () => {

        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex)
                        if ( route.selectedIndex && route.selectedIndex !== props.selectedIndex ) {
                            props.setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                default:
                    break;
            }
            })

        console.log("useEffect:", window.location.pathname )

    }, [props.value, menuOptions, props.selectedIndex, routes, props ] )

    const tabs = (
        <React.Fragment>
                        <Tabs indicatorColor="primary" value={props.value}  onChange={handleChange}  className={ classes.tabContainer}>

                            {routes.map( (route, index)  => (
                                <Tab key={`${route}${index}`} aria-owns = {route.ariaOwns }
                                 aria-haspopup = {route.ariaPopup}
                                 onMouseOver={ route.mouseOver} 
                                className={classes.tab} component={Link} to={route.link} label={route.name} />
                            ) ) }

                        </Tabs>

                        <Button variant="contained" color="secondary" className={classes.button}>
                            LOGOUT
                        </Button>
                        <Menu id="simple-menu" 
                                anchorEl={anchorEl} open={openMenu} 
                                onClose={handleClose} MenuListProps={ {onMouseLeave: handleClose} } 
                                classes={{paper: classes.menu} } elevation={0} keepMounted 
                                style={{zIndex:1302}}>

                            {menuOptions.map( (option, i) => (
                                    <MenuItem key={`${option}${i}`} component={Link} to={option.link} classes={ {root:classes.menuItem} } 
                                    onClick = { (e) => 
                                        {handleMenuItemClick(e, i); 
                                            props.setValue(2); 
                                        handleClose(); 
                                        console.log("option of menuitem ",option, props.value, i)
                                    }} 
                                    selected = { i === props.selectedIndex } >{option.name} 
                                    </MenuItem>
                                )
                            )}

                        </Menu>

        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} 
                open={openDrawer} onClose={() => setOpenDrawer(false)} 
                onOpen = {() => setOpenDrawer(true)} classes={{paper:classes.drawer}}   >
                <div className={classes.toolbarMargin} />
                <List disablePadding>
                    {routes.map(((route,index)=> (
                        <ListItem key={`${route}${index}`} onClick={ () => {setOpenDrawer(false); props.setValue(route.activeIndex);} } 
                            divider button component={Link}
                            to={route.link} selected={props.value===route.activeIndex} 
                            classes={ {selected: classes.drawerItemSelected}}   >
                            <ListItemText disableTypography 
                                    className={classes.drawerItem}>{route.name}</ListItemText>
                        </ListItem>    
                    ) ))}
                </List>
            </SwipeableDrawer>
            <IconButton onClick={ () => setOpenDrawer(!openDrawer)} disableRipple className={classes.drawerIconContainer}  >
                <MenuIcon className={classes.drawerIcon}>   

                </MenuIcon>
            </IconButton>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary" className={classes.appBar}>
                    <Toolbar disableGutters>
                        <Button component={Link} to="/"  className={classes.logoContainer} onClick={ () => props.setValue(0)  }   >
                            <img src={cheater_logo} alt="company logo"   className={classes.logo} />  
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}


export default Header;