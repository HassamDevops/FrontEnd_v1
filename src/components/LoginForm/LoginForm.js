import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ValidationService from "./../../services/ValidationService.js";
import LoginService from "./../../services/LoginService.js";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#33ab9f',
    '&:hover': {
      backgroundColor:'#009688',
    },
  },
}));

class LoginFormClass extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    // Set the state directly. Use props if necessary.
    this.state = {
      loggedIn: false,
      currentState: "not-panic",
      // Note: think carefully before initializing
      // state based on props!
      someInitialValue: this.props.initialValue,
      input: {},
      errors: {}
    }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let input = this.state.input;
    let errors = this.state.errors;
    input[event.target.name] = event.target.value;
    errors[event.target.name] = "";
    this.setState({input:input , errors : errors}); 
  }
  
  handleSubmit(event) {
    event.preventDefault();  
    let input = this.state.input;
    let {isValid , errors} = ValidationService.validateLoginForm(input);
    this.setState({errors : errors}); 
    if(isValid){
        //once data is validate then submit login
        LoginService.submitLoginForm(input, function(response) {
          console.log('response is this: ' , response);
          if(response.status === 200 && response.statusText === "OK"){
           // alert("Login Successfully!!")
            console.log('response role', response.data.role)

            console.log('after successful login')
            if(response.data.role==='buyer')
            {
              window.location="/home"
          }
          if(response.data.role==='vendor')
          {
            window.location="/venhome"
        } 
        if(response.data.role==='individual')
        {
          window.location="/indhome"
      } 
          }else{
            alert("Something wrong");
          }
        });
    }
  }

  render() {
    const classes = this.props.classes;
    return(
      <Container component="main" maxWidth="xs">
       <CssBaseline />
       <div className={classes.paper}>
         <Avatar className={classes.avatar}>
           <LockOutlinedIcon />
         </Avatar>
         <Typography component="h1" variant="h5">
           Sign in here
         </Typography>
         <form className={classes.form} onSubmit={this.handleSubmit}>
           <TextField
             variant="outlined"
             margin="normal"
             fullWidth
             id="email"
             label="Username or Email Address"
             name="email"
             autoComplete="email"
             autoFocus
             error={this.state.errors.email}
             helperText = {this.state.errors.email}
             onChange={this.handleChange}
           />
           <TextField
             variant="outlined"
             margin="normal"
             fullWidth
             name="password"
             label="Password"
             type="password"
             id="password"
             autoComplete="current-password"
             error={this.state.errors.password}
             helperText = {this.state.errors.password}
             onChange={this.handleChange}
           />
           <FormControlLabel
             control={<Checkbox value="remember" color="primary" />}
             label="Remember me"
           />
           <Button
             type="submit"
             fullWidth
             variant="contained"
             color="primary"
             className={classes.submit}
           >
             Sign In
           </Button>
           <Grid container>
             <Grid item xs>
               <Link href="/forgotpassword" variant="body2">
                 Forgot password?
               </Link>
             </Grid>
             <Grid item>
               <Link href="/register" variant="body2">
                 {"Don't have an account? Sign Up"}
               </Link>
             </Grid>
           </Grid>
         </form>
       </div>
       <Box mt={8}>
         <Copyright />
       </Box>
     </Container>
    )
  }
}

export default () => {
    const classes = useStyles();
    return (
        <LoginFormClass classes={classes}/>
    )
}
