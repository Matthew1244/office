import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Office from './components/Office';

function App() {
  return (
    <div className="">
<Router>
  <Switch>
    <Route exact path="/" component={Office} /> 
    <Route exact path="/login/confirm" component={Login} /> 
  </Switch>
</Router>
    </div>
  );
}

export default App;
