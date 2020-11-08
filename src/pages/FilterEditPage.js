import React from 'react';
import FilterEditContainer from '../containers/FilterEditContainer';

function FilterEditPage({ match }) {
  const { id, edgeId } = match.params;
  const filterId = parseInt(id, 10);
  const eId = parseInt(edgeId, 10);

  var pageHistory = JSON.parse(localStorage.getItem('pageHistory'));
  var currentLocation = window.location.href.toString();
  pageHistory.push(currentLocation);
  localStorage.setItem('pageHistory', JSON.stringify(pageHistory));

  return (
    <FilterEditContainer
      realId={filterId}
      edgeId={eId}
    />
  );
};

export default FilterEditPage;