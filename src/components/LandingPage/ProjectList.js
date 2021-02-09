import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { grey } from '@material-ui/core/colors';
import 'react-multi-carousel/lib/styles.css';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Searchbar from './SearchBarProjectList'

import MenuBarClass from './MenuBar';
import TileViewClass from './TileView';
import ValidationService from "./../../services/ValidationService.js";
import { Paper } from '@material-ui/core';
import SearchBarClass from './SearchBar';
import SearchService from "../../services/SearchService.js"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import axios from 'axios'

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

  headings :{
   marginTop: theme.spacing(1.9)
  },
  root: {
    flexGrow: 1,
    display: 'flex'
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
class ProjectListClass extends React.Component {
  constructor(props) {
    // Required step: always call  the parent class' constructor
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
      isLogin : true,
      gilad: true,
      jason: false,
      antoine: false,
    }
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange = val => {
    // let input = this.state.input;
    // let errors = this.state.errors;
    // input[val.target.name] = val.target.value;
    // errors[val.target.name] = "";
    // this.setState({input:input , errors : errors}); 
  };

  handleSubmit(event) {
    alert("test");
    event.preventDefault();  
    let input = this.state.input;
    let {isValid , errors} = ValidationService.validatePostProjectForm(input);
    this.setState({errors : errors}); 
    if(isValid){
      alert('submitted');
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
  async componentDidMount()
  {

  



    let jwt= document.cookie//.jwt
  // Get all the cookies pairs in an array
  let cookiearray = jwt.split(';');
  // Now take key value pair out of this array
  let name=null
  let value = null
  for(var i=0; i<cookiearray.length; i++) {
    name = cookiearray[i].split('=')[0];
    value = cookiearray[i].split('=')[1];
console.log("Key is : " + name + " and Value is : " + value);
   }
  console.log('jwt is ',jwt)

  if(!value)
  {
    value=''
  }
      let headers = {
        headers: {
            'Content-Type': 'application/json',
      'Authorization' : `Bearer ${value}`,
        }
      }
            //being used for token value (input.tokenvalue)
         await   axios.get('http://localhost:3000/login/check-loggedin',{headers,withCredentials: true})
            .then(responseData => {
              console.log('responseData:' , responseData);
              // return responseData;
              this.setState({
                input: responseData.data,
                error: ""
            })
          })
          .catch(error => {
            console.log(error)
            this.setState({
                errorMsg: 'Error retreiving data'
            })
        })

        let response=await SearchService.getCategoryData()
    console.log('categories are: ', response)
   this.setState({
     input:response.data
   })    
  
  }

  render() {
    const classes = this.props.classes;  
    const {input}=this.state  
    return(


    <React.Fragment>
      <CssBaseline />
    <MenuBarClass classes={classes} isLogin={this.state.isLogin}/>  

    <Container component="main" maxWidth="lg" className={classes.postprojectform}>
    <h1>Project Marketplace</h1>  
    <Grid container spacing={3}>
    {/* <Searchbar classes={classes}/> */}
    <SearchBarClass classes={classes} projectListHref={'/project-list'}/>
    </Grid>

      <Grid container spacing={3} className={classes.gridParent}>
        <Grid item xs={3} sm={3}>
          <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Category</FormLabel>             
       {/*<RadioGroup  name="category">   value={value} onChange={handleChange}> */}       
       
       <RadioGroup  name="category">
       <FormControlLabel value="All" control={<Radio />} label="All" />
       {input.length && input.map(inp =>
       <FormControlLabel key={inp.id} value={inp.id} control={<Radio />} label={inp.c_name} />
       )}
       {/* <FormControlLabel value="Yesterday" control={<Radio />} label="Yesterday" />
        <FormControlLabel value="Last Week" control={<Radio />} label="Last Week" />
        <FormControlLabel value="Last Month" control={<Radio />} label="Last Month" /> */}
      </RadioGroup>
              <br></br>
              <FormLabel component="legend">Date Posted</FormLabel>
       <RadioGroup aria-label="gender" name="gender1">  {/* value={value} onChange={handleChange}> */}
       <FormControlLabel value="All" control={<Radio />} label="All" />
        <FormControlLabel value="Yesterday" control={<Radio />} label="Yesterday" />
        <FormControlLabel value="Last Week" control={<Radio />} label="Last Week" />
        <FormControlLabel value="Last Month" control={<Radio />} label="Last Month" />
      </RadioGroup>

              <FormHelperText>filter projects from above categories</FormHelperText>
            </FormControl>
           
            {/* <FormControl component="fieldset">
          </FormControl> */}


          </div>
        </Grid>
        <Grid item xs={9} sm={9}>
         {input.tokenValue ===null ? 
         <TileViewClass classes={classes} hreff={'project-tileview/id'}/> : <TileViewClass classes={classes} hreff={'project-page/id'}/>}
        </Grid>
      </Grid>

      
    
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
        <ProjectListClass classes={classes}/>
    )
}