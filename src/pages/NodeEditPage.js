import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap'
import NodeEditContainer from '../containers/NodeEditContainer';
import HeadNavbar from '../components/HeadNavbar';

function NodeEditPage({ match }) {
  const { id } = match.params;
  const nodeId = parseInt(id, 10);

  const Container  = styled.div`

  `
  const VariableBox = styled.div`
    padding: 1.8rem;
    text-align: center;
    border: 1px solid #73ca25
  `
  return (
    <>
      <HeadNavbar />
      <VariableBox> 
        <NodeEditContainer nodeId={nodeId} />;
      </VariableBox>
    </>
  )
};

export default NodeEditPage;