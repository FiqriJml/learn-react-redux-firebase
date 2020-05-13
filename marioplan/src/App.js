import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import AuthorizedRoute from './AuthorizedRoute';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Switch>
              <AuthorizedRoute exact path='/' component={Dashboard} />
              <AuthorizedRoute path='/project/:id' component={ProjectDetails}/>
              <Route path='/signin' component={SignIn}/>
              <Route path='/signup' component={SignUp}/>
              <AuthorizedRoute path='/create' component={CreateProject}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
