import * as React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Sources from './Sources';
function App() {
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Link to='/' className='navbar-brand'>
            COVID-19 Vaccine Tracker Canada
          </Link>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Link to='/about' className='nav-link'>
                About
              </Link>
              <Link to='/sources' className='nav-link'>
                Sources
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/sources'>
            <Sources />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function About() {
//   return <h2>About</h2>;
// }
// function Sources() {
//   return <h2>Sources</h2>;
// }

export default App;
