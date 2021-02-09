import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: purple[500],
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//     backgroundColor: purple[500],
//     '&:hover': {
//       backgroundColor: purple[700],
//     },
//   },
// }));

class IndividualFormClass extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    // Set the state directly. Use props if necessary.
    this.state = {
      loggedIn: false,
      currentState: "not-panic",
      someInitialValue: this.props.initialValue,
      input: {},
      errors: {}
    }
  }

  render() {
    //const classes = this.props.classes;
    const handleChange = this.props.handleChange;
    const errors = this.props.errors;
    return(
      <Grid container spacing={2}>
                
                 <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    variant="outlined"
                    fullWidth
                    id="firstName"
                    label="First Name test"
                    name="firstName"
                    autoComplete="fName"
                    error={errors.firstName}
                    helperText = {errors.firstName}
                    onChange={handleChange}
                  />
                </Grid>

                 <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lName"
                    error={errors.lastName}
                    helperText = {errors.lastName}
                    onChange={handleChange}
                  />
                </Grid>
              
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={errors.email}
                    helperText = {errors.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="phone"
                    label="Phone Number"
                    name="phone"
                    autoComplete="phone"
                    error={errors.phone}
                    helperText = {errors.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="uname"
                    name="username"
                    variant="outlined"
                    fullWidth
                    id="username"
                    label="Username"
                    error={errors.username}
                    helperText = {errors.username}
                    onChange={handleChange}                
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete="pass"
                    error={errors.password}
                    helperText = {errors.password}
                    onChange={handleChange}
                  />
                </Grid>
              
              </Grid>
    )
  }
}

export default (props) => {
    //const classes = useStyles();
    return (
        <IndividualFormClass handleChange={props.handleChange} errors={props.errors}/>
    )
}
