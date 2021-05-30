import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';
import MobileNav from './components/MobileNav';
import About from './components/About';
import Featured from './components/Featured';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Landing from './components/Landing';


function App() {
  return <div className="App">
  <Router>
    <Header />
    <Landing />
      <About />
      <Featured />
      <Contact />
      <Footer />
  {/* <Switch>
    <Route exact path='/'>

      </Route>
  </Switch> */}
  <MobileNav />
  </Router>
</div>;
}



export default App;
