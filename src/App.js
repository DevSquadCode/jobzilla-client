import Home from './pages/Home/Home.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
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

function App() {

  return (
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
        <Route path='/addReview'>
          <AddReview />
        </Route>
        <Route path='/createCandidateProfile'>
          <CreateCandidateProfile></CreateCandidateProfile>
        </Route>
        <Route path='/showCandidateProfile'>
          <ShowCandidateProfile />
        </Route>
        <Route path='/addJob'>
          <AddJob></AddJob>
        </Route>
        <Route path='/blogs'>
          <CreateBlogs/>
        </Route>
        <Route path='/AddBlogs'>
          <AddBlogs/>
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
