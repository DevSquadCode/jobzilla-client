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
<<<<<<< HEAD
import SingleBlog from './components/Blogs/SingleBlog.js';
=======
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.js';
export const UserContext = createContext();
>>>>>>> 3e8b087883d89492801b04bf5b35e35ec9a0d854

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

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
<<<<<<< HEAD
        </Route>
        <Route path='/singleBlog'>
          <SingleBlog/>
        </Route>
=======
          </PrivateRoute>
>>>>>>> 3e8b087883d89492801b04bf5b35e35ec9a0d854
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
