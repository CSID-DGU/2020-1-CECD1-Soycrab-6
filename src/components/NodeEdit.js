import React from 'react';

function NodeEdit({ node }) {
  const { id, events, traceVars } = node;

  return (
    <div>
      <h1>{id}번 노드 수정페이지 입니다.</h1>
      <h3>{events}</h3>
      <h5>{traceVars.join(', ')}</h5>
    </div>
  )
};

export default NodeEdit;