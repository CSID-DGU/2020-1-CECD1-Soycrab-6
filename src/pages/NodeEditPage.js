import React from 'react';
import styled from 'styled-components';
import NodeEditContainer from '../containers/NodeEditContainer';
import HeadNavbar from '../components/shared/HeadNavbar';

function NodeEditPage({ match }) {
  const { id } = match.params;
  const nodeId = parseInt(id, 10);

  return <NodeEditContainer nodeId={nodeId} />;
};

export default NodeEditPage;