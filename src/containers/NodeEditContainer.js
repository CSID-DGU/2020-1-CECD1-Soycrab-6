import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NodeEdit from '../components/NodeEdit';
import { getNode } from '../modules/nodes';
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

  if (loading || !data || error) {
    return <StateRender loading={loading} data={data} error={error} />
  } else {
    return (
      <>
        <NodeEdit node={data} />
      </>
    )
  };
};

export default NodeEditContainer;