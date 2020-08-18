import React from 'react';
import { useHistory } from 'react-router-dom';

function Propagator({ propagator }) {
  const { edgeId, realId } = propagator;
  const history = useHistory();

  const goToPropagatorEdit = function(edgeId, realId){
    history.push(`/propagators/edit/${edgeId}/${realId}`);
  }

  return (
    <button onClick={() => goToPropagatorEdit(edgeId, realId)} className="list-group-item list-group-item-action" key={propagator.realId}>
      전파자 #{realId}-#{edgeId}
    </button>
  );
};

export default Propagator;