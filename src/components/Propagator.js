import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const PropagatorBody = styled.div`
  color: black;
  cursor: pointer;

  &:hover {
    background-color: rgba(115, 202, 37, 0.2);
  }
`;

function Propagator({ propagator }) {
  const { edgeId, realId } = propagator;
  const history = useHistory();

  const goToPropagatorEdit = function(edgeId, realId){
    history.push(`/propagators/edit/${edgeId}/${realId}`);
  };

  return (
    <PropagatorBody onClick={() => goToPropagatorEdit(edgeId, realId)} className="list-group-item list-group-item-action" key={propagator.realId}>
      전파자 #{realId}-#{edgeId}
    </PropagatorBody>
  );
};

export default Propagator;