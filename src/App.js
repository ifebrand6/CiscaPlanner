import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Navbar from "./components/layouts/Navbar";
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetail from './components/projects/ProjectDetail'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar />
       <Switch>
       <Route exact path='/' component={Dashboard} />
       <Route path='/project/:id' component={ProjectDetail} />
       </Switch>
    </div>
    </BrowserRouter>
  );
} 

export default App;
 