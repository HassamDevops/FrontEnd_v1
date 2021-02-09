import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import SearchBar from "material-ui-search-bar";

import SearchService from "../../services/SearchService.js"

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { Input } from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   appBar: {
//     borderBottom: `1px solid ${theme.palette.divider}`,
//     backgroundColor: "#dddddd"
//   }
// }));

class SearchBarClass extends React.Component {
  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);
    // Set the state directly. Use props if necessary.
    this.state = {
      loggedIn: false,
      currentState: "not-panic",
      someInitialValue: this.props.initialValue,
      input: {},
      searchInputs:{},
      searchValue:"",
      errors: {}
    }
    this.handleChange=this.handleChange.bind(this)
   // this.submitSearch=this.submitSearch.bind(this)
   // this.handleOnChange=this.handleOnChange.bind(this)
  }
  handleChange(event){
    let input=this.state.searchInputs
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

 async componentDidMount(){
    let response=await SearchService.getCategoryData()
    console.log('categories are: ', response)
   this.setState({
     input:response.data
   })    
  }
//   handleOnChange=(event)=>{
//     let input=this.state.searchInput
//     let errors=this.state.errors
//     console.log('event target name: ',event.target.name)
//     console.log('descr in handle change: ',event.target.value)
// console.log(input)
//   }
handleSubmit(value){
  let input={
    SearchValue:this.state.searchValue,
    CategoryId:this.state.searchInputs.CategoryId,
    DatePosted:this.state.searchInputs.DatePosted
  }
  const formData=new FormData();
  // formData.append("SearchValue",input.SearchValue)
  // formData.append("CategoryId",input.CategoryId)
  // formData.append("DatePosted",input.DatePosted)
  console.log('input is: ',input)
  
  //IF SearchValue empty and other two selected then ask to enter SearchValue
  if(input.SearchValue!=="" &&  input.CategoryId!==undefined && input.DatePosted!==undefined)
  {localStorage.setItem('SearchValue',input.SearchValue)
  localStorage.setItem('CategoryId',input.CategoryId)
  localStorage.setItem('DatePosted',input.DatePosted)
  }
    window.location="/project-list"
  // SearchService.sendSearchData(formData,function(response){
//   console.log('response from search bar' , response);
//           if(response.status === 200 && response.statusText === "OK"){
//             alert("Redirecting to project list!!")
//            // window.location="/project-list"
//           }else{
//             alert("Something wrong");
//           }
// })
}
  render() {
    const classes = this.props.classes;
    const {input}=this.state
    return(
          <Box mt={5} className={classes.searchBarBox}>
            <SearchBar name="search" onChange={(newValue) => {this.setState({ searchValue: newValue }) 
            console.log(newValue)}}
//            onRequestSearch={()=>this.handlesubmit(this.state.value)}
            onRequestSearch={()=>this.handleSubmit(this.state.searchValue)}
            />
      
            {/* <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Google Maps"
        style={{minWidth:'500px'}}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      </Paper> */}

           {this.props.projectListHref==null &&( <Grid style={{justifyContent:'center', alignItems:'center'}}> 
            <FormControl className={classes.formControl} >
              <InputLabel id="demo-simple-select-label">Categories</InputLabel>
              <Select
                name="CategoryId"
                label="CategoryId"    
                onChange={this.handleChange} 
              >
               {input.length ? input.map(inp =>
                      <MenuItem key={inp.id} value={inp.id}>{inp.c_name}</MenuItem>                      
                      ): null}               
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Date Posted</InputLabel>
              <Select
                name="DatePosted"
                label="DatePosted"    
                onChange={this.handleChange} 
              >
                <MenuItem value={'yesterday'}>Yesterday</MenuItem>
                <MenuItem value={'lastweek'}>Last Week</MenuItem>
                <MenuItem value={'lastmonth'}>Last Month</MenuItem>
              </Select>
            </FormControl>
            </Grid>
           )}
        </Box>
    )
  }
}

export default (props) => {
    return (
        <SearchBarClass classes={props.classes} projectListHref={props.projectListHref}/>
    )
}
