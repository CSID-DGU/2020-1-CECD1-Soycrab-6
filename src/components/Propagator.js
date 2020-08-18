import React from 'react';

function Propagator({ propagator }) {
  const { edgeId, realId } = propagator;

  return (
    <a href={`/propagators/edit/${edgeId}/${realId}`} className="list-group-item list-group-item-action" key={propagator.realId}>
      전파자 #{realId}-#{edgeId}
    </a>
  );
};

export default Propagator;