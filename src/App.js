import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Intro from './components/Intro';


function App() {
  return <div className="App">
  <Router>
    <Header />
  <Switch>
    <Route exact path='/'>
      <Intro />
      </Route>
  </Switch>
  </Router>
</div>;
}



export default App;
