import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {teal} from '@material-ui/core/colors'
import { grey } from '@material-ui/core/colors';
import 'react-multi-carousel/lib/styles.css';
import TileViewClass from './TileView';
import MenuBarClass from './MenuBar';
import SearchBarClass from './SearchBar';
import Paper from '@material-ui/core/Paper';


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
//changes color of logo

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
    backgroundColor: teal[500],
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
    backgroundColor: grey[200],//grey[200],
     padding: theme.spacing(3),
  },
  carouselItem:{
    backgroundColor: teal[300],
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

class IndHomePageClass extends React.Component {
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
      isLogin : true
    }
  }

/*  handleRadioChange(event){
    let radioValue = event.target.value;
    let input = this.state.input;
    input[event.target.name] = event.target.value;
    //console.log("event.target.name::" , event.target.name);
    this.setState({input:input}); 
    if(radioValue === "buyer"){
      this.setState({ showIndividualFields : false}); 
      this.setState({ showBuyerFields : true});
    }else{
      this.setState({ showBuyerFields : false}); 
      this.setState({ showIndividualFields : true}); 
    }
  }

  handleChange = val => {
    let input = this.state.input;
    let errors = this.state.errors;
    input[val.target.name] = val.target.value;
    errors[val.target.name] = "";
    this.setState({input:input , errors : errors}); 

  };

  handleSubmit(event) {
    event.preventDefault();  
    let input = this.state.input;
    let {isValid , errors} = ValidationService.validateRegisterForm(input);
    this.setState({errors : errors}); 
    if(isValid){
        //once data is validate then save user into db
        RegistrationService.submitRegisterForm(input, function(response) {
          console.log('response' , response);
          if(response.status == 200 && response.statusText == "OK"){
            alert("Registered Successfully!!")
          }else{
            alert("Something wrong");
          }
        });
    }
  }*/
  
  render() {
    const classes = this.props.classes;    
    return(
    <React.Fragment>
      <CssBaseline />
      <MenuBarClass classes={classes} isLogin={this.state.isLogin}/>  

      {/* Hero unit */}
      
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
          Find the perfect services
        </Typography>
         <SearchBarClass classes={classes}/>
      </Container>

      {/* End hero unit  */}


      <Grid container spacing={3} className={classes.buttonContainer}>
       <Grid item xs={12} sm={2}>
        <Button href="/post-project" variant="contained" color="primary">
          Post Project
        </Button>
       </Grid>
       <Grid item xs={12} sm={2}>
        <Button href="/project-list" variant="contained" color="primary">
          List Project
        </Button>
       </Grid>
      </Grid>

      <Paper className={classes.paper}>
       <div className={classes.box}>
                    <Typography className={classes.mar}   component="h5" variant="h5" align="left" color="secondary" gutterBottom>
                        Posted Projects
                    </Typography>
                        </div>
      
      <TileViewClass classes={classes}/>
      </Paper>  
      {/* End hero unit */}
     {/* Footer */}
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


export default () => {
    const classes = useStyles();
    return (
        <IndHomePageClass classes={classes}/>
    )
}