import React, { Component } from 'react';
import { Alert, Card, Row, Col } from 'antd';
import Dashboard from './Dashboard';
import Provinces from './Provinces';
class Home extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <Alert
          message='Informational Notes'
          description='Additional description and information about copywriting.'
          type='info'
          showIcon
          className='mt-4'
        />
        {/*
            Section I
            summary Cards
         */}
        <Dashboard />
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
      </div>
    );
  }
}

export default Home;
