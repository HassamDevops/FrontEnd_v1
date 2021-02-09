import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Popover from "@material-ui/core/Popover";

//import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     borderBottom: `1px solid ${theme.palette.divider}`,
//     backgroundColor: "#dddddd"
//   }
// }));

class MenuBarClass extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    // Set the state directly. Use props if necessary.
    this.state = {
      loggedIn: false,
      currentState: "not-panic",
      someInitialValue: this.props.initialValue,
      input: {},
      errors: {},
      auth : true,
      setAuth : true,
      anchorEl : null,
      setAnchorEl : null,
      open:false,
      id:undefined
    }

    this.handleProfileMenuOpen = this.handleProfileMenuOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleMenu = this.handleMenu.bind(this);

  }

  handleProfileMenuOpen = (event) => {
    
  };

    handleProfileMenuOpen = (event) => {
    
  };

  handleChange = (event) => {
    this.setState({auth : event.target.checked});
  };

  handleMenu = (event) => {
    //this.setState({anchorEl : true});

    this.setState({      anchorEl:event.currentTarget,open:Boolean(event.currentTarget), id:"menu-appbar"

    })

  };

  handleClose = (event) => {
    this.setState({anchorEl : event.currentTarget,open:false,id: undefined});
  };

  render() {
    const classes = this.props.classes;
    const isLogin = this.props.isLogin;
    const anchorEl = this.state.anchorEl;
   // const open = Boolean(this.state.anchorEl);

    return(
          <AppBar position="sticky" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6" color="inherit" noWrap >
                Company name
              </Typography>
                <nav className="nav"style={{display:'flex',justifyContent:'center', marginLeft: '550px'}}>
                    <ul className="nav__menu">
                      
                         <li className="nav__menu-item">
                            <a className="hrefMenuParent" href="/"><Typography className={classes.headings}>
                                Vendor List
                              </Typography></a>
                            
                        </li>

                        <li className="nav__menu-item">
                            <a className="hrefMenuParent" href="/"><Typography className={classes.headings}>
                                Support
                              </Typography></a>
                            <ul className="nav__submenu">
                              <li className="nav__submenu-item ">
                                <a className="hrefMenu" href="/">IT Help Desk</a>
                              </li>
                              <li className="nav__submenu-item ">
                                <a className="hrefMenu" href="/">Vendor Assessment</a>
                              </li>
                              <li className="nav__submenu-item ">
                                <a className="hrefMenu" href="/">RFP Support</a>
                              </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                {!isLogin ? ( 
                  <div>
                 <Button href="/login" color="inherit" variant="outlined" className={classes.link}>
                  Login
                </Button>
                <Button href="/register" color="inherit" variant="outlined" className={classes.link}>
                  Signup
                </Button>
                </div>

               ) : ( 

               <div>
                  <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>

                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Popover
                      id={this.id} //"menu-appbar"
                      open={this.state.open}
                      onClose={this.handleClose}
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                      }}
                      getContentAnchorEl={null}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                      }}
                    >
                      <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                      <MenuItem onClick={this.handleClose}>My account</MenuItem>
                      <MenuItem onClick={this.handleClose}>Log out</MenuItem>
                    </Popover>

                </div>

                )}

             
            </Toolbar>
      </AppBar>
    )
  }
}

export default (props) => {
    return (
        <MenuBarClass classes={props.classes} isLogin={props.isLogin}/>
    )
}
