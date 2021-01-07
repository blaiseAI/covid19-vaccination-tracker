import React from 'react';
import { Statistic, Card, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
const Dashboard = ({ summary, isLoading }) => {
  return (
    <div>
      <div className='site-statistic-demo-card mt-4'>
        <Row gutter={16}>
          <Col xs={24} sm={12} lg={8} className='mb-4'>
            <Card loading={isLoading}>
              <Statistic
                title={`Administered doses`}
                value={summary.total_vaccinations}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix={false}
                suffix=''
              />
              <Statistic
                title={``}
                value={summary.change_vaccinations}
                precision={0}
                valueStyle={{ color: '#3f8600', fontSize: '12px' }}
                prefix={<ArrowUpOutlined />}
                suffix='Today'
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8} className='mb-4'>
            <Card loading={isLoading}>
              <Statistic
                title={`Delivered doses`}
                value={summary.total_vaccines_distributed}
                precision={0}
                valueStyle={{ color: '#3f8600' }}
                prefix={false}
                suffix=''
              />
              <Statistic
                title=''
                value={`${(summary.total_vaccinations * 100) / summary.total_vaccines_distributed}`}
                precision={2}
                valueStyle={{ color: '#3f8600', fontSize: '12px' }}
                prefix={<ArrowDownOutlined />}
                suffix='% of doses delivered have been administered'
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={8} className='mb-4'>
            <Card loading={isLoading}>
              <Statistic
                title={`Population percentage`}
                value={`${summary.total_vaccinations / summary.total_vaccines_distributed}`}
                precision={2}
                valueStyle={{ color: '#3f8600' }}
                prefix={false}
                suffix='%'
              />
              <Statistic
                title=''
                value={`${summary.total_vaccinations / summary.total_vaccines_distributed}`}
                precision={2}
                valueStyle={{ color: '#3f8600', fontSize: '12px' }}
                prefix={<ArrowDownOutlined />}
                suffix='% of the Canadian population has received at least one dose'
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
