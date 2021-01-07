import React, { useState } from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Sources from './Sources';
import { Alert, Card, Row, Col } from 'antd';
import Dashboard from './Dashboard';
import Provinces from './Provinces';
import { getSummary } from './services/Summary';

const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.covid19tracker.ca/summary';
// console.log('Last updated ' + getSummary);
const fetchSummary = async (updateCb) => {
  const res = await fetch(API_URL);
  const json = await res.json();
  updateCb(json.data);
};
const fetchLastUpdated = async (updateCb) => {
  const res = await fetch(API_URL);
  const json = await res.json();
  updateCb(json.last_updated);
};

function App() {
  const [summarydata, setSummary] = useState([]);
  const [lastUpdated, setlastUpdated] = useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    fetchSummary(setSummary);
    fetchLastUpdated(setlastUpdated);
    setLoading(false);
  }, []);
  return (
    <Router>
      <div>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Link to='/' className='navbar-brand'>
            COVID-19 Vaccine Tracker | Canada
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
        <main className='container-fluid'>
          <Alert
            message='Informational Notes'
            description={`Last updated ${lastUpdated}`}
            type='info'
            showIcon
            className='mt-4'
          />
          {/*
            Section I
            summary Cards
         */}
          {summarydata.map((summary, index) => (
            <Dashboard summary={summary} isLoading={loading} key={index} />
          ))}

          {/*
            END of Section I
        */}
          {/*
            Section II
            Vaccination Description & MAP
        */}
          <Row gutter={16}>
            <Col span={12} xs={24} sm={24} lg={12} className='mb-4'>
              <Card title='Covid-19 Vaccinations in Canada' bordered={true}>
                Card content
              </Card>
            </Col>
            <Col span={12} xs={24} sm={24} lg={12} className='mb-4'>
              <Card title='Map' bordered={true}>
                Card content
              </Card>
            </Col>
          </Row>
          {/*
            END of Section II
         */}

          {/*
            Section III
            Doses By Province
         */}
          <Row gutter={16}>
            <Col span={24} className='mb-4'>
              <Card title='Doses By Province' bordered={true}>
                <Provinces />
              </Card>
            </Col>
          </Row>
          {/*
            End of Section III
         */}
        </main>
      </div>
    </Router>
  );
}

export default App;
