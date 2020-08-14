import React from 'react';
import FilterEditContainer from '../containers/FilterEditContainer';
import HeadNavbar from '../components/shared/HeadNavbar';

function FilterEditPage({ match }) {
  const { id, edgeId } = match.params;
  const filterId = parseInt(id, 10);
  const eId = parseInt(edgeId, 10);

  return (
    <>
      <HeadNavbar />
      <FilterEditContainer
        realId={filterId}
        edgeId={eId}
      />
    </>
  )
};

export default FilterEditPage;