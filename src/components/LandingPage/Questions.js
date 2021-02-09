import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: theme.spacing(1),
    marginTop: theme.spacing(1.9),

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

  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#33ab9f',
    '&:hover': {
      backgroundColor: '#009688',
    }
  }

}));


export default class Questions extends React.Component {


  constructor(props) {
    super(props)
    this.state = {
      values: '',
      // new vales
      tagged: false,
      firstInput: '',
      secondInput: '',
      value: '',
      textFieldShow: false,
      remove:false,
      submit:false,
      askQuestion:true
      // new vales end

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    //new below
    this.addClick = this.addClick.bind(this)
  }


  createUI() {

    //new line below
    const { firstInput, secondInput, tagged, values } = this.state;

    return this.state.values.map((el, i) =>
      <div id="id" key={i} style={{ /*        display: "flex",
    justifyContent: "flex-start"position:"relative", left:-760 */ /*marginRight: "500px"*/
      }}>
        <form onSubmit={this.handleSubmit}>
          <Grid container>
            <Grid item xs={10} sm={11}>

              {tagged && <h5>{values} </h5>}

              <TextField
                value={firstInput}
                name="firstInput"


               type="text" variant="outlined" fullWidth label="Question" value={el || ''} onChange={this.handleChange.bind(this, i)} />
            </Grid>
          </Grid>
          <Button type='button' variant="contained" size="small" style={{
            backgroundColor: '#33ab9f',
            '&:hover': {
              backgroundColor: '#009688',
            }
          }} color="primary" onClick={this.removeClick.bind(this, i)}>Remove</Button>

          <Button type='submit' variant="contained" size="small" style={{
            backgroundColor: '#33ab9f',
            '&:hover': {
              backgroundColor: '#009688',
            }
          }} color="primary" value='Submitted' id='bid' > {/*onClick={(e) => this.handleClick(e)}*/}
            {tagged ? 'Tagged' : 'Tag '}
        Submit
    </Button>
        </form>
      </div>
    )
  }

  removeClick(i) {

    let values = [this.state.values]
    console.log("values in remove click",this.state.values)
    values.splice(i, 1)
    this.setState({ values })
  }

  //new handle click
  handleClick(e) {
    //console.log('e.target.value: ',e.target.name)
    this.setState({
      tagged: true,
      [e.target.name]: e.target.value
    });
    e.preventDefault();
    console.log('The link was clicked.');
  }

  handleChange(event) {
    console.log('event.target.name: ', event.target.name)
    console.log('e.target.value: ', event.target.value)

    //let values = this.state.values;
    //values = event.target.value;
    this.setState({ firstInput: event.target.value });
  }
  handleSubmit(event) {

    //console.log('event.target.name: ',event.target.name)
    //console.log('event.target.value: ',event.target.value)
    console.log()
    this.setState({
      tagged: true,
      textFieldShow: false,
      remove:false,
      submit:false
      //  [event.target.name]: event.target.value
    });
    console.log('The submit was clicked.');

    alert('Question was posted: ' + this.state.firstInput)
    event.preventDefault();
  }
  addClick() {
    this.setState(prevState => ({ values: prevState.values, textFieldShow: true,remove:true,submit:true, askQuestion:false }))

  }
  render() {

    const { firstInput, secondInput, tagged, values } = this.state;

    return (
      <div>
        <Grid container>
          <Grid item xs={10} sm={8}>


            {/* <form onSubmit={this.handleSubmit} > */}
            {/* {this.createUI()} */}


            <div id="id" style={{ /*        display: "flex",
    justifyContent: "flex-start"position:"relative", left:-760 */ /*marginRight: "500px"*/
            }}>
              <form onSubmit={this.handleSubmit}>
                <Grid container>
                  <Grid item xs={10} sm={11}>

                    {tagged && <h4>{firstInput} </h4>}

                    {this.state.textFieldShow && <TextField
                      value={firstInput}
                      name="firstInput"


                      type="text" variant="outlined" fullWidth label="Question" onChange={this.handleChange.bind(this)} />}
                  </Grid>
                </Grid>
                {this.state.remove && <Button type='button' variant="contained" size="small" style={{
                  backgroundColor: '#33ab9f',
                  '&:hover': {
                    backgroundColor: '#009688',
                  }
                }} color="primary" onClick={this.removeClick.bind(this)}>Remove</Button>}

              {this.state.submit &&  <Button type='submit' variant="contained" size="small" style={{
                  backgroundColor: '#33ab9f',
                  '&:hover': {
                    backgroundColor: '#009688',
                  }
                }} color="primary" value='Submitted' id='bid' > {/*onClick={(e) => this.handleClick(e)}*/}
                  {tagged ? 'Tagged' : 'Tag '}
        Submit
    </Button>}
              </form>
            </div>
             
            {this.state.askQuestion && <Button type='button' variant="contained" size="small" style={{
              backgroundColor: '#33ab9f',
              '&:hover': {
                backgroundColor: '#009688',
              }
            }} color="primary" onClick={this.addClick}>
              Ask Question
                </Button>}


          </Grid>
        </Grid>



      </div>

    )
  }
}

