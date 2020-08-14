import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NodeEdit from '../components/NodeEdit';
import { getNode } from '../modules/nodes';
import Spinner from '../components/shared/Spinner';
import { reducerUtils } from '../lib/asyncUtils';

function NodeEditContainer({ nodeId }) {
  const { data, loading, error } = useSelector(
    state => state.nodes.node[nodeId] || reducerUtils.initial()
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNode(nodeId));
  }, [nodeId, dispatch]);

  if (loading && !data) return <Spinner />;
  if (error) return <div>에러 발생!</div>;
  if (!data) return null;

  return (
    <>
      <NodeEdit node={data} />
    </>
  );
};

export default NodeEditContainer;