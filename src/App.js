import React from 'react';
import './App.css';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import Navbar from "./components/layouts/Navbar";
import Dashboard from './components/dashboard/Dashboard'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Navbar />
       <Switch>
       <Route exact path='/' component={Dashboard} />
       </Switch>
    </div>
    </BrowserRouter>
  );
} 

export default App;
 