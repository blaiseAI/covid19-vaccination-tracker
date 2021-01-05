import './App.css';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>Covid-19 Vaccination Tracker</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default App;
