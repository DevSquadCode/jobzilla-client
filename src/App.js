import Home from './pages/Home/Home.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './global.css';
import NotFound from './components/NotFound/NotFound.jsx';
import Login from './pages/authentication/Login/Login.jsx';
import RegisterAsJobSeeker from './pages/authentication/RegisterAsJobSeeker/RegisterAsJobSeeker.jsx';
import RegisterAsRecruiter from './pages/authentication/RegisterAsRecruiter/RegisterAsRecruiter.jsx';
import AddReview from './components/AddReview/AddReview.js';
import CreateCandidateProfile from './components/Candidates/CreateCandidateProfile/CreateCandidateProfile.js';
import ShowCandidateProfile from './components/Candidates/ShowCandidateProfile/ShowCandidateProfile.js';
import CreateBlogs from './components/Blogs/CreateBlogs'
import AddJob from './components/AddJob/AddJob'
import AddBlogs from './components/Blogs/AddBlogs.js';
import SingleBlog from './components/Blogs/SingleBlog.js';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';
import { getDecodedUser } from './pages/authentication/AuthManager'
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register/jobSeeker'>
          <RegisterAsJobSeeker />
        </Route>
        <Route path='/register/recruiter'>
          <RegisterAsRecruiter />
        </Route>
        <Route path='/home'>
          <Home />
        </Route>
          <PrivateRoute path='/addReview'>
          <AddReview />
          </PrivateRoute>
          <PrivateRoute path='/createCandidateProfile'>
          <CreateCandidateProfile></CreateCandidateProfile>
          </PrivateRoute>
          <PrivateRoute path='/showCandidateProfile'>
          <ShowCandidateProfile />
          </PrivateRoute>
          <PrivateRoute path='/addJob'>
          <AddJob></AddJob>
          </PrivateRoute>
        <Route path='/blogs'>
          <CreateBlogs/>
          </Route>

          <PrivateRoute path='/AddBlogs'>
          <AddBlogs/>
          </PrivateRoute>
        
        <Route path='/singleBlog/:id'>
          <SingleBlog/>
        
        </Route>
          
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>

    </Router>
    </UserContext.Provider>
  );
}

export default App;
