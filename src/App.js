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
