import React from 'react';
import EdgeEditContainer from '../containers/EdgeEditContainer';

function EdgeEditPage({ match }) {
  const { fromId, toId } = match.params;
  const fId = parseInt(fromId, 10);
  const tId = parseInt(toId, 10);

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