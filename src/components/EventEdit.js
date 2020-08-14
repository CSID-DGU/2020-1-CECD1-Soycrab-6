import React from 'react';

function EventEdit({ event }) {
  const { realId, args, base, callTargetRepr, parentId, parentType } = event;

  return (
    <div>
      {realId} 번째 이벤트 수정 페이지
      <h1>parentId: {parentId}</h1>
      <h1>parentType: {parentType}</h1>
    </div>
  )
};

export default EventEdit;