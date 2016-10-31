import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => {
  // debugger
  return (
  <div className='bench-bnb'>
    <h1>
      Welcome to BenchBnB!
    </h1>

    <GreetingContainer />

    {children}
  </div>
);};

export default App;
