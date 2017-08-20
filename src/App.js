import React from 'react';

import './App.css';

const cats = [
  'http://lorempixel.com/350/350/cats/',
  'http://lorempixel.com/350/350/cats/',
  'http://lorempixel.com/350/350/cats/',
  'http://lorempixel.com/350/350/cats/',
  'http://lorempixel.com/350/350/cats/',
  'http://lorempixel.com/350/350/cats/',
  'http://lorempixel.com/350/350/cats/',
  'http://lorempixel.com/350/350/cats/',
  'http://lorempixel.com/350/350/cats/',
  'http://lorempixel.com/350/350/cats/',
  'http://lorempixel.com/350/350/cats/',
  'http://lorempixel.com/350/350/cats/'
];

const App = () => (
  <div className='images'>
    {cats.map((cat, index) => {
      return <div className='image' key={index}><img src={cat} alt='placeholder kitten' /></div>;
    })}
  </div>
);

export default App;
