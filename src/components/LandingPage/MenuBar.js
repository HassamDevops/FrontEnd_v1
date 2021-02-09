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
import sanad from '../LandingPage/sanad.png'
import Grid from '@material-ui/core/Grid';
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
    this.handleClick= this.handleClick.bind(this);

  }
handleClick=(event)=>{

  let role= document.cookie//.jwt
		// Get all the cookies pairs in an array
		let cookiearray = role.split(';');
		// Now take key value pair out of this array
		let name=null
		let value = null
		for(var i=1; i<cookiearray.length; i++) {
			name = cookiearray[i].split('=')[0];
			value = cookiearray[i].split('=')[1];
console.log("Key is : " + name + " and Value is : " + value);
		 }
    console.log('Role is ',value)
    for(var i=1; i<cookiearray.length; i++) {
      value = cookiearray[i].split('=')[1];
    }
    document.cookie="role=vendor"
    alert('role:',value)
    console.log('new Role is ',value)
    if(value ==='vendor')
    {
    console.log('inside if')
      window.location="/venhome"
    }
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
    document.cookie = "jwt= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie = "role= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
  window.location='/'
  };

  render() {
    const classes = this.props.classes;
    const isLogin = this.props.isLogin;
    const anchorEl = this.state.anchorEl;
   // const open = Boolean(this.state.anchorEl);

    return(
        <AppBar position="sticky" elevation={0} className={classes.appBar} style={{backgroundColor:'white'}}>
            <Toolbar className={classes.toolbar}>
            {/* <Typography variant="h6" color="inherit" >
                Company name
              </Typography> */}
              <img src={sanad} width="70" height="50"  />
              <nav className="nav">
                  <ul className="nav__menu">
                      <li className="nav__menu-item">
                          <a href="/" className="hrefMenuParent">
                             <Typography className={classes.headings} style={{color:"black"}}> 
                                 Vendor List
                                 </Typography>
                          </a>
                      </li>
                      <li className="nav__menu-item">
                            <a className="hrefMenuParent" href="/"><Typography className={classes.headings} style={{color:"black"}}>
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
                        <Button href="/login" color="#00352c" variant="outlined" className={classes.link}>
                  Login
                </Button>
                <Button href="/register" color="#00352c" variant="outlined" className={classes.link}>
                  Signup
                </Button>
                    </div>
                    ) : ( 

                    <div>
                        <Button onClick={this.handleClick}  color="#00352c" variant="outlined" className={classes.link}>
                  Vendor Switch
                </Button>
                    {/* <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <MailIcon />
                    </Badge>
                  </IconButton>
                  <IconButton aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton> */}

                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    color="#00352c"
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
                   <Grid item xs={12} sm={12} >
      <div style={{ display: 'flex', justifyContent: "flex-start", height: '5px' }}>
                    <div  style={{ minHeight: '5px',width: "2000px",
        margin: "0px",
        border: "0px",
        backgroundColor: 'black' }}>
                      </div>
                      </div>
      </Grid>
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
