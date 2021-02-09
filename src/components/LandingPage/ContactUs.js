import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import MenuBarClass from './MenuBar';
import {teal,grey} from '@material-ui/core/colors'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import MessageUs from './MessageUs';


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    appBar: {
      //borderBottom: `0.5px solid ${theme.palette.divider}`,
      backgroundColor: '#009688'//purple[500]
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    }, 
    menuBar : {
      borderBottom: `1px solid ${theme.palette.divider}`,
      backgroundColor: grey[500],
      maxHeight: 45
    },
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      padding: theme.spacing(1),
      marginTop: theme.spacing(1.9),
  
    },
    searchBarBox : {
      backgroundColor: grey[200],
       padding: theme.spacing(3),
    },
    carouselItem:{
      backgroundColor: grey[300],
      padding: theme.spacing(3),
      border: `1px solid ${theme.palette.divider}`,
      minHeight: 200
    },
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },
    cardMedia: {
      width: 160,
    },
    headings :{
     marginTop: theme.spacing(1.9)
    },
    root: {
      flexGrow: 1,
    },
    gridParent:{
      padding : theme.spacing(3),
      backgroundColor: grey[200],
    },
    buttonContainer :{
      paddingLeft : theme.spacing(3),
      paddingBottom : theme.spacing(2),
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    thumb: {
      borderRadius: 5
    },
    switchBase: {
      color: teal[300],
      "&$checked": {
        color: teal[500]
      },
      "&$checked + $track": {
        backgroundColor: teal[500]
      }
    },
    mar:{
      marginTop: theme.spacing(10),
      paddingTop: theme.spacing(1),
      backgroundColor:'white'  
    },
    gcolor:{
        backgroundColor:'white'
    },
    typographyMargin:{
        paddingBottom: theme.spacing(21),
        paddingTop: theme.spacing(17),
    }
    
  }));
  const footers = [
    {
      title: 'Categories',
      description: ['Technology', 'Heathcare', 'Supply Chain','Home Utilities', 'All Categories'],
    },
    // {
    //   title: 'Features',
    //   description: ['Cool stuff', 'Random feature', 'Team feature', 'Developer stuff', 'Another one'],
    // },
    {
      title: 'Support',
      description: ['IT Help Desk', 'Vendor Assessment', 'RFP Support'],
    },
    {
      title: 'Company',
      description: ['Contact Us', 'About Us'],
    },
  ];  
export class ContactUs extends Component {

    constructor(props) {
        // Required step: always call the parent class' constructor
        super(props);
    
        // Set the state directly. Use props if necessary.
        this.state = {
          loggedIn: false,
          currentState: "not-panic",
          someInitialValue: this.props.initialValue,
          input: {
            userType : "individual"
          },
          errors: {},
          showBuyerFields : true,
          showIndividualFields : false,
          isLogin : false
        }
      }
    

    render() {
        const classes = this.props.classes;    
        return(
        <React.Fragment>
          <CssBaseline />
          <MenuBarClass classes={classes} isLogin={this.state.isLogin}/>  
    
            <Grid container spacing={3} color="secondary" className={classes.mar}>
            <Grid item xs={12} >
            <Typography component="h3" variant="h3" align="center" color="textSecondary" gutterBottom>
          GET IN TOUCH
        </Typography>
        </Grid>

            <Grid item xs={4} align="center">

        <LocationOnIcon  style={{fontSize:40,    justifyContent: 'center'}} />
        <Typography component="h5" variant="h5"  style={{fontWeight:'lighter'}} align="center" color="textPrimary" gutterBottom>
          ADDRESS
        </Typography>       
        <Typography component="body1" variant="body1" style={{fontWeight:'bold'}} align="center" color="textPrimary" gutterBottom>
          Smart Blockchain Solutions
        </Typography>
        <Grid item xs={4}>        
        <Typography component="body2" variant="body2"  align="center" color="textPrimary" gutterBottom>
          Al Yasamin St#4
        </Typography>
        </Grid>
        </Grid>
        <Grid item xs={4} align="center">
        <PhoneIcon  style={{fontSize:40,    justifyContent: 'center'}} />
        <Typography component="h5" variant="h5" style={{fontWeight:'lighter'}} align="center" color="textPrimary" gutterBottom>
          PHONE
        </Typography>
        <Grid item xs={4}>        
        <Typography component="body2" variant="body2" style={{fontWeight:'bold'}} align="center" color="textPrimary" gutterBottom>
          +96 52 656565
        </Typography>
        </Grid>

        </Grid>
        <Grid item xs={4} align="center">
                <EmailIcon style={{fontSize:40,    justifyContent: 'center'}}/>
                <Typography component="h5" variant="h5" style={{fontWeight:'lighter'}} align="center" color="textPrimary" gutterBottom>
          EMAIL
        </Typography>
        <Grid item xs={4}>        
        <Typography component="body2" variant="body2" style={{fontWeight:'bold'}} align="center" color="textPrimary" gutterBottom>
          info@smartbscorp.com
        </Typography>
        </Grid>

                </Grid>
        {/* <Paper className={classes.paper}>1</Paper> */}

                    <Grid item xs={6}>
                        <Paper elevation={5}>
                            
                            <Typography className={classes.typographyMargin} component="h5" variant="h5" style={{fontWeight:'bold'}} align="center" color="textPrimary" gutterBottom>
          MESSAGE US
        </Typography>
        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                    <Paper elevation={5}>
                        <MessageUs/>
                        </Paper>
                    </Grid>
                </Grid>

      
          
          <Container maxWidth="md" component="footer" className={classes.footer}>
            <Grid container spacing={4} justify="space-evenly">
            {footers.map((footer) => (
                <Grid item xs={6} sm={3} key={footer.title}>
                  <Typography variant="h6" color="textPrimary" gutterBottom>
                    {footer.title}
                  </Typography>
                  <ul>
                    {footer.description.map((item) => (
                      <li key={item}>
                        <Link href="#" variant="subtitle1" color="textSecondary">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Grid>
              ))}
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Container>
          {/* End footer */}
        </React.Fragment>
      
        )
    
    }
}

//export default ContactUs
export default () => {
    const classes = useStyles();
    return (
        <ContactUs classes={classes}/>
    )
}