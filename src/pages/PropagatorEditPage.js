import React from 'react';
import PropagatorEditContainer from '../containers/PropagatorEditContainer';

function PropagatorEditPage({ match }) {
  const { id, edgeId } = match.params;
  const realId = parseInt(id, 10);
  const edId = parseInt(edgeId, 10);

  var pageHistory = JSON.parse(localStorage.getItem('pageHistory'));
  var currentLocation = window.location.href.toString();
  pageHistory.push(currentLocation);
  localStorage.setItem('pageHistory', JSON.stringify(pageHistory));

  return (
    <PropagatorEditContainer
      realId={realId}
      edgeId={edId}
    />
  );
};

export default PropagatorEditPage;