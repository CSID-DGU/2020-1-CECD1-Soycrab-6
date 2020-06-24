import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../modules';
import { addNode, removeNode } from '../modules/nodes';
import NodeInsert from '../components/NodeInsert';
import NodeList from '../components/NodeList';
import { AliasProps } from '../components/Alias';

function NodeApp() {
  const nodes = useSelector((state: RootState) => state.nodes);
  const aliases: AliasProps[] = [];
  const dispatch = useDispatch();

  const onInsert = (text: string) => {
    dispatch(addNode(text));
  }

  const onRemove = (id: number) => {
    dispatch(removeNode(id));
  }

  return (
    <>
      <NodeInsert
        onInsert={onInsert}
      />
      <NodeList
        nodes={nodes}
        onRemove={onRemove}
        aliases={aliases}
      />
    </>
  );
}

export default NodeApp;