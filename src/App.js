import React from 'react';
import { Container, Row, Col } from 'react-grid-system';

import './App.css';

const cats = [
  'http://lorempixel.com/350/350/cats/',
  'http://lorempixel.com/350/350/cats/',
  'http://lorempixel.com/350/350/cats/',
  'http://lorempixel.com/350/350/cats/',
  'http://lorempixel.com/350/350/cats/',
  'http://lorempixel.com/350/350/cats/',
];

const App = () => (
  <Container className="images">
    <Row>
      {cats.map((cat, index) => {
        return <Col lg={4} key={index}><img src={cat} alt="placeholder kitten" /></Col>;
      })}
    </Row>
  </Container>
);

export default App;
