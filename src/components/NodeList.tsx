import React from 'react';
import { NodesState } from '../modules/nodes';
import Node from './Node'
import { Row, Col } from 'react-bootstrap';
import { AliasProps } from './Alias';

type NodeListProps = {
  nodes: NodesState;
  onRemove: (id: number) => void;
  aliases: AliasProps[];
}

function NodeList({ nodes, onRemove, aliases }: NodeListProps) {
  if (nodes.length === 0) return <p>등록된 노드가 없습니다.</p>
  return (
    <Row>
      {nodes.map(node => (
        <Col sm={4}  key={node.id}>
          <Node node={node} onRemove={onRemove} aliases={aliases} />
        </Col>
      ))}
    </Row>
  );
}

export default React.memo(NodeList);