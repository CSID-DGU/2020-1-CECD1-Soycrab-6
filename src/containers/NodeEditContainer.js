import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NodeEdit from '../components/NodeEdit';
import { getNode, updateNodeName } from '../modules/nodes';
import StateRender from '../components/shared/StateRender';
import { reducerUtils } from '../lib/asyncUtils';

function NodeEditContainer({ nodeId }) {
  const { data, loading, error } = useSelector(
    state => state.nodes.node[nodeId] || reducerUtils.initial()
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNode(nodeId));
  }, [nodeId, dispatch]);

  const onChangeName = useCallback(name => dispatch(updateNodeName(nodeId, name)), [dispatch, nodeId]);

  if (loading || !data || error) {
    return <StateRender 
              loading={loading} 
              data={data} 
              error={error} />
  } else {
    return <NodeEdit 
              node={data}
              onChangeName={onChangeName} />;
  };
};

export default NodeEditContainer;