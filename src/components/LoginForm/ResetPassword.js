import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MenuBarClass from '../LandingPage/MenuBar';
import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
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
    menuBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: grey[500],
        maxHeight: 45
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(4, 3),
        // [theme.breakpoints.up('md')]: {
        //   padding: theme.spacing(8, 6),
        // },
    },
    searchBarBox: {
        backgroundColor: grey[300],
        padding: theme.spacing(3),
    },
    carouselItem: {
        backgroundColor: grey[300],
        padding: theme.spacing(3),
        border: `1px solid ${theme.palette.divider}`,
        minHeight: 200
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        marginTop: theme.spacing(5)
        //paddingLeft
    },
    textField: {
        marginLeft: theme.spacing(12),
        marginRight: theme.spacing(12),
        //width: 100,
        //height: 400,
        marginBottom: theme.spacing(1),
        //paddingTop: theme.spacing(1)
    },
    mar: {
        marginTop: theme.spacing(2),
        paddingTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(12),
        marginRight: theme.spacing(12),
        backgroundColor: '#33ab9f',
        '&:hover': {
          backgroundColor: '#009688',
        }

        //backgroundColor:'white'
    },
    backgroundVideo: {

        height: '50%',
        width: '50%',
        // float: 'left',
        left: '50%',
        top: '50%',
        // top: 0,
        // padding: 'none',
        position: 'absolute', /* optional depending on what you want to do in your app */
        objectFit: 'cover',
        transform: 'translate(-50%,-50%)',
        zIndex: '-1'

    },
    flexboxitem: {
        width: "600px",
        margin: "10px",
        border: "3px",
        backgroundColor: '#e6f4f3'
    }
}));

export class ResetPassword extends Component {
    
constructor(props) {
    super(props)

    this.state = {
    errors:{},
    input:{}        
    }
        this.handleChange=this.handleChange.bind(this)
        this.passwordResetClick=this.passwordResetClick.bind(this)
}
handleChange(event){

    let errors=this.state.errors
    let input=this.state.input
    input[event.target.name]=event.target.value
    errors[event.target.name]=""
    this.setState({
        errors:errors,
        input:input
    })
}
passwordResetClick(event){

    event.preventDefault()
    let input=this.state.input
    let {isValid,errors}=ValidationService.validateResetPassword(input)
    this.setState({
        errors:errors
    })
    alert('we here now')
}
    render() {
        const classes = this.props.classes;
        return (
//             <div>
//                 <MenuBarClass classes={classes} />

//                 {/* <div style={{backgroundColor:'goldenrod', marginLeft:300,   marginRight:200,marginTop:60,marginBottom:200,textAlign:"center"}}>Golden color */}
//                 <div
//                     style={{
//                         position: 'absolute',
//                         left: '50%',
//                         top: '50%',
//                         transform: 'translate(-50%, -50%)',
//                         backgroundColor: '#e6f4f3'
//                     }}>
//                     {/* <Grid item xs={12} color="secondary"justify="center"> */}
//                     <Grid sm={12}>
//                     <Typography variant="h3" gutterBottom marked="center" align="center" style={{ textTransform: "uppercase" }}>
//                         Forgot your password?
// </Typography>
//                     <Typography variant="body2" align="center">
//                         {"Enter your email address below and we'll " +
//                             'send you a link to reset your password.'}
//                     </Typography>
//                     </Grid>
//                     <form >
//                         <FormControl className={classes.formControl}>
//                             <TextField
//                                      className={classes.textField}
//                                 style={{width:400,backgroundColor:'white'}}
//                                 autoFocus
//                                 variant="outlined"
//                                 name="email"
//                                 required
//                             />
//                             <Button
//                                 type="submit"

//                                 variant="contained"
//                                 color="primary"
//                                 // style={{float: 'right',backgroundColor: '#33ab9f',
//                                 // '&:hover': {
//                                 //   backgroundColor: '#009688',
//                                 // },}}
//                                 style={{ width: 400, fontWeight: "bold" }}
//                                 className={classes.mar}
//                             >
//                                 Submit
//   </Button>

//                         </FormControl>
//                     </form>
//                     {/* </Grid> */}
//                 </div>
//                 {/* </div> */}
//             </div>
            <React.Fragment>
                <MenuBarClass classes={classes} />
                <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', height: '500px' }}>
                    <div className={classes.flexboxitem} style={{ minHeight: '400px' }}>
                    <Typography variant="h3" gutterBottom marked="center" align="center" style={{ textTransform: "uppercase" }}>
                         Forgot your password?
 </Typography>
                     <Typography variant="body2" align="center">
                         {"Enter your email address below and we'll " +
                            'send you a link to reset your password.'}
                    </Typography>
                    <form onSubmit={this.passwordResetClick}>
                         <FormControl className={classes.formControl}> {/*className={classes.formControl}  className={classes.textField}*/}
                             <TextField
                                className={classes.textField}
                                style={{width:400,backgroundColor:'white'}}
                                autoFocus
                                variant="outlined"
                                name="Email"
                                error={this.state.errors.Email}
                                helperText={this.state.errors.Email}
                                onChange={this.handleChange}
                            />
                            <Button
                                type="submit"

                                variant="contained"
                                color="primary"
                                // style={{float: 'right',backgroundColor: '#33ab9f',
                                // '&:hover': {
                                //   backgroundColor: '#009688',
                                // },}}
                                style={{ width: 400, fontWeight: "bold" }}
                                className={classes.mar}
                            >
                                Submit
  </Button>

                        </FormControl>
                    </form>

                    </div>

                </div>
</React.Fragment >



        )
    }
}

//export default ResetPassword
export default () => {
    const classes = useStyles();
    return (
        <ResetPassword classes={classes} />
    )
}