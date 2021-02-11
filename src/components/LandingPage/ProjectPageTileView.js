import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { grey, teal } from '@material-ui/core/colors';
import 'react-multi-carousel/lib/styles.css';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import GetAppIcon from '@material-ui/icons/GetApp'; //GetAppSharpIcon
import Paper from "@material-ui/core/Paper";
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import logo from '../LandingPage/sbslogo.jpg'
import EditRoundedIcon from '@material-ui/icons/EditRounded';

import ProposalSubmitService from '../../services/ProposalSubmitService.js'
import MenuBarClass from './MenuBar';
import ValidationService from "./../../services/ValidationService.js";
import Questions from './Questions';
import axios from 'axios'

import download from 'js-file-download';

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
    backgroundColor: '#009688'//teal //purple[500]
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
  menuBar: {
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
  searchBarBox: {
    backgroundColor: grey[200],
    padding: theme.spacing(3),
  },
  carouselItem: {
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
  headings: {
    marginTop: theme.spacing(1.9)
  },
  root: {
    flexGrow: 1,
  },
  gridParent: {
    padding: theme.spacing(3),
    backgroundColor: grey[200],
  },
  buttonContainer: {
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  postprojectform: {
    marginTop: '50px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 430,
  },
  formControl: {
    minWidth: 450,
  }, alignRight: {
    display: "flex",
    justifyContent: "flex-end"
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1),
    width: 40
  },
  fontNormal: {
    //   marginTop:theme.spacing(2),
    fontWeight: "normal"
  },
  mar: {
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(1),
    marginRight: theme.spacing(20)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#33ab9f',
    '&:hover': {
      backgroundColor: '#009688',
    }
  }

}));
const footers = [
  {
    title: 'Categories',
    description: ['Technology', 'Heathcare', 'Supply Chain', 'Home Utilities', 'All Categories'],
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

class ProjectPageClass extends React.Component {

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
      showBuyerFields: true,
      showIndividualFields: false,
      isLogin: true,
      showDButton: false,
      showRFPButton: false,//true,

      //new
      asked: false

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.projectDocDown= this.projectDocDown.bind(this)
    
    this.showDButton = this.showDButton.bind(this);

    this.onChangeHandler=this.onChangeHandler.bind(this)

    //this.handleQclick=this.handleQclick.bind(this)
  }
  showDButton() {
    this.setState(
      {
        showDButton: !this.state.showDButton,
        showRFPButton: false
      }
    )
  }
  handleChange = val => {
    let input = this.state.input;
    let errors = this.state.errors;
    input[val.target.name] = val.target.value;
    errors[val.target.name] = "";
    this.setState({ input: input, errors: errors });
  };

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



  handleSubmit(event) {
    alert("test");
    event.preventDefault();
    let input = this.state.input;
    //let { isValid, errors } = ValidationService.validatePostProjectForm(input);
  console.log('input in proposal submit is: ',input)
    //this.setState({ errors: errors });
    //if (isValid) {
      alert('submitted');

      ProposalSubmitService.submitProposal(input,function(response){

        console.log( 'backend response in post proposal is', response)
        if(response.status=== 200 && response.statusText === "OK")
        {
          alert('Posted Successfully')
          //window.location="/project-page"
          window.location="/venhome"
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
    //}
  }


  handleQclick = () => {

    this.setState({
      asked: this.state.asked
    })
  }

  async getProjectDoc()
  {

  }
  projectDocDown(event)
  {
  //await getProjectDoc()
  const windowUrl=window.location.pathname

  console.log('window url: ', )
  const url=windowUrl.split('id')
  console.log('urlid: ',url[1])
   const urlid=url[1]

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
console.log('url id: ', urlid)
  axios.get(`http://158.101.229.42:3000/project/projectfiles/url${urlid}`,{headers,withCredentials: true, responseType: 'arraybuffer'})
  .then(response=>{download(response.data, 'download.zip')})  
}
  

componentDidMount(){


  const windowUrl=window.location.pathname

  console.log('window url: ', )
  const url=windowUrl.split('id')
  console.log('urlid: ',url[1])
   const urlid=url[1]

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

  axios.get(`http://158.101.229.42:3000/project/project-tileview/url${urlid}`,{headers,withCredentials: true})
  .then(
    response=>{

      console.log(response)
      this.setState({
        input:response.data,
        error:""
      })
    })
    .catch(error=>{
      console.log(error)
      this.setState({
        errorMsg:'error retrieving data'
      })
    })

}

  render() {
    const classes = this.props.classes;
    const { showDButton, input, errorMsg } = this.state
    return (


      <React.Fragment>
        <CssBaseline />
        <MenuBarClass classes={classes} isLogin={this.state.isLogin} />
        <Grid
          spacing={4}
          alignItems="center"
          justify="center"
          container
          className={classes.grid}
        >

          <Grid className={classes.gridParent} container item xs={10}>
            
          
            <Grid item xs={12} sm={12} key={input.id}>
              
              <Paper className={classes.paper} elevation={1}>
                <div>
                  <Typography component="h4" variant="h4" align="left" color="textPrimary" gutterBottom>
                    <img src={logo} width="200px" height="200px" align="right" />
          {input.name}
        </Typography>
                  <Divider style={{ marginTop: '30px' }} /*variant="light"*/ /*{component="li"}*/ />

                  <div className={classes.box}>

                    {/* <Paper> */}
                      {/* <IconButton aria-label="delete" style={{ float: "right" }} onClick={this.editUsernameHandle}>
                        <EditRoundedIcon fontSize="default" />
                      </IconButton> */}
                             {/*Show this icon only to the user who posted the project */}
                      <Typography className={classes.mar} component="h5" variant="h5" align="left" color="secondary" gutterBottom>
                      {input.p_title}
                      {/* Project Title */}
                    </Typography>
                      <Typography style={{ maxWidth: 800 }} variant="body2" gutterBottom>
                      {input.p_descr}
                        {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
                        </Typography>
                    {/* </Paper> */}
                  </div>

                  <Typography>Deadline: {input.p_deadline}</Typography>
                  {/* <TextField
                    id="date"
                    label="Deadline"
                    //type="date"
                    //defaultValue={input.p_deadline}
                    className={classes.textField}
                    variant="outlined"
                    size="small"
                    disabled
                    style={{ marginTop: '15px' }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  ></TextField> */}
                </div>
                <div>
                  <Typography component="body1" variant="body1" >
                    <Box fontWeight="fontWeightMedium" style={{ marginTop: '15px' }} >
                      Industry Category: 
                <span className={classes.fontNormal}>{ input.c_name}</span>
                    </Box>

                  </Typography>

                  <div className={classes.alignRight}> {/*maybe align right not needed here */}
                    {/* The Download button below should only be shown/visible/unlocked when a buyer has purchased a plan */}
                    {/* <IconButton color="primary">                        
                            <GetAppIcon/>                      
                       </IconButton> */}
                    
                    {input.tokenValue!==null ?(
                    <Grid item xs={10} sm={12}>




                      {showDButton && (
                        <>
                          <Button href="" onClick={this.projectDocDown} className={classes.submit} variant="contained" color="primary" size="small" >

                            <GetAppIcon />
                          </Button>
                          <form className={classes.form} onSubmit={this.handleSubmit} >

                          <Grid item xs={12} sm={6}>
                
                          <Typography className={classes.mar} component="h5" variant="h5" align="left" color="secondary" gutterBottom>
                      Upload Proposal
                      {/* Project Title */}
                    </Typography>
                  <input
                    //autoComplete="uname"
                    name="proposalDoc"
                    variant="outlined"
                    multiple
                    fullWidth
                    type="file"
                    error={this.state.errors.proposalDoc}
                    helperText = {this.state.errors.proposalDoc}
                    onChange={this.onChangeHandler}
                  />
                </Grid>
                <Button
                    type="submit"

                    variant="contained"
                    color="primary"
                    style={{float: 'left',backgroundColor: '#33ab9f',
                    '&:hover': {
                      backgroundColor: '#009688',
                    },}}
                    className={classes.submit}
                  >
                   Give Proposal
                  </Button>
                  </form>
                        </>
                      )

                      }

                      {this.state.showRFPButton && <Button href="" onClick={() => this.showDButton(false)} className={classes.submit} variant="contained" color="primary" size="small" >
                        Buy RFP
        </Button>
        }


                    </Grid>
                    ):null }
      </div>

                </div>
              </Paper>

            </Grid>
             
          </Grid>

        </Grid>




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
    <ProjectPageClass classes={classes} />
  )
}