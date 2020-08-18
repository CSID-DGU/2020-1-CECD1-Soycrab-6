import React from 'react';
import Filter from './Filter';

function EdgeEdit({ edge }) {
  const { filter, filterId, propagators, source, target } = edge;

  return (
    <div>
      {source}번노드에서 {target}노드로 가는 Edge 수정 페이지입니다.
      { filter && <Filter filter={filter} /> }
    </div>
  )
};

export default EdgeEdit;