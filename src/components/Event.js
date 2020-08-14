import React from 'react';
import { Link } from 'react-router-dom';


function Event({ realId, parentType, parentId }) {
  return (
    <div>
      <Link to={`/events/edit/${parentType}/${parentId}/${realId}`}>
        {realId}번 째 이벤트
      </Link>
    </div>
  )
};

export default Event;