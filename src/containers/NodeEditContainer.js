import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NodeEdit from '../components/NodeEdit';
import { getNode, clearNode } from '../modules/nodes';
import Spinner from '../components/Spinner';

function NodeEditContainer({ nodeId }) {
  const { data, loading, error } = useSelector(state => state.nodes.node);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNode(nodeId));
    return () => {
      dispatch(clearNode());
    };
  }, [nodeId, dispatch]);

  if (loading && !data) return <Spinner />;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return <NodeEdit node={data} />;
};

export default NodeEditContainer;