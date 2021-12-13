import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// components
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';


// extra components
import ScrollToTop from './components/scrollTop/index';
// import RoleBaseRoute from './components/privateroute/index'

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App;