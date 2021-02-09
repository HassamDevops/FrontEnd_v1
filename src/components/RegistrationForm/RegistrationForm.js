import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RadioGroup from '@material-ui/core/RadioGroup';
import BuyerFormClass from './BuyerForm';
//import VendorFormClass from './VendorForm';
import IndividualFormClass from './IndividualForm';
import ValidationService from "./../../services/ValidationService.js";
import RegistrationService from "./../../services/RegistrationService.js";

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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#009688',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#33ab9f',
    '&:hover': {
      backgroundColor: '#009688',
    },
  },
  radioBox:{
    marginLeft : theme.spacing(11)
  },
   formControl: {
    minWidth: 413,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

class RegistrationFormClass extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      loggedIn: false,
      currentState: "not-panic",
      //someInitialValue: this.props.initialValue,
      input: {
        userType : "buyer"
      },
      errors: {},
      showBuyerFields : true,
      showIndividualFields : false
    }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleRadioChange = this.handleRadioChange.bind(this);   
   this.onChangeHandler=this.onChangeHandler.bind(this)
  }

  handleRadioChange(event){
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
    console.log('val targetname',val.target.name)
    console.log('val targetname',val.target.value)
    input[val.target.name] = val.target.value;
    errors[val.target.name] = "";
    this.setState({input:input , errors : errors}); 

  };
  onChangeHandler=event=>{
    alert('new test')
    let input=this.state.input
    console.log(event.target.files[0])
    console.log('event name: ',event.target.name )
    console.log('file type: ',typeof event.target.files[0])
    console.log('type ',typeof event.target.value)
    input[event.target.name]=event.target.files[0]
    console.log('input[event name]: ',input[event.target.name],'is this')

    this.setState({
      input:input
    })

}
  handleSubmit(event) {
    alert('test');
    event.preventDefault();  
    let input = this.state.input;
    console.log(input);
    let {isValid , errors} = ValidationService.validateRegisterForm(input);
    this.setState({errors : errors}); 
    if(isValid){
      alert("isValid");
        //once data is validate then save user into db
        RegistrationService.submitRegisterForm(input, function(response) {
          console.log('response' , response);
          if(response.status === 200 && response.statusText === "OK"){
            alert("Registered Successfully!!")
            window.location="/login"
          }else{
            alert("Something wrong");
          }
        });
    }else{
      alert('notvalid');
    }
  }
  
  render() {
    const classes = this.props.classes;    
    const showBuyerFields = this.state.showBuyerFields;
    const showIndividualFields = this.state.showIndividualFields;

    return(
       <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
         
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={12} className={classes.radioBox}>
              <RadioGroup row aria-label="position" name="position" defaultValue="buyer">
                <FormControlLabel
                  id="buyerType"
                  name="userType"
                  value="buyer"
                  control={<Radio color="primary" />}
                  label="Company"
                  labelPlacement="top"
                  onChange={this.handleRadioChange}
                />
                <FormControlLabel
                  id="individualType"
                  name="userType"
                  value="individual"
                  control={<Radio color="primary" />}
                  label="Individual"
                  labelPlacement="top"
                  onChange={this.handleRadioChange}
                />
              </RadioGroup>
            </Grid>
          </Grid>
           <Grid container spacing={2}>

              {showBuyerFields ? ( 
                <BuyerFormClass handleChange={this.handleChange} onChangeHandler={this.onChangeHandler} errors={this.state.errors} classes={classes}/>
              ) : ( "" )}

              {showIndividualFields ? ( 
                <IndividualFormClass handleChange={this.handleChange} errors={this.state.errors}/>
              ) : ( "" )}
            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
    )
  }
}


export default () => {
    const classes = useStyles();
    return (
        <RegistrationFormClass classes={classes}/>
    )
}