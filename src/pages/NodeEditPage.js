import React from 'react';
import styled from 'styled-components';
import NodeEditContainer from '../containers/NodeEditContainer';
import HeadNavbar from '../components/shared/HeadNavbar';

function NodeEditPage({ match }) {
  const { id } = match.params;
  const nodeId = parseInt(id, 10);

  console.log(nodeId)

  const VariableBox = styled.div`
    padding: 1.8rem;
    text-align: center;
  `;

  return (
    <>
      <HeadNavbar />
      <VariableBox> 
        <NodeEditContainer nodeId={nodeId} />
      </VariableBox>
    </>
  )
};

export default NodeEditPage;