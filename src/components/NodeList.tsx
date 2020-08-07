import React from 'react';
import { NodesType } from '../modules/nodes';
import Node from './Node'
import { Row } from 'react-bootstrap';

type NodeListProps = {
  nodes: NodesType;
  onRemove: (id: number) => void;
}

function NodeList({ nodes, onRemove }: NodeListProps) {
  if (nodes.length === 0) return <p>등록된 노드가 없습니다.</p>
  return (
    <Row>
      {nodes.map(node => (
        <Node node={node} onRemove={onRemove} />
      ))}
    </Row>
  );
}

export default React.memo(NodeList);