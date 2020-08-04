import React, { useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState } from '../modules';
import { addNode, removeNode } from '../modules/nodes';
import NodeInsert from '../components/NodeInsert';
import NodeList from '../components/NodeList';

function NodeApp() {
  const nodes = useSelector((state: RootState) => state.nodes);


  const dispatch = useDispatch();

  const onInsert = useCallback((text: string) => {
    dispatch(addNode(text));
  }, [dispatch]);

  const onRemove = useCallback((id: number) => {
    dispatch(removeNode(id));
  }, [dispatch]);

  return (
    <>
      <NodeInsert
        onInsert={onInsert}
      />
      <NodeList
        nodes={nodes}
        onRemove={onRemove}
      />
    </>
  );
};

export default React.memo(NodeApp);