import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import GraphPage from './pages/GraphPage';
import NodeEditPage from './pages/NodeEditPage';

function App() {
  return (
    <>
      <Route path="/" component={GraphPage} exact={true} />
      <Route path="/nodes/edit/:id" component={NodeEditPage} />
    </>
  );
};

export default App;
