import './App.css';
import {Login, Register} from './components/login/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path = "/">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
