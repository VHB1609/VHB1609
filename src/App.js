import './App.css';
import Navigationbar from './components/Navigationbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Locations from './components/Locations';
import About from './components/About';

function App() {
  return (
    <div className="App">
        <Router>
          <Navigationbar/>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
          </Router>
    </div>
  );
}

export default App;
