import logo from './logo.svg';
import Home from './components/Home/Home/Home';
import Login from './components/Home/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import SingleBlog from './components/Home/SingleBlog/SingleBlog';
import AddPost from './components/Dashboard/AddPost/AddPost';
import ManagePost from './components/Dashboard/ManagePost/ManagePost';
import PrivateRoute from './components/Home/PrivateRoute/PrivateRoute';

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
        
        <PrivateRoute path="/dashboard">
         <Dashboard></Dashboard>
        </PrivateRoute>

          <PrivateRoute path="/addPost">
         <AddPost></AddPost>
          </PrivateRoute>
          
           <PrivateRoute path="/managePost">
         <ManagePost></ManagePost>
        </PrivateRoute>
          
          <Route path="/singleBlog/:id">
         <SingleBlog></SingleBlog>
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
