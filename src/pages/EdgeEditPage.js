import React, { useEffect } from 'react';
import EdgeEditContainer from '../containers/EdgeEditContainer';

function EdgeEditPage({ match }) {
  const { fromId, toId } = match.params;
  const fId = parseInt(fromId, 10);
  const tId = parseInt(toId, 10);

  var pageHistory = JSON.parse(localStorage.getItem('pageHistory'));
  var currentLocation = window.location.href.toString();
  pageHistory.push(currentLocation);
  localStorage.setItem('pageHistory', JSON.stringify(pageHistory));

  return (
    <>
      <div>
        <EdgeEditContainer
          fromId={fId}
          toId={tId}
        />
      </div>
    </>
  )
};

export default EdgeEditPage;