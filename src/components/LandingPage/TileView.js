import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Chip from '@material-ui/core/Chip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import GetAppIcon from '@material-ui/icons/GetApp';
import axios from 'axios'

class TileViewClass extends React.Component {
  constructor(props) {
    // Required step: always call the parent  class' constructor
    super(props);
    // Set the state directly. Use props if necessary.
    this.state = {
      loggedIn: false,
      currentState: "not-panic",
      someInitialValue: this.props.initialValue,
      input: [],
      errors: {}
    }
  }
//this method will be executed when the component mounts for the first time
    // and is executed only once during the components lifetime
   async componentDidMount() {
  //     let jwt= document.cookie//.jwt
  //     // Get all the cookies pairs in an array
  //     let cookiearray = jwt.split(';');
  //     // Now take key value pair out of this array
  //     let name=null
  //     let value = null
  //     for(var i=0; i<cookiearray.length; i++) {
  //       name = cookiearray[i].split('=')[0];
  //       value = cookiearray[i].split('=')[1];
  // console.log("Key is : " + name + " and Value is : " + value);
  //      }
  //     console.log('jwt is ',jwt)
  
  //     if(!value)
  //     {
  //       value=''
  //     }
  let data={
  searchValue:localStorage.getItem('SearchValue'),
   categoryId:localStorage.getItem('CategoryId'),
   datePosted:localStorage.getItem('DatePosted')
  }
   console.log('search storage',data.searchValue)
console.log('category storage',data.categoryId)
console.log('dateposted storage',data.datePosted)


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
      if(data.searchValue !==undefined || data.searchValue!==null)
      {//all three inputs will come and will be passed ahead
      await  axios.get('http://localhost:3000/search/search-project',{params:{searchValue:data.searchValue,categoryId:data.categoryId,datePosted:data.datePosted}},{headers,withCredentials: true})
            .then(responseData => {
              console.log('back from    search data:' , responseData);
             
              
              this.setState({
                input: responseData.data,
                error: ""
            })
          })  
      console.log('back from search')
      }
      else
       {     axios.get('http://localhost:3000/project/getprojects',{headers,withCredentials: true})
            .then(responseData => {
              console.log('responseData:' , responseData);
              console.log('href ',this.props.hreff)
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
      }
      // axios.get('https://jsonplaceholder.typicode.com/posts')
      //     .then(response => {
      //         console.log(response)
      //         this.setState({
      //             input: response.data,
      //             error: ""
      //         })
      //     })
      //     .catch(error => {
      //         console.log(error)
      //         this.setState({
      //             errorMsg: 'Error retreiving data'
      //         })
      //     })
  }
  render() {
    const { input, errorMsg } = this.state
     
    const classes = this.props.classes;
    return (
<div>
      
       <Grid container spacing={3} direction="row"justify="flex-start"
       alignItems="flex-start" >
{input.length ?input.map(inp =>
        <Grid item xs={12} sm={4} key={inp.id}>
        
         <CardActionArea component="a"  href={`${this.props.hreff}${inp.id}`}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Grid container spacing={3}>
                      <Grid item xs={3} sm={8}>
                        <Chip variant="outlined" color="secondary" size="small" label="Open" />
                      </Grid>
                      <Grid item xs={3} sm={2}>
                       <GetAppIcon/>
                      </Grid>
                      <Grid item xs={3} sm={2}>
                       <VisibilityIcon/>
                      </Grid>
                  </Grid>
                  <Typography component="h2" variant="h5">
{inp.p_title.substring(0,18)}..
                  </Typography>
                  {/* <Typography variant="subtitle1" color="textSecondary">
                    post Date
                  </Typography> */}
                  <Typography variant="subtitle1" color="textSecondary">
                    Due Date: {inp.p_deadline}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                  {inp.p_descr.substring(0,40)}...
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia className={classes.cardMedia} image="{post.image}" title="{post.imageTitle}" />
              </Hidden>
            </Card>
          </CardActionArea> 
        </Grid>
        ) : null}
        {/* <Grid item xs={12} sm={4}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                <Grid container spacing={3}>
                      <Grid item xs={3} sm={8}>
                        <Chip variant="outlined" color="secondary" size="small" label="Open" />
                      </Grid>
                      <Grid item xs={3} sm={2}>
                       <GetAppIcon/>
                      </Grid>
                      <Grid item xs={3} sm={2}>
                       <VisibilityIcon/>
                      </Grid>
                  </Grid>
                  <Typography component="h2" variant="h5">
                    Project Title 2 
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    post Date
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    Post Description
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia className={classes.cardMedia} image="{post.image}" title="{post.imageTitle}" />
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                <Grid container spacing={3}>
                      <Grid item xs={3} sm={8}>
                        <Chip variant="outlined" color="secondary" size="small" label="Open" />
                      </Grid>
                      <Grid item xs={3} sm={2}>
                       <GetAppIcon/>
                      </Grid>
                      <Grid item xs={3} sm={2}>
                       <VisibilityIcon/>
                      </Grid>
                  </Grid>
                  <Typography component="h2" variant="h5">
                    Project Title
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    post Date
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    Post Description
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia className={classes.cardMedia} image="{post.image}" title="{post.imageTitle}" />
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                <Grid container spacing={3}>
                      <Grid item xs={3} sm={8}>
                        <Chip variant="outlined" color="secondary" size="small" label="Open" />
                      </Grid>
                      <Grid item xs={3} sm={2}>
                       <GetAppIcon/>
                      </Grid>
                      <Grid item xs={3} sm={2}>
                       <VisibilityIcon/>
                      </Grid>
                  </Grid>
                  <Typography component="h2" variant="h5">
                    Project Title
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    post Date
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    Post Description
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia className={classes.cardMedia} image="{post.image}" title="{post.imageTitle}" />
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
               <Grid container spacing={3}>
                      <Grid item xs={3} sm={8}>
                        <Chip variant="outlined" color="secondary" size="small" label="Open" />
                      </Grid>
                      <Grid item xs={3} sm={2}>
                       <GetAppIcon/>
                      </Grid>
                      <Grid item xs={3} sm={2}>
                       <VisibilityIcon/>
                      </Grid>
                  </Grid>
                  <Typography component="h2" variant="h5">
                    Project Title
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    post Date
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    Post Description
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia className={classes.cardMedia} image="{post.image}" title="{post.imageTitle}" />
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <CardActionArea component="a" href="#">
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                 <Grid container spacing={3}>
                      <Grid item xs={3} sm={8}>
                        <Chip variant="outlined" color="secondary" size="small" label="Open" />
                      </Grid>
                      <Grid item xs={3} sm={2}>
                       <GetAppIcon/>
                      </Grid>
                      <Grid item xs={3} sm={2}>
                       <VisibilityIcon/>
                      </Grid>
                  </Grid>
                  <Typography component="h2" variant="h5">
                    Project Title
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    post Date
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    Post Description
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    Continue reading...
                  </Typography>
                </CardContent>
              </div>
              <Hidden xsDown>
                <CardMedia className={classes.cardMedia} image="{post.image}" title="{post.imageTitle}" />
              </Hidden>
            </Card>
          </CardActionArea>
        </Grid>
         */}
        
        
      </Grid>
      
</div>

      
    );
  }
}

export default (props) => {
    return (
        <TileViewClass classes={props.classes} hreff={props.hreff}/>
    )
}
