import React from 'react';
import { Link } from 'react-router-dom';

function Propagator({ realId, edgeId }) {
  return (
    <div>
      <Link to={`/propagators/edit/${edgeId}/${realId}`}>
        전파자 #{realId}-#{edgeId}
      </Link>
    </div>
  );
};

export default Propagator;