import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import {teal,grey} from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ValidationService from '../../services/ValidationService.js'

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
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 300,
        marginBottom: theme.spacing(2),
        paddingTop: theme.spacing(1)  
      },
      submit: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
       // margin: theme.spacing(3, 0, 2),
        marginBottom: theme.spacing(1),
        paddingTop: theme.spacing(1),
        backgroundColor: '#33ab9f',
        '&:hover': {
          backgroundColor: '#009688',
        }
      }
    
  }));

class MessageUs extends Component {
constructor(props) {
    super(props)

    this.state = {
        //  name:'',
        //  email:'',
        //  message:'',
         errors:{},
         input:{}
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.handleChange=this.handleChange.bind(this)
  //  this.handleEmailChange=this.handleEmailChange.bind(this)
   // this.handleMessageChange=this.handleMessageChange.bind(this)
}

handleChange=(event)=>{

    let input = this.state.input;
    let errors = this.state.errors;
    input[event.target.name] = event.target.value;
    errors[event.target.name] = ""; //makes the validation error go away once input is fixed
    this.setState({
        //name:event.target.value,
        input:input,
        errors:errors
    })

}
// handleEmailChange=event=>{

//     let errors=this.state.errors
//     errors[event.target.name]=""
//     this.setState({
//         email:event.target.value,
//         errors:errors
//     })
// }
// handleMessageChange=event=>{

//     let input = this.state.input;
//     let errors = this.state.errors;
//     errors[event.target.name] = "";

//     this.setState({
        
//         input:event.target.value,
//         errors:errors
//     })
// }

handleSubmit=event=>{
    alert('test')
    event.preventDefault()
    let input =this.state.input
    console.log('in handlesubmit ',this.state.input)
    
    //alert(`${this.state.name} ${this.state.email} ${this.state.message}`)
    let{isValid,errors}=ValidationService.validateMessageUsForm(input)
    this.setState({
        errors:errors    
    })
    console.log('isvalid outside? ',isValid)
    if(isValid)
    {
        console.log('isvalid? ',isValid)
        //call the message service here 
        //once data is validate then submit message
    }
    event.preventDefault()
}
    render() {
        const classes = this.props.classes; 
        return (
            <div>
                {/* <Grid container spacing={3}> */}
                    {/* <Grid item xs> */}
                    {/* </Grid> */}
                 <form variant="outlined" onSubmit={this.handleSubmit} >
                     <FormControl>
                 {/* <Grid item xs> */}

                 {/* <InputLabel>Name</InputLabel> */}
           {/* <InputLabel style={{alignItems:"left"}}>Name</InputLabel> */}
                 {/* </Grid>
                 <Grid item>   */}
                 <TextField  placeholder="Name"
                className={classes.textField}
                variant="outlined" 
                type='text' 
                name='contactName'
                //value={this.state.name}
                onChange={this.handleChange}
                error={this.state.errors.contactName}
                helperText={this.state.errors.contactName} 
                />

                 {/* </Grid>
                 <Grid> */}
                    <TextField placeholder="Email" 
                    className={classes.textField} 
                    variant="outlined" type='text' 
                    name="contactEmail"
                    error={this.state.errors.contactEmail}
                    helperText={this.state.errors.contactEmail}
                    value={this.state.email} 
                    onChange={this.handleChange}
                    />
                    {/* </Grid>
                    <Grid> */}
                    <TextField 
                    className={classes.textField}
                    placeholder="Message"
                    multiline
                    rows={4}
                    style={{width:420}}
                    variant="outlined"
                    name="contactMessage"
                    value={this.state.message}
                    onChange={this.handleChange}
                    error={this.state.errors.message}
                    >
                    </TextField>
                    {/* </Grid> */}
                    <Button
                    type="submit"

                    variant="contained"
                    color="primary"
                    // style={{float: 'right',backgroundColor: '#33ab9f',
                    // '&:hover': {
                    //   backgroundColor: '#009688',
                    // },}}
                    style={{width:200}}
                    className={classes.submit}
                  >
                   Submit
                  </Button>
                  </FormControl>
                </form>
                {/* </Grid> */}
            </div>
        )
    }
}

export default () => {
    const classes = useStyles();
    return (
        <MessageUs classes={classes}/>
    )
}