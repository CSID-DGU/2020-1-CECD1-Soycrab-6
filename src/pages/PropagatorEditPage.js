import React from 'react';
import PropagatorEditContainer from '../containers/PropagatorEditContainer';

function PropagatorEditPage({ match }) {
  const { id, edgeId } = match.params;
  const realId = parseInt(id, 10);
  const edId = parseInt(edgeId, 10);

  return (
    <PropagatorEditContainer
      realId={realId}
      edgeId={edId}
    />
  );
};

export default PropagatorEditPage;