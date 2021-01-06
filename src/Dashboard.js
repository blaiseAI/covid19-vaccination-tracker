import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
const Dashboard = () => {
  return (
    <div>
      <div className='site-statistic-demo-card my-5'>
        <Row gutter={16}>
          <Col xs={24} sm={12} lg={8} className='mb-4'>
            <Card>
              <Statistic
                title='Active'
                value={19619}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix='Today'
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8} className='mb-4'>
            <Card>
              <Statistic
                title='Idle'
                value={9.3}
                precision={2}
                valueStyle={{ color: '#cf1322' }}
                prefix={<ArrowDownOutlined />}
                suffix='%'
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8} className='mb-4'>
            <Card>
              <Statistic
                title='Active'
                value={11.28}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={<ArrowUpOutlined />}
                suffix='%'
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
