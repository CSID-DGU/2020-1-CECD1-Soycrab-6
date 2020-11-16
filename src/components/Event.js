import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const EventBody = styled.div`
  color: black;
`;

function Event({ realId, parentType, parentId }) {
  const history = useHistory();
  const goToEventEdit = (e) => {
    history.push(`/events/edit/${parentType}/${parentId}/${realId}`);
  };

  return (
    <EventBody onClick={() => goToEventEdit(parentType, parentId, realId)}>
      이벤트 #{realId}
    </EventBody>
  )
};

export default Event;