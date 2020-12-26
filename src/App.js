import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import ErrorPage from './pages/404'
import Post from './templates/postTemplate'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route exact path="/:id" render={props => <Post {...props} />} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;
