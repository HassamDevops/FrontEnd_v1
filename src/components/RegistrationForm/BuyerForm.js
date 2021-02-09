import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import RegistrationService from "./../../services/RegistrationService.js";

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

class BuyerFormClass extends React.Component {
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
async componentDidMount()
{
 let response=await RegistrationService.getCategoryData()
 console.log('categories are: ', response)
this.setState({
  input:response.data
})
}
  render() {
    const classes = this.props.classes;
    const handleChange = this.props.handleChange;
    const onChangeHandler=this.props.onChangeHandler;
    const errors = this.props.errors;
    const {input}=this.state
    return(
      <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="cname"
                    name="buyerCompanyName"
                    variant="outlined"
                    fullWidth
                    autoFocus
                    id="buyerCompanyName"
                    label="Company Name"
                    error={errors.buyerCompanyName}
                    helperText = {errors.buyerCompanyName}
                    onChange={handleChange}                
                  />
                </Grid>
               <Grid item xs={12}>
                  <TextField
                    autoComplete="rNumber"
                    name="buyerRegistrationNumber"
                    variant="outlined"
                    fullWidth
                    id="buyerRegistrationNumber"
                    label="Registration Number"
                    error={errors.buyerRegistrationNumber}
                    helperText = {errors.buyerRegistrationNumber}
                    onChange={handleChange}                
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="buyerEmail"
                    label="Email Address"
                    name="buyerEmail"
                    autoComplete="email"
                    error={errors.buyerEmail}
                    helperText = {errors.buyerEmail}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="buyerPhone"
                    label="Phone Number"
                    name="buyerPhone"
                    autoComplete="buyerPhone"
                    error={errors.buyerPhone}
                    helperText = {errors.buyerPhone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="uname"
                    name="buyerUsername"
                    variant="outlined"
                    fullWidth
                    id="buyerUsername"
                    label="Username"
                    error={errors.buyerUsername}
                    helperText = {errors.buyerUsername}
                    onChange={handleChange}                
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="buyerPassword"
                    type="password"
                    label="Password"
                    name="buyerPassword"
                    autoComplete="pass"
                    error={errors.buyerPassword}
                    helperText = {errors.buyerPassword}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="buyerCity"
                    name="buyerCity"
                    //type="password"
                    variant="outlined"
                    fullWidth
                    id="buyerCity"
                    label="City"
                    error={errors.buyerCity}
                    helperText = {errors.buyerCity}
                    onChange={handleChange}                
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="buyerWeblink"
                    label="Website Link"
                    name="buyerWeblink"
                    autoComplete="link"
                    error={errors.buyerWeblink}
                    helperText = {errors.buyerWeblink}
                    onChange={handleChange}
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControl variant="outlined" className={classes.formControl} >
                    <InputLabel id="demo-simple-select-outlined-label">Company</InputLabel>
                    <Select
                    fullWidth
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      onChange={handleChange}
                      name="userType"
                      label="Type">
                      <MenuItem value="buyer">Buyer</MenuItem>
                      <MenuItem value="vendor">Vendor</MenuItem>
                    </Select>
                  </FormControl>
                 </Grid>
                 <Grid item xs={12}>
                 
                  <FormControl variant="outlined" className={classes.formControl} >
                    <InputLabel id="demo-simple-select-outlined-label">Category Type</InputLabel>
                    
                    <Select
                    fullWidth
                      onChange={handleChange}
                      name="CategoryId"
                      label="CategoryId">
                    {input.length ? input.map(inp =>
                      <MenuItem key={inp.id} value={inp.id}>{inp.c_name}</MenuItem>                      
                      ): null}
                      </Select>
                    
                  </FormControl>
                 
                 </Grid>
                  <Grid item xs={12}>
                  <TextField
                    name="fileUpload"
                    variant="outlined"
                    fullWidth
                    type="file"
                    id="fileUpload"
                    error={errors.buyerRegistrationNumber}
                    helperText = {errors.buyerRegistrationNumber}
                    onChange={onChangeHandler}                
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="buyerCompanyDescription"
                    id="buyerCompanyDescription"
                    label="Company Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    error={errors.buyerCompanyDescription}
                    helperText = {errors.buyerCompanyDescription}
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
        <BuyerFormClass handleChange={props.handleChange} onChangeHandler={props.onChangeHandler} errors={props.errors} classes={props.classes}/>
    )
}
