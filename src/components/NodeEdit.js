import React from 'react';
import Event from './Event';

function NodeEdit({ node }) {
  const { realId, filterId, isEnd, events, traceVars } = node;

  return (
    <div>
      <h1>{realId}번 노드입니다.</h1>
      {events.map(
        event => <Event 
                  key={event.realId}
                  realId={event.realId}
                  parentType='node'
                  parentId={realId} />
      )}
    </div>
  )
};

export default NodeEdit;