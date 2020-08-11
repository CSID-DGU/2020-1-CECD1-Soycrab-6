import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NodeEdit from '../components/NodeEdit';
import { getNode } from '../modules/nodes';

function NodeEditContainer({ nodeId }) {
  const { data, loading, error } = useSelector(state => state.nodes.node);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNode(nodeId))
  }, [nodeId, dispatch]);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <NodeEdit node={data} />;
};

export default NodeEditContainer;