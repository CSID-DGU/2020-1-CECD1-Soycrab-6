import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import GraphPage from './pages/GraphPage';
import NodeEditPage from './pages/NodeEditPage';
import EventEditPage from './pages/EventEditPage';

function App() {
  return (
    <>
      <Route path="/" component={GraphPage} exact={true} />
      <Route path="/nodes/edit/:id" component={NodeEditPage} />
      <Route path="/events/edit/:parType/:parId/:id" component={EventEditPage} />
    </>
  );
};

export default App;
