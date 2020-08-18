import React from 'react';
import Filter from './Filter';
import Propagator from '../components/Propagator';

function EdgeEdit({ edge }) {
  const { filter, filterId, propagators, source, target } = edge;

  return (
    <>
      <h6 className="d-flex">Edge 수정페이지</h6>
      <h2>{source} => {target} Edge</h2>
      <div>
        {source}번노드에서 {target}노드로 가는 Edge 수정 페이지입니다.
        { filter && <Filter filter={filter} /> }
        {propagators.map(
          propagator=> <Propagator propagator={propagator} />)
        }
      </div>

    </>
  );
};

export default EdgeEdit;