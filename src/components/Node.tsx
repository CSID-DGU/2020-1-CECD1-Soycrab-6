import React from 'react';
import styled from 'styled-components';
import Alias, { AliasProps } from './Alias';
import { NodeState } from '../modules/nodes';
import { MdDelete, MdLibraryAdd } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addAlias } from '../modules/aliases';

type NodeProps = {
  node: NodeState;
  onRemove: (id: number) => void;
  aliases: AliasProps[];
};

const NodeBox = styled.div`
  padding: 1.8rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  background: #228be6;
  width: 350px;
  text-align: center;
  border-radius: 5px;
  position: relative;

  span {
    color: #c92a2a;
  }
`;

const Add = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const Remove = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

function Node({ node, onRemove, aliases }: NodeProps) {
  const handleRemove = () => onRemove(node.id);
  const dispatch = useDispatch();

  const onInsert = (name: string) => {
    dispatch(addAlias(node.id, name));
  }

  const handleInsert = () => onInsert('parseRequest');

  return (
    <NodeBox>
      <h4>{node.name}</h4>
      <Remove onClick={handleRemove}>
        <MdDelete />
      </Remove>
      <Add onClick={handleInsert}>
        <MdLibraryAdd />
      </Add>
      추적 변수 : <span>tained</span>
      <br />
      {aliases.map(alias => {
        if (alias.nodeId === node.id) {
          return (<Alias id={alias.id} nodeId={node.id} name={alias.name} key={alias.id} />)
        }
      }
      )}
    </NodeBox>
  )
};

export default Node;