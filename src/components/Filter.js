import React from 'react';
import { Link } from 'react-router-dom';

function Filter({ filter }) {
  const { realId, edgeId } = filter;

  return (
    <Link to={`/filters/${edgeId}/${realId}`}>
      나는 필터입니다.
    </Link>
  )
}

export default Filter;