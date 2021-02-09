import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import SearchBar from "material-ui-search-bar";

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
      errors: {}
    }
  }

  render() {
    const classes = this.props.classes;
    return(
          <Box mt={5} className={classes.searchBarBox}>
            <SearchBar/>

        </Box>
    )
  }
}

export default (props) => {
    return (
        <SearchBarClass classes={props.classes}/>
    )
}
