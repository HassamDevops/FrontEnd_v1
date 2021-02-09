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

class VendorFormClass extends React.Component {
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
                <Grid item xs={12}>
                  <TextField
                    autoComplete="cname"
                    name="vendorCompanyName"
                    variant="outlined"
                    fullWidth
                    autoFocus
                    id="vendorCompanyName"
                    label="Company Name vendor"
                    error={errors.vendorCompanyName}
                    helperText = {errors.vendorCompanyName}
                    onChange={handleChange}                
                  />
                </Grid>
               <Grid item xs={12}>
                  <TextField
                    autoComplete="rNumber"
                    name="vendorRegistrationNumber"
                    variant="outlined"
                    fullWidth
                    id="vendorRegistrationNumber"
                    label="Registration Number"
                    error={errors.vendorRegistrationNumber}
                    helperText = {errors.vendorRegistrationNumber}
                    onChange={handleChange}                
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="vendorEmail"
                    label="Email Address"
                    name="vendorEmail"
                    autoComplete="email"
                    error={errors.vendorEmail}
                    helperText = {errors.vendorEmail}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="vendorPhone"
                    label="Phone Number"
                    name="vendorPhone"
                    autoComplete="vendorPhone"
                    error={errors.vendorPhone}
                    helperText = {errors.vendorPhone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="uname"
                    name="vendorUsername"
                    variant="outlined"
                    fullWidth
                    id="vendorUsername"
                    label="Username"
                    error={errors.vendorUsername}
                    helperText = {errors.vendorUsername}
                    onChange={handleChange}                
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="vendorPassword"
                    label="Password"
                    name="vendorPassword"
                    autoComplete="pass"
                    error={errors.vendorPassword}
                    helperText = {errors.vendorPassword}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="buyerCity"
                    name="vendorCity"
                    variant="outlined"
                    fullWidth
                    id="vendorCity"
                    label="City"
                    error={errors.vendorCity}
                    helperText = {errors.vendorCity}
                    onChange={handleChange}                
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="vendorWeblink"
                    label="Website Link"
                    name="vendorWeblink"
                    autoComplete="link"
                    error={errors.vendorWeblink}
                    helperText = {errors.vendorWeblink}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="vendorCompanyDescription"
                    id="vendorCompanyDescription"
                    label="Company Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    error={errors.vendorCompanyDescription}
                    helperText = {errors.vendorCompanyDescription}
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
        <VendorFormClass handleChange={props.handleChange} errors={props.errors}/>
    )
}
