import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


import Login from './pages/auth/Login';



// extra components
import ScrollToTop from './components/scrollTop/index';
import RoleBaseRoute from './components/privateroute/index'

const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  )
}