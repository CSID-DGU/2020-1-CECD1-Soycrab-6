import React from 'react';
import './App.scss';
import HeadNavbar from './components/HeadNavbar';
import GraphApp from './containers/GraphApp';

function App() {
  return (
    <>
      <HeadNavbar />
      <GraphApp />;
    </>
  );
};

export default App;
