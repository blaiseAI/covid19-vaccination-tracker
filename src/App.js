import './App.css';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>COVID-19 Vaccine Tracker Canada</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#features'>About</Nav.Link>
            <Nav.Link href='#pricing'>Sources</Nav.Link>
          </Nav>
          {/* <Nav>
            <NavDropdown title='Menu' id='collasible-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default App;
