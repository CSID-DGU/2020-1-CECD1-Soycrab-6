import React from 'react';
import { Link } from 'react-router-dom';


function Event({ realId, parentType, parentId }) {
  return (
    <div>
      <Link to={`/events/edit/${parentType}/${parentId}/${realId}`}>
        이벤트 #{realId} (이벤트 이름)
      </Link>
    </div>
  )
};

export default Event;