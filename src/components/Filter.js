import React from 'react';
import { Link } from 'react-router-dom';

function Filter({ filter }) {
  const { realId, edgeId } = filter;

  return (
    <a href={`/filters/${edgeId}/${realId}`} 
       className="list-group-item list-group-item-action">
         활성필터
    </a>
  );
};

export default Filter;