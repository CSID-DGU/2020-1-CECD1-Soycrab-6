import React from 'react';
import Node from '../components/Node';

function NodeContainer() {
  const initialState = [{
    id: 1,
    name: 'hello'
  }]

  return (
    <Node
      aliases={initialState}
    />
  )
}

export default NodeContainer;