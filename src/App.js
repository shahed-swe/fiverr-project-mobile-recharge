import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

// components
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Reset from './pages/auth/Reset'
// home page
import Home from './pages/home/index'
import Recharge from './pages/recharge';

// extra components
import ScrollToTop from './components/scrollTop/index';
// import RoleBaseRoute from './components/privateroute/index'

const App = () => {

  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/reset" component={Reset}/>
            <Route exact path="/recharge/:code" component={Recharge}/>
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  )
}

export default App;