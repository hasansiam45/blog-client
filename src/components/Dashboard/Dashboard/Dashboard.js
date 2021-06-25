import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import MyNavbar from '../../Home/MyNavbar/MyNavbar';

const Dashboard = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    return (
        
        <div>
            <MyNavbar></MyNavbar>
            {
                loggedInUser.email === 'test@test.com' &&  <div className="text-center">
                <nav className="mt-5">
                    <ul>
                        <li className="m-2 text-white bg-blue-600 hover:bg-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-block cursor-pointer">
                            <Link to="addPost">Add Blogs</Link>
                        </li>
                        
                        <br /> <br />
                        
                        <li className="m-2 text-white bg-blue-600 hover:bg-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded inline-block cursor-pointer">
                            <Link to="managePost">Manage Blogs</Link>
                        </li>
                    </ul>
                </nav>
            </div>
       
            }
           
 
        </div>
    )
}

export default Dashboard
