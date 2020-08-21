import React from 'react';
import { useHistory } from 'react-router-dom';

function Filter({ filter }) {
  const { realId, edgeId } = filter;
  const history = useHistory();

  const goToFilterEdit = function(edgeId, realId) {
    history.push(`/filters/${edgeId}/${realId}`);
  };

  return (
    <button onClick={() => goToFilterEdit(edgeId, realId)} 
       className="list-group-item list-group-item-action">
         활성필터
    </button>
  );
};

export default Filter;