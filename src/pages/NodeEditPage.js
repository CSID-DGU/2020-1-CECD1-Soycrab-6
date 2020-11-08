import React from 'react';
import NodeEditContainer from '../containers/NodeEditContainer';

function NodeEditPage({ match }) {
  const { id } = match.params;
  const nodeId = parseInt(id, 10);

  var pageHistory = JSON.parse(localStorage.getItem('pageHistory'));
  var currentLocation = window.location.href.toString();
  pageHistory.push(currentLocation);
  localStorage.setItem('pageHistory', JSON.stringify(pageHistory));

  return <NodeEditContainer nodeId={nodeId} />;
};

export default NodeEditPage;