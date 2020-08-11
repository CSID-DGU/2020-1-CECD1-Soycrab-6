import React from 'react';
function NodeEdit({ node }) {
  const { realId, filterId, isEnd, events, traceVars } = node;

  return (
    <div>
      <h1>{realId}번 노드입니다.</h1>
    </div>
  )
};

export default NodeEdit;