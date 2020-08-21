import React from 'react';
import { useHistory } from 'react-router-dom';
import LinkButton from './shared/LinkButton';

function Propagator({ propagator }) {
  const { edgeId, realId } = propagator;
  const history = useHistory();

  const goToPropagatorEdit = function(edgeId, realId){
    history.push(`/propagators/edit/${edgeId}/${realId}`);
  };

  return (
    <LinkButton onClick={() => goToPropagatorEdit(edgeId, realId)} className="list-group-item list-group-item-action" key={propagator.realId}>
      전파자 #{realId}-#{edgeId}
    </LinkButton>
  );
};

export default Propagator;