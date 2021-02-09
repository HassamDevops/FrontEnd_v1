import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import PageOne from './components/PageOne/PageOne';
import PageTwo from './components/LandingPage/PageTwo';
import HomePage from './components/LandingPage/HomePage';
import PostProject from './components/LandingPage/PostProject';
import ProjectList from './components/LandingPage/ProjectList';
import IndHomePage from './components/LandingPage/IndHomePage';
import VenHomePage from './components/LandingPage/VenHomePage';
import ProjectPage from './components/LandingPage/ProjectPage';
import ProjectPageTileView from './components/LandingPage/ProjectPageTileView';
import ContactUs from './components/LandingPage/ContactUs';
import ResetPassword from './components/LoginForm/ResetPassword'
import CompanyAccount from './components/AccountPage/CompanyAccount'
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/login" component={LoginForm} exact/>
             <Route path="/register" component={RegistrationForm}/>
             <Route path="/page1" component={PageOne}/>
             <Route path="/post-project" component={PostProject}/>
             <Route path="/project-list" component={ProjectList}/>
             <Route path="/home" component={HomePage}/>
             <Route path="/indhome" component={IndHomePage}/>
             <Route path="/venhome" component={VenHomePage}/>
             <Route path="/project-page/id:id" component={ProjectPage} />
             <Route path="/project-tileview/id:id" component={ProjectPageTileView} />
             <Route path="/contactus" component={ContactUs} />
             <Route path="/forgotpassword" component={ResetPassword}/>
             <Route path="/account" component={CompanyAccount} />
             <Route path="/" component={PageTwo}/>

           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;












////   import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";



// export default function App() {
//   const preventDefault = (event) => event.preventDefault();
//   return (
//       );
// }
    // <Router>
    //     //<Container component="main" maxWidth="xs">
    //         <Switch>
    //           <Route path="/page1">
    //             <PageOne/>
    //           </Route>            
    //           <Route path="/login">
    //             <LoginForm/>
    //           </Route>
    //           <Route path="/register">
    //             <RegistrationForm/>
    //           </Route>
    //            <Route path="/" exact={true}>
    //             <h1>Hello World !!</h1>
    //             <Link href="/login">
    //               Login
    //             </Link><br/>
    //             <Link href="/register">
    //               Registration
    //             </Link>
    //             <Link href="/page1">
    //               Page1
    //             </Link><br/>
    //             <Button />
    //           </Route>    
    //         </Switch>
    //    // </Container>
    //     </Router>