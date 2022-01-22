import React from 'react';
import {
  Brand,
  CTA,
  Navbar,
} from './Components';
import {
  Blog,
  Footer,
  Header,
  Features,
  Possible,
  WhatGPT,
} from './Containers';
import './app.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possible />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
