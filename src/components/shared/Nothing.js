import React from 'react';
import styled from 'styled-components';

const NothingBox = styled.div`
  cursor: auto;

  &:hover {
    background-color: inherit;
  }
`;

function Nothing() {
  return <NothingBox className="list-group-item list-group-item-action">없음</NothingBox>;
}

export default Nothing;