import React, { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
export class Sources extends Component {
  render() {
    return (
      <div className='container-fluid p-4'>
        <Card>
          <Card.Header as='h5'>Sources</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
            <Button variant='primary'>Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Sources;
