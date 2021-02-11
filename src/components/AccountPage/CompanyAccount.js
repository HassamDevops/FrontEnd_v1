import React, { Component } from 'react'
import MenuBarClass from '../LandingPage/MenuBar';
import { ResetPassword } from '../LoginForm/ResetPassword';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';  
import DoneOutlineRoundedIcon from '@material-ui/icons/DoneOutlineRounded';
import Button from '@material-ui/core/Button';
import ValidationService from '../../services/ValidationService.js'
import GetAppIcon from '@material-ui/icons/GetApp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import CompanyAccountService from '../../services/CompanyAccountService.js'

import axios from 'axios'

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

    },
    popover: {
    },
    paper: {

    },
    searchBarBox: {

    },
    carouselItem: {

    },
    formControl: {

    },
    textField: {
    },
    gridContainerItem1: {

        marginTop: theme.spacing(10),
        //    paddingTop: theme.spacing(1),
        //  backgroundColor:'white'  
        //backgroundColor:'white'  
    },
    gridContainerItem2: {

        marginTop: theme.spacing(20),
        //    paddingTop: theme.spacing(1),
        //  backgroundColor:'white'  
        //backgroundColor:'white'  
    }

}));


export class CompanyAccount extends Component {

constructor(props) {
    super(props)

    this.state = {
        editedUsername:"",
        errors:{},
        input:{},
        categories:{},
        usernameDetailsShow:true,
        emailDetailsShow:true,
        companyNameShow:true,
        registrationNumberShow:true,
        contactShow:true,
        websiteShow:true,
        locationDetailsShow:true,
        categoryDetailsShow:true,
        companyDescShow:true,
       
        usernameEditPen:false,
        emailEditPen:false,
        companyNameEditPen:false,
        registrationEditPen:false,
        contactEditPen:false,
        websiteEditPen:false,
        locationEditPen:false,
        categoryEditPen:false,
        companyDescEditPen:false,

        isLogin : true

    }
    this.editUsernameHandle=this.editUsernameHandle.bind(this)
    this.editEmailHandle=this.editEmailHandle.bind(this)
    this.editCompanyNameHandle=this.editCompanyNameHandle.bind(this)
    this.editRegistrationNumberHandle=this.editRegistrationNumberHandle.bind(this)
    this.editWebsiteHandle=this.editWebsiteHandle.bind(this)
    this.editLocationHandle=this.editLocationHandle.bind(this)
    this.editCategoryHandle=this.editCategoryHandle.bind(this)
    this.editCompanyDescHandle=this.editCompanyDescHandle.bind(this)
    this.editContactHandle=this.editContactHandle.bind(this)

    this.usernameEditClick = this.usernameEditClick.bind(this);
    this.emailEditClick = this.emailEditClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlesubmitPassword=this.handlesubmitPassword.bind(this);
    this.onPasswordChange=this.onPasswordChange.bind(this)
    this.handleCompanyNameEdit=this.handleCompanyNameEdit.bind(this);
    this.onCompanyNameChange=this.onCompanyNameChange.bind(this);
    this.handleRegistrationNumberEdit=this.handleRegistrationNumberEdit.bind(this)
    this.onRegistrationNumberChange=this.onRegistrationNumberChange.bind(this)
    this.handleContactNumberEdit=this.handleContactNumberEdit.bind(this)
    this.handlewebSiteEdit=this.handlewebSiteEdit.bind(this)
    this.handleCompanyDescEdit=this.handleCompanyDescEdit.bind(this)

    this.regDocDown=this.regDocDown.bind(this)
}


editUsernameHandle(event) {

        this.setState({
            usernameDetailsShow:!this.state.usernameDetailsShow,
            usernameEditPen:!this.state.usernameEditPen,
            
        })
}
editEmailHandle(event){
    this.setState({
        emailDetailsShow:!this.state.emailDetailsShow,
        emailEditPen:!this.state.emailEditPen,

    })
}
editCompanyNameHandle(event){
    this.setState({
        companyNameShow:!this.state.companyNameShow,
        companyNameEditPen:!this.state.companyNameEditPen,

    })
}
editRegistrationNumberHandle(event){
    this.setState({
        registrationNumberShow:!this.state.registrationNumberShow,
        registrationEditPen:!this.state.registrationEditPen
    })
}
editContactHandle(event){
    this.setState({
        contactShow:!this.state.contactShow,
        contactEditPen:!this.state.contactEditPen
    })
}
editWebsiteHandle(event){
    this.setState({
        websiteShow:!this.state.websiteShow,
        websiteEditPen:!this.state.websiteEditPen,
    })
}
editLocationHandle(event){
    this.setState({
        locationDetailsShow:!this.state.locationDetailsShow,
        locationEditPen:!this.state.locationEditPen,

    })
}
editCategoryHandle(event){
    this.setState({
        categoryDetailsShow:!this.state.categoryDetailsShow,
        categoryEditPen:!this.state.categoryEditPen,

    })
}
editCompanyDescHandle(event){
    this.setState({
        companyDescShow:!this.state.companyDescShow,
        companyDescEditPen:!this.state.companyDescEditPen
    })
}
editUsernameClick(event){

    this.setState({
//        usernameEditPen:true
    })
}

handleChange(event){
    let input=this.state.input
    let errors=this.state.errors
    console.log('event target name: ',event.target.name)
    console.log('descr in handle change: ',event.target.value)
    input[event.target.name]=event.target.value
    errors[event.target.name]=""
    this.setState({
        input:input,
        errors:errors
    })
}

usernameEditClick(event){
    alert('Username edit click')
    event.preventDefault()
    let input=this.state.input
    let editedStateValue=null
    let username={}
    console.log('Event target name: ',event.target.name)
  //  input[event.target.name]=event.target.value
    //console.log('Event target name: ',event.target.name)
    //console.log('target value in edit usernaem: ',event.target.value)
    console.log('username edit value: ',input)
    let {isValid,errors}=ValidationService.validateAccountDetails(input)
    console.log('input in usernameclick: ',input)
CompanyAccountService.editCompanyDetails(input,function(response){
    console.log('response is this: ' , response);
          if(response.status === 200 && response.statusText === "OK"){
            console.log('response role', response.data)
        editedStateValue=response.data.username    // this.setState({
            console.log('edited state val: ',editedStateValue)
        username={username:response.data}
            // })
        }   
       
})
 this.setState({
        usernameDetailsShow:true,
        usernameEditPen:false
    })

    //this.setState({errors : errors});
//     console.log('edited state val: ',editedStateValue)
    // this.setState({
    //     input:editedStateValue,
    //     usernameDetailsShow:true,
    //     usernameEditPen:false
    // })
     alert('we here now')
}
emailEditClick(event){
    alert('email edit click')
    let editedStateValue=null
    event.preventDefault()
    let input=this.state.input
   console.log('email input ',input)

    let {isValid,errors}=ValidationService.validateAccountDetails(input)
    console.log('input in emaileditclick: ',input)
    CompanyAccountService.editCompanyDetails(input,function(response){
        console.log('response is this: ' , response);
              if(response.status === 200 && response.statusText === "OK"){
                console.log('response role', response.data)
            editedStateValue=response.data.email    // this.setState({
                console.log('edited state val: ',editedStateValue)
            //username={username:response.data}
                // })
            }   
           
    })
    this.setState({
        emailDetailsShow:true,
        emailEditPen:false
    })
    alert('we here now')
}
onPasswordChange(event){

    let input = this.state.input
    let errors=this.state.errors
    input[event.target.name]=event.target.value
    errors[event.target.name]=""
    this.setState({
        input:input,
        errors:errors
    })

}
handlesubmitPassword(event){
    alert('submit password')
//    event.preventDefault()
    let input=this.state.input
    console.log('email input ',input)
    let{isValid,errors}=ValidationService.validatePasswordReset(input)
    console.log('passwword valid? ',isValid)
    this.setState({errors : errors}); 
    if(isValid)
    {
        alert('valid')
        CompanyAccountService.reset(input,function(response){

            console.log( 'backend response in post project is', response)
            if(response.status=== 200 && response.statusText === "OK")
            {
              alert('Posted Successfully')
              //window.location="/project-page"
             
            }
    
          })
    
    }
}
onCompanyNameChange(event){
    let errors=this.state.errors
    let input=this.state.input
    errors[event.target.name]=""
    input[event.target.name]=event.target.value
    this.setState({
        input:input,
        errors:errors
    })
}

handleCompanyNameEdit(event){

    alert('clicked')
    event.preventDefault()
    let input=this.state.input
    let editedStateValue=null
    let {isValid,errors}=ValidationService.validateCompanyNameChange(input)
    console.log('company name input ',input)

    CompanyAccountService.editCompanyDetails(input,function(response){
        console.log('response is this: ' , response);
              if(response.status === 200 && response.statusText === "OK"){
                console.log('response role', response.data)
            editedStateValue=response.data.name    // this.setState({
                console.log('edited state val: ',editedStateValue)
            //username={username:response.data}
                // })
            }   
           
    })
    this.setState({
        companyNameShow:true,
        companyNameEditPen:false
    })


 
}
onRegistrationNumberChange(event){
    let errors=this.state.errors
    let input=this.state.input
    errors[event.target.name]=""
    input[event.target.name]=event.target.value
    this.setState({
        input:input,
        errors:errors
    })
}

handleRegistrationNumberEdit(event){

    alert('clicked')
    event.preventDefault()
    let input=this.state.input
    let editedStateValue=null
    let {isValid,errors}=ValidationService.validateRegistrationNumberChange(input)
    console.log('company name input ',input)

    CompanyAccountService.editCompanyDetails(input,function(response){
        console.log('response is this: ' , response);
              if(response.status === 200 && response.statusText === "OK"){
                console.log('response role', response.data)
            editedStateValue=response.data.registrationnumber    // this.setState({
                console.log('edited state val: ',editedStateValue)
            //username={username:response.data}
                // })
            }   
           
    })
    this.setState({
        registrationNumberShow:true,
        registrationEditPen:false
    })
}
handleContactNumberEdit(event){

    alert('clicked')
    event.preventDefault()
    let input=this.state.input
    let {isValid,errors}=ValidationService.validateContactNumberChange(input)

    console.log('company phone input ',input)

    CompanyAccountService.editCompanyDetails(input,function(response){
        console.log('response is this: ' , response);
              if(response.status === 200 && response.statusText === "OK"){
                console.log('response role', response.data)
         //   editedStateValue=response.data.phone    // this.setState({
           //     console.log('edited state val: ',editedStateValue)
            //username={username:response.data}
                // })
            }   
           
    })
    this.setState({
        contactShow:true,
        contactEditPen:false
    })
}
handlewebSiteEdit(event){

    alert('clicked')
    event.preventDefault()
    let input=this.state.input
    let {isValid,errors}=ValidationService.validatewebSiteChange(input)

    console.log('company site input ',input)

    CompanyAccountService.editCompanyDetails(input,function(response){
        console.log('response is this: ' , response);
              if(response.status === 200 && response.statusText === "OK"){
                console.log('response role', response.data)
         //   editedStateValue=response.data.phone    // this.setState({
           //     console.log('edited state val: ',editedStateValue)
            //username={username:response.data}
                // })
            }   
           
    })
    this.setState({
        websiteShow:true,
        websiteEditPen:false
    })
}
handleCompanyDescEdit(event){

    alert('clicked')
    event.preventDefault()
    let input=this.state.input
    let {isValid,errors}=ValidationService.validateCompanyDescChange(input)

    console.log('company site input ',input)

    CompanyAccountService.editCompanyDetails(input,function(response){
        console.log('response is this: ' , response);
              if(response.status === 200 && response.statusText === "OK"){
                console.log('response role', response.data)
         //   editedStateValue=response.data.phone    // this.setState({
           //     console.log('edited state val: ',editedStateValue)
            //username={username:response.data}
                // })
            }   
           
    })
    this.setState({
        companyDescShow:true,
        companyDescEditPen:false
    })
}
async getResponseData(){
    return await CompanyAccountService.getCompayData()
    //console.log('responsee: ',response.data)
    
}
async componentDidUpdate(prevProps,prevState)
{
console.log('prevstate: ',prevState.input)
console.log('thisstate: ',this.state.input)
    if(JSON.stringify(prevState.input) !== JSON.stringify(this.state.input))
    {
        console.log('inside if prevstate: ',prevState.input)
console.log('inside if  thisstate: ',this.state.input)
   let responsee=await this.getResponseData()
 
//let response= await CompanyAccountService.getCompayData()
//console.log('responsee: ',response.data.data)
let response=responsee.data
console.log('response: ',response.data)
this.setState({
            input:response.data
            
          })

    }
    
//    let response=await this.getResponseData()
 
// let response= await CompanyAccountService.getCompayData()
// console.log('responsee: ',response.data.data)
// let response=responsee.data
// console.log('response: ',response.data)
// this.setState({
//             input:response.data.data
            
//           })



}
regDocDown(event)
{
CompanyAccountService.getRegDoc()
}

async componentDidMount(){

    let response=await this.getResponseData()
 
// let response= await CompanyAccountService.getCompayData()
 console.log('responsee: ',response.data.data)
//let response=responsee.data
// console.log('response: ',response.data)
let api2response=  await  CompanyAccountService.getCompanyCategoryData()
console.log('api2response: ', api2response.data)
console.log('categories are: ', response)
let respcheck={...response.data.data,...api2response.data}
console.log('both response are: ', respcheck)

// this.setState({
//       input: response.data
//     })
console.log('reponse data data: ', response.data.data)

this.setState({
            input:respcheck,//response.data.data
            categories:api2response.data
          })
          //setInterval(this.getResponseData,9000)
//     let jwt= document.cookie//.jwt
//     // Get all the cookies pairs in an array
//     let cookiearray = jwt.split(';');
//     // Now take key value pair out of this array
//     let name=null
//     let value = null
//     for(var i=0; i<cookiearray.length; i++) {
//       name = cookiearray[i].split('=')[0];
//       value = cookiearray[i].split('=')[1];
//  console.log("Key is : " + name + " and Value is : " + value);
//      }
//     console.log('jwt is ',jwt)
 
//     if(!value)
//     {
//       value=''
//     }
 
//     let headers = {
//       headers: {
//           'Content-Type': 'application/json',
//           'Authorization' : `Bearer ${value}`,
//       }
//     }
//     axios.get(`http://158.101.229.42:3000/userdata/companyaccount`,{headers,withCredentials: true})
//   .then(
//     response=>{

//       console.log('response is: ',response)
//       this.setState({
//         input:response.data.data,
//         error:""
//       })
//     })
//     .catch(error=>{
//       console.log(error)
//       this.setState({
//         errorMsg:'error retrieving data'
//       })
//     })
       

    // axios.get('https://jsonplaceholder.typicode.com/users/1')
    // .then(
    //   response=>{
    //     console.log('response is: ',response)
    //     this.setState({
    //       input:response.data,
    //       error:""
    //     })
    //   })
    //   .catch(error=>{
    //     console.log(error)
    //     this.setState({
    //       errorMsg:'error retrieving data'
    //     })
    //   })
  }
  
    render() {
        const classes = this.props.classes
        const { input,categories, errorMsg } = this.state

        return (
            <div>
                <MenuBarClass classes={classes} isLogin={this.state.isLogin}/>
                <Grid container>
                  
                    <Grid  item xs={4} className={classes.gridContainerItem1}>
                        {/* <Paper elevation={0} variant="outlined"> */}
                            <Typography variant="h4" gutterBottom align="center" style={{ fontWeight: "bold" }}>
                                Account Details
             
            </Typography>
            <Divider  variant="middle" />
                        {/* </Paper> */}
                        <div style={{display: 'flex', justifyContent: "center", alignItems: 'center'}}>
            <AccountCircleRoundedIcon style={{fontSize:50}}/>
            </div>
                    </Grid>
                    <Grid item xs={8} className={classes.gridContainerItem2}>                    
                    <IconButton aria-label="delete" style={{float:"right", marginRight:50}} onClick={this.editUsernameHandle}>
  <EditRoundedIcon fontSize="default" />
</IconButton>                    
{this.state.usernameEditPen &&<IconButton  onClick={this.usernameEditClick} style={{float:"right"}} >
  <DoneOutlineRoundedIcon fontSize="default" />
</IconButton>                                
    }
                        {/* <Paper> */}
               <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>                     
                                Username
                                
                            </Typography>
                        

{this.state.usernameDetailsShow &&                        <Typography variant="subtitle1" gutterBottom>
                        {input.username}
                                {/* usmanmehmood12 */}
                            </Typography>
                          }
                       {!this.state.usernameDetailsShow &&   <TextField
                                className={classes.textField}
                                style={{width:250,backgroundColor:'white'}}
                                autoFocus
                                variant="outlined"
                                name="username"
                                error={this.state.errors.userName}
                                helperText={this.state.errors.userName}
                                required
                                onChange={this.handleChange}
                            />
                       }
                             <IconButton aria-label="delete" style={{float:"right", marginRight:50}} onClick={this.editEmailHandle}>
  <EditRoundedIcon fontSize="default" />
</IconButton>    
{this.state.emailEditPen &&<IconButton aria-label="Email" onClick={this.emailEditClick} style={{float:"right"}} >
  <DoneOutlineRoundedIcon fontSize="default" />
</IconButton>                                
    }
                       <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
                                Email
                            </Typography>
                            
                {this.state.emailDetailsShow &&              <Typography variant="subtitle1" gutterBottom>
                {input.email}
                                {/* usmanmehmood12@smartbscorp.com */}
                            </Typography>
              }
                                     {!this.state.emailDetailsShow && <TextField
                                className={classes.textField}
                                style={{width:260,backgroundColor:'white'}}
                                autoFocus
                                variant="outlined"
                                name="email"
                                error={this.state.errors.email}
                                helperText={this.state.errors.email}
                                onChange={this.handleChange}
                                required
                            />
                       }
                       <Grid item xs>
                           <form onSubmit={this.handlesubmitPassword}>
                       <FormControl className={classes.formControl} >
                       <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
                                Current Password
                            </Typography>
                            <TextField
                                className={classes.textField}
                                style={{width:260,backgroundColor:'white'}}
                                autoFocus
                                placeholder="Enter Current Password"
                                variant="outlined"
                                name="currentPassword"
                                type="currentPassword"
                                onChange={this.handleChange}
                                error={this.state.errors.currentPassword}
                                helperText={this.state.errors.currentPassword}
                                //required
                            />
                                                   <Typography variant="h6" gutterBottom style={{ fontWeight: "bold",marginTop: 6 }}>
                                New Password
                            </Typography>
                            <TextField
                                className={classes.textField}
                                style={{width:260,backgroundColor:'white'}}
                                autoFocus
                                placeholder="Enter New Password"
                                variant="outlined"
                                name="newPassword"
                                type="password"
                                onChange={this.handleChange}
                                error={this.state.errors.newPassword}
                                helperText={this.state.errors.newPassword}
                                //required
                            />
                             
                                
                                <Button
                                type="submit"

                                variant="contained"
                                color="primary"
                                // style={{float: 'right',backgroundColor: '#33ab9f',
                                // '&:hover': {
                                //   backgroundColor: '#009688',
                                // },}}
                                style={{ width: 160, fontWeight: "bold", marginTop:10 }}
                                
                            >
                                Reset Password
  </Button>
  </FormControl>
  </form>
  </Grid>
              {/*888888888888888888888888*/}
              {/* <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>                     
                                Username
                                
                            </Typography> */}

              {/*888888888888888888888888*/}
                        {/* </Paper> */}
                    </Grid>

                    <Grid item xs={4} className={classes.gridContainerItem1}>
                        
                    {/* <Paper elevation={0} variant="outlined"> */}
                            <Typography variant="h4" gutterBottom align="center" style={{ fontWeight: "bold" }}>
                                Company Details
                            </Typography>
                            <Divider  variant="middle" />
                    {/* </Paper>                     */}
                    </Grid>
                    <Grid item xs={8} className={classes.gridContainerItem2}>
                    <IconButton aria-label="delete" style={{float:"right" , marginRight:50}} onClick={this.editCompanyNameHandle}>
  <EditRoundedIcon fontSize="default" />
</IconButton>   
{this.state.companyNameEditPen &&<IconButton aria-label="delete"  onClick={this.handleCompanyNameEdit} style={{float:"right"}} >
  <DoneOutlineRoundedIcon fontSize="default"/>
</IconButton>                                
    }                    
                        {/* <Paper> */}
                            <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
                                Company Name
                            </Typography>
                       {this.state.companyNameShow && <Typography variant="subtitle1" gutterBottom>
                       
                             {input.name}   {/* Smart Blockchain Solutions */}
                            </Typography>
                            }
                               {!this.state.companyNameShow&&  <TextField
                                className={classes.textField}
                                style={{width:400,backgroundColor:'white'}}
                                autoFocus
                                variant="outlined"
                                name="name"
                                error={this.state.errors.name}
                                helperText={this.state.errors.name}
                                onChange={this.handleChange}
                            />
                       }
                            <IconButton aria-label="delete" style={{float:"right", marginRight:50}} onClick={this.editRegistrationNumberHandle}>
  <EditRoundedIcon fontSize="default" />
</IconButton>    
{this.state.registrationEditPen &&<IconButton onClick={this.handleRegistrationNumberEdit} aria-label="delete" style={{float:"right"}} >
  <DoneOutlineRoundedIcon fontSize="default" />
</IconButton>                                
    }
 <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
                                Registration Number
                            </Typography>
    
    {this.state.registrationNumberShow && <Typography variant="subtitle1" gutterBottom>
                               {input.registrationnumber} {/* 1212121212 */}
                            </Typography>
                            }
                                                   {!this.state.registrationNumberShow &&   <TextField
                                className={classes.textField}
                                style={{width:200,backgroundColor:'white'}}
                                autoFocus
                                variant="outlined"
                                name="registrationnumber"
                                error={this.state.errors.registrationnumber}
                                helperText={this.state.errors.registrationnumber}
                                onChange={this.handleChange}
                                
                            />
                       }
                                              {/************* */ }

 <IconButton aria-label="delete" style={{float:"right", marginRight:50}} onClick={this.editContactHandle}>
  <EditRoundedIcon fontSize="default" />
</IconButton>    
{this.state.contactEditPen &&<IconButton aria-label="delete" onClick={this.handleContactNumberEdit} style={{float:"right"}} >
  <DoneOutlineRoundedIcon fontSize="default" />
</IconButton>                                
    }
                            <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
                                Contact Number
                            </Typography>
 {this.state.contactShow &&<Typography variant="subtitle1" gutterBottom>
                                {input.phone}
                                {/* +9613458283 */}
                            </Typography>
    }
                           {!this.state.contactShow &&   <TextField
                                className={classes.textField}
                                style={{width:260,backgroundColor:'white'}}
                                autoFocus
                                variant="outlined"
                                name="phone"
                                error={this.state.errors.phone}
                                helperText={this.state.errors.phone}
                                onChange={this.handleChange}
                            />
                       }
                       {/************* */ }
                            <IconButton aria-label="delete" style={{float:"right" , marginRight:50}} onClick={this.editWebsiteHandle}>
  <EditRoundedIcon fontSize="default" />
</IconButton>    
{this.state.websiteEditPen &&<IconButton aria-label="delete" onClick={this.handlewebSiteEdit}  style={{float:"right"}} >
  <DoneOutlineRoundedIcon fontSize="default" />
</IconButton>                                
    }
                            <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
                                Website
                            </Typography>
 {this.state.websiteShow &&<Typography variant="subtitle1" gutterBottom>
                               
                               {input.wsite}
                                {/* www.smartbscorp.com */}
                            </Typography>
    }
                           {!this.state.websiteShow &&   <TextField
                                className={classes.textField}
                                style={{width:260,backgroundColor:'white'}}
                                autoFocus
                                variant="outlined"
                                name="wsite"
                                error={this.state.errors.wsite}
                                helperText={this.state.errors.wsite}
                                onChange={this.handleChange}
                                required
                            />
                       }
                           <IconButton aria-label="delete" style={{float:"right", marginRight:50}} onClick={this.editLocationHandle}>
  <EditRoundedIcon fontSize="default" />
</IconButton>    
{this.state.locationEditPen &&<IconButton aria-label="delete" style={{float:"right"}} >
  <DoneOutlineRoundedIcon fontSize="default" />
</IconButton>                                
    }
                             <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
                                Location
                            </Typography>
                            
                            {this.state.locationDetailsShow && <Typography variant="subtitle1" gutterBottom>
                               {input.city} {/* Jeddah */}
                            </Typography>
                            }
                                                   {!this.state.locationDetailsShow &&   <FormControl style={{width:200}} size="medium" variant="standard" >

<InputLabel id="demo-simple-select-label">Categories</InputLabel>
<Select
  labelId="demo-simple-select-label"
  id="demo-simple-select"
  value=""
>
  <MenuItem value={10}>Jeddah</MenuItem>
  <MenuItem value={20}>Riyadh</MenuItem>
  <MenuItem value={30}>Makkah</MenuItem>
</Select>
</FormControl>
                       }
                            <IconButton aria-label="delete" style={{float:"right", marginRight:50}} onClick={this.editCategoryHandle}>
  <EditRoundedIcon fontSize="default" />
</IconButton>
{this.state.categoryEditPen &&<IconButton aria-label="delete" style={{float:"right"}} >
  <DoneOutlineRoundedIcon fontSize="default" />
</IconButton>                                
    }    
                            <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
                                Category
                            </Typography>

                            {this.state.categoryDetailsShow && <Typography variant="subtitle1" gutterBottom>
                                {input.c_name}
                            </Typography>
                            }
                                                   { !this.state.categoryDetailsShow &&  <FormControl style={{width:200}} size="medium" variant="standard" >

              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                name="CategoryId"
                label="CategoryId"    
                onChange={this.handleChange}         
              >
                  {categories.length ? categories.map(inp =>
                      <MenuItem key={inp.id} value={inp.id}>{inp.c_name}</MenuItem>                      
                      ): null}
 
                {/* <MenuItem value={10}>Construction</MenuItem>
                <MenuItem value={20}>Software</MenuItem>
                <MenuItem value={30}>Engineering</MenuItem> */}
              </Select>
            </FormControl>
            }
{/* <TextField
                                className={classes.textField}
                                style={{width:400,backgroundColor:'white'}}
                                autoFocus
                                variant="outlined"
                                name="email"
                                required
                            /> */}
                       
                            <IconButton aria-label="delete" style={{float:"right", marginRight:50}} onClick={this.editCompanyDescHandle}>
  <EditRoundedIcon fontSize="default" />
</IconButton>   
{this.state.companyDescEditPen &&<IconButton aria-label="delete" onClick={this.handleCompanyDescEdit} style={{float:"right"}} >
  <DoneOutlineRoundedIcon fontSize="default" />
</IconButton>                                
    } 
                            <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
                                Company Description
                            </Typography>
                            {this.state.companyDescShow && <Typography variant="subtitle1" gutterBottom>
                            {input.descr}
                            </Typography>
    }
                           {!this.state.companyDescShow &&   <TextField
                                className={classes.textField}
                                style={{width:700,backgroundColor:'white'}}
                                autoFocus
                                multiline
                                variant="outlined"
                                name="descr"
                                error={this.state.errors.descr}
                                helperText={this.state.errors.descr}
                                onClick={this.handleChange}
                                required
                            />
                       }
                            <IconButton aria-label="delete" style={{float:"right", marginRight:50}} onClick={this.EditAccountHandle}>
  <EditRoundedIcon fontSize="default" />
</IconButton>    
                            <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
                                Registration Document
                            </Typography>
                            <IconButton onClick={this.regDocDown}>
                            <GetAppIcon style={{ fontSize: 40 }}/>
                            </IconButton>
                            {/* <Typography variant="subtitle1" gutterBottom>
                                Document
                            </Typography> */}



                        {/* </Paper> */}
                    </Grid>

                </Grid>

            </div>
        )
    }
}

//export default Company Account

export default () => {
    const classes = useStyles();
    return (
        <CompanyAccount classes={classes} />
    )
}

