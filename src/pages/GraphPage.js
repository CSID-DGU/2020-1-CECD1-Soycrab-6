import React from 'react';
import GraphApp from '../containers/GraphApp';

function GraphPage() {
  localStorage.setItem('pageHistory', JSON.stringify(['/']));

  return <GraphApp />;
};

export default GraphPage;