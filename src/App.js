import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Navbar from "./components/layouts/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';
import UpdateProject from './components/projects/UpdateProject';
import Home from './components/home/home';
import Profile from './components/auth/profile'


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar />
       <Switch>
       <Route exact path='/' component={Home} />
       <Route  path='/dashboard' component={Dashboard} />
       <Route path='/project/:id' component={ProjectDetail} />
       <Route path='/login' component={SignIn}/>
       <Route path='/signup' component={SignUp} />
       <Route path='/create' component={CreateProject} /> 
       <Route path='/profile' component={Profile} /> 
       <Route path='/update/:id' component={UpdateProject} />
       </Switch>
    </div>
    </BrowserRouter>
  );
} 

export default App;
 