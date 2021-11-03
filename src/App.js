import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Post from './templates/postTemplate'
import {ScrollToTop} from './components'

// Pages import
import Home from './pages/Home'
import ErrorPage from './pages/404'
import ContactUs from './pages/Contact'
import OurStory from './pages/Navbar-Pages/our-story'
import Collab from './pages/Navbar-Pages/collab'
import Careers from './pages/Navbar-Pages/careers'
import ComingSoon from './pages/ComingSoon';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/our-story" exact component={OurStory} />
        <Route path="/collab" exact component={Collab} />
        <Route path="/careers" exact component={Careers} />
        <Route path="/contact" exact component={ContactUs} />
        <Route path="/coming-soon" exact component={ComingSoon} />
        <Route exact path="/:id" render={props => <Post {...props} />} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
