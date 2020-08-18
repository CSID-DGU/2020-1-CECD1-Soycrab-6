import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';
import GraphPage from './pages/GraphPage';
import NodeEditPage from './pages/NodeEditPage';
import InfoPage from './pages/InfoPage';
import EventEditPage from './pages/EventEditPage';
import EdgeEditPage from './pages/EdgeEditPage';
import FilterEditPage from './pages/FilterEditPage';
import PropagatorEditPage from './pages/PropagatorEditPage';
import HeadNavbar from './components/shared/HeadNavbar';

function App() {
  return (
    <>
      <HeadNavbar />
      <div className="container">
        <Route path="/" component={GraphPage} exact={true} />
        <Route path="/nodes/edit/:id" component={NodeEditPage} />
        <Route path="/edges/edit/:fromId/:toId" component={EdgeEditPage} />
        <Route path="/info" component={InfoPage} />
        <Route path="/events/edit/:parType/:parId/:id" component={EventEditPage} />
        <Route path="/filters/:edgeId/:id" component={FilterEditPage} />
        <Route path="/propagators/edit/:edgeId/:id" component={PropagatorEditPage} />
      </div>
    </>
  );
};

export default App;
