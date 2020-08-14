import React from 'react';
import Filter from './Filter';

function EdgeEdit({ edge }) {
  const { realId, filter, filterId, propagators, source, target } = edge;

  return (
    <div>
      {realId}번째 Edge 수정 페이지입니다.
      <Filter filter={filter} />
    </div>
  )
};

export default EdgeEdit;