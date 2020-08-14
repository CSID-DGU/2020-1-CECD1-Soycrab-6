import React from 'react';

function EventEdit({ event }) {
  const { realId, args, base, callTargetRepr, nodeId } = event;

  return (
    <div>
      {realId} 번째 이벤트 수정 페이지
    </div>
  )
};

export default EventEdit;