import React from 'react';
import { useHistory } from 'react-router-dom';
import LinkButton from './shared/LinkButton';

function Filter({ filter }) {
  const { realId, edgeId } = filter;
  const history = useHistory();

  const goToFilterEdit = function(edgeId, realId) {
    history.push(`/filters/${edgeId}/${realId}`);
  };

  return (
    <LinkButton onClick={() => goToFilterEdit(edgeId, realId)} 
       className="list-group-item list-group-item-action">
         활성필터
    </LinkButton>
  );
};

export default Filter;