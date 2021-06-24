import logo from './logo.svg';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import Contact from './components/Home/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';


export const UserContext = createContext()



function App() {
  
  const [loggedInUser,setLoggedInUser] = useState({})
  
  return (
    
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
     <Router>
      
      <Switch>
      
        <Route path="/home">
         <Home></Home>
        </Route>
        
         <Route path="/login">
         <Login></Login>
        </Route>
        
        <Route path="/dashboard">
         <Dashboard></Dashboard>
        </Route>
        
        <Route path="/contact">
         <Contact></Contact>
        </Route>
        
        
          <Route exact path="/">
         <Home></Home>
        </Route>
      
      </Switch>
    
    </Router>
    
    </UserContext.Provider>
    
  );
}

export default App;
