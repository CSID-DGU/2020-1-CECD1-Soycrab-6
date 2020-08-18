import React from 'react';

function PropagatorEdit({ propagator }) {
  const { realId, edgeId, alias, events, fromTraceVar, toTraceVar } = propagator;

  return (
    <div>
      {realId}-{edgeId} 전파자 수정 페이지
      <h1>fromTraceVar: {fromTraceVar}</h1>
      <h1>toTraceVar: {toTraceVar}</h1>
    </div>
  )
};

export default PropagatorEdit;