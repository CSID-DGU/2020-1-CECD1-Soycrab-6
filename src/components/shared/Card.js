import React from 'react';
import styled from 'styled-components';

const CardBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
`;

const CardBody = styled.div`
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1.25rem;
`
const CardTitle = styled.div`
  margin-bottom: .75rem;
`

function Card({card_title}) {
  return (
    <CardBox>
      <CardBody>
        <CardTitle>
          {card_title}
        </CardTitle>
      </CardBody>
    </CardBox>
  )
}

export default Card;