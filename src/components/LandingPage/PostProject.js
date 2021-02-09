import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { grey } from '@material-ui/core/colors';
import 'react-multi-carousel/lib/styles.css';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuBarClass from './MenuBar';
import ValidationService from "./../../services/ValidationService.js";

import PostProjectService from './../../services/PostProjectService.js'

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
  postprojectform:{
    marginTop : '50px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 430,
  },
     formControl: {
    minWidth: 450,
  },
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
class PostProjectClass extends React.Component {
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
      showBuyerFields : true,
      showIndividualFields : false,
      isLogin : true
    }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);

   this.onChangeHandler=this.onChangeHandler.bind(this)
  }

  onChangeHandler=event=>{
    alert('new test')
    let input=this.state.input
    console.log(event.target.files[0])
    console.log('event name: ',event.target.name )
    console.log('file type: ',typeof event.target.files[0])
    console.log('type ',typeof event.target.value)
    const length=event.target.files.length
    let count=length
    for(var i=0;i<length;i++)
{
      input[event.target.name+i]=event.target.files[i]

}
input["countt"]=count
console.log('input[event name]: ',input[event.target.name],'is this')
console.log('input is: ',input)
    this.setState({
      input:input
    })

}


  handleChange = val => {
    let input = this.state.input;
    let errors = this.state.errors;
    input[val.target.name] = val.target.value;
    errors[val.target.name] = "";
    this.setState({input:input , errors : errors}); 
  };

  handleSubmit(event) {
    alert("test");
    event.preventDefault();  
    let input = this.state.input;
    let {isValid , errors} = ValidationService.validatePostProjectForm(input);
    this.setState({errors : errors}); 
    if(isValid){
      alert('submitted');
      PostProjectService.submitProjectForm(input,function(response){

        console.log( 'backend response in post project is', response)
        if(response.status=== 200 && response.statusText === "OK")
        {
          alert('Posted Successfully')
          //window.location="/project-page"
          window.location="/home"
        }

      })
        //once data is validate then save user into db
/*        RegistrationService.submitRegisterForm(input, function(response) {
          console.log('response' , response);
          if(response.status == 200 && response.statusText == "OK"){
            alert("Registered Successfully!!")
          }else{
            alert("Something wrong");
          }
        });*/
    }
  }

  async componentDidMount() {

    let response = await PostProjectService.getProjectCategoryData()
    console.log('categories are: ', response)
    this.setState({
      input: response.data
    })
  }

  render() {
    const classes = this.props.classes;    
    const {input}=this.state
    return(


    <React.Fragment>
      <CssBaseline />
    <MenuBarClass classes={classes} isLogin={this.state.isLogin}/>  

    <Container component="main" maxWidth="md" className={classes.postprojectform}>

    <form className={classes.form} onSubmit={this.handleSubmit} >
          
          <Grid container spacing={2}>
          <h1 color="inherit">Post a Project</h1>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="cname"
                    name="projectTitle"
                    variant="outlined"
                    fullWidth
                    autoFocus
                    id="projectTitle"
                    label="Project Title"
                    error={this.state.errors.projectTitle}
                    helperText = {this.state.errors.projectTitle}
                    onChange={this.handleChange}
                  />
                </Grid>
                 <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="projecDesc"
                    id="projecDesc"
                    label="Project Description"
                    multiline
                    rows={4}
                    variant="outlined"
                    error={this.state.errors.projecDesc}
                    helperText = {this.state.errors.projecDesc}
                    onChange={this.handleChange}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                 <TextField
                  id="deadLine"
                  label="DeadLine Date"
                  type="date"
                  name="deadLine"
                  defaultValue="2021-02-17"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={this.state.errors.deadLine}
                  helperText = {this.state.errors.deadLine}
                  onChange={this.handleChange}
                />
                </Grid>
                <Grid item xs={12} sm={6}>
                 <FormControl variant="outlined" className={classes.formControl} >
                    <InputLabel id="demo-simple-select-outlined-label">Industry Type</InputLabel>
                    <Select
                    fullWidth
                      error={this.state.errors.industryType}
                      helperText = {this.state.errors.industryType}
                      onChange={this.handleChange}
                      name="CategoryId"
                      label="CategoryId">
                    {input.length ? input.map(inp =>
                      <MenuItem key={inp.id} value={inp.id}>{inp.c_name}</MenuItem>
                    ) : null}

                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <input
                    //autoComplete="uname"
                    name="rfpDoc"
                    variant="outlined"
                    multiple
                    fullWidth
                    type="file"
                    error={this.state.errors.rfpDoc}
                    helperText = {this.state.errors.rfpDoc}
                    onChange={this.onChangeHandler}
                  />
                </Grid>

              </Grid>

              <Button
                    type="submit"

                    variant="contained"
                    color="primary"
                    style={{float: 'right',backgroundColor: '#33ab9f',
                    '&:hover': {
                      backgroundColor: '#009688',
                    },}}
                    className={classes.submit}
                  >
                   Post Project
                  </Button>
         
    </form>
    </Container>

     

     
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
        <PostProjectClass classes={classes}/>
    )
}