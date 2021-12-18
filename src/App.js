import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// components
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// home page
import Home from './pages/home/index'

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
            <Route exact path="/home" component={Home}/>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App;