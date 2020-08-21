import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const FilterBody = styled.div`
  color: black;
  cursor: pointer;

  &:hover {
    background-color: rgba(115, 202, 37, 0.2);
  }
`;

function Filter({ filter }) {
  const { realId, edgeId } = filter;
  const history = useHistory();

  const goToFilterEdit = function(edgeId, realId) {
    history.push(`/filters/${edgeId}/${realId}`);
  };

  return (
    <FilterBody onClick={() => goToFilterEdit(edgeId, realId)} 
       className="list-group-item list-group-item-action">
         활성필터
    </FilterBody>
  );
};

export default Filter;