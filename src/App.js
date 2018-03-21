import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Search from './components/Search'
import './App.css';
import Section from './components/section';

const App = () => (
  <div>
    <Header/> 
    <Main/>
    <Search/> 
    <Section /> 
  </div>
);

export default App;